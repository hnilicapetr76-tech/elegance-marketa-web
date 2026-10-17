"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Souhlas s cookies třetích stran (mapa Google na stránce Kontakt).
 * Příspěvky z Facebooku stahuje náš server, prohlížeč se s Facebookem nespojuje.
 *
 * Ukládá se do localStorage pod klíčem "em-consent":
 *   "all"       – návštěvník souhlasil s vloženým obsahem
 *   "necessary" – odmítl, nic třetí strany se nenačte
 *
 * Změna se rozešle událostí "em-consent-change", aby na ni
 * vložená okna reagovala okamžitě, bez obnovení stránky.
 */

const KEY = "em-consent";
const EVENT = "em-consent-change";

function read(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function write(value: string) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* prohlížeč s blokovaným úložištěm — souhlas platí jen pro tuto návštěvu */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

function clear() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* nic k odstranění */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}

/** Sleduje aktuální stav souhlasu. */
function useConsent() {
  const [value, setValue] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setValue(read());
    setReady(true);

    const onChange = (e: Event) => setValue((e as CustomEvent).detail as string);
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  return {
    value,
    ready,
    accept: () => write("all"),
    decline: () => write("necessary"),
    reset: clear,
  };
}

/* ---------------------------------------------------------------- */

/** Tlačítko na stránce o ochraně údajů — vrátí volbu do výchozího stavu. */
export function ConsentReset() {
  const { value, ready, reset } = useConsent();

  if (!ready) return null;

  const popis =
    value === "all"
      ? "Máte povolenou vloženou mapu Google."
      : value === "necessary"
        ? "Vložená mapa Google je zablokovaná."
        : "Zatím jste se nerozhodl(a) — při procházení webu se vám zobrazí lišta.";

  return (
    <div className="warn">
      <p style={{ marginBottom: value === null ? 0 : 14 }}>
        <b>Vaše aktuální volba:</b> {popis}
      </p>
      {value !== null && (
        <button className="btn btn-out" onClick={reset}>
          Změnit volbu
        </button>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */

export function CookieBar() {
  const { value, ready, accept, decline } = useConsent();

  // Dokud nevíme, co je uloženo, nic nevykreslujeme — jinak by lišta
  // problikla i těm, kdo už dávno rozhodli.
  if (!ready || value !== null) return null;

  return (
    <div className="cbar" role="dialog" aria-label="Souhlas s cookies">
      <div className="cbar-in">
        <p>
          Na stránce Kontakt zobrazujeme mapu od Googlu, která si do vašeho prohlížeče ukládá
          vlastní cookies. Bez souhlasu ji nenačteme a zbytek webu funguje normálně.{" "}
          <Link href="/ochrana-osobnich-udaju">Více o zpracování údajů</Link>
        </p>
        <div className="cbar-btns">
          <button className="btn btn-out" onClick={decline}>
            Jen nezbytné
          </button>
          <button className="btn btn-gold" onClick={accept}>
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

function Blocked({ text, onAllow }: { text: string; onAllow: () => void }) {
  return (
    <div className="embed-blocked">
      <p>{text}</p>
      <button className="btn btn-out" onClick={onAllow}>
        Zobrazit
      </button>
    </div>
  );
}

export function MapFrame({ src, title }: { src: string; title: string }) {
  const { value, ready, accept } = useConsent();

  if (!ready) return <div className="embed-blocked" aria-hidden />;

  if (value !== "all") {
    return (
      <Blocked
        text="Zde se zobrazuje mapa s naší adresou. Načte se až po vašem souhlasu, protože Google si ukládá vlastní cookies."
        onAllow={accept}
      />
    );
  }

  return (
    <div data-lenis-prevent>
      <iframe className="map-frame" src={src} title={title} loading="lazy" frameBorder={0} />
    </div>
  );
}
