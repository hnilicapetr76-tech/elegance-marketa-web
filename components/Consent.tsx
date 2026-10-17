"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * Souhlas s cookies třetích stran (Facebook, Mapy.cz).
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
      ? "Máte povolený vložený obsah z Facebooku a Map Google."
      : value === "necessary"
        ? "Vložený obsah z Facebooku a Map Google je zablokovaný."
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
          Na webu zobrazujeme příspěvky z Facebooku a mapu z Mapy.cz. Tyto služby si do vašeho
          prohlížeče ukládají vlastní cookies. Bez souhlasu je nenačteme a zbytek webu funguje
          normálně.{" "}
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

export function FacebookFeed({ pageUrl }: { pageUrl: string }) {
  const { value, ready, accept } = useConsent();

  if (!ready) return <div className="embed-blocked" aria-hidden />;

  if (value !== "all") {
    return (
      <Blocked
        text="Zde se zobrazují naše příspěvky z Facebooku. Načtou se až po vašem souhlasu, protože Facebook si ukládá vlastní cookies."
        onAllow={accept}
      />
    );
  }

  return <FacebookFrame pageUrl={pageUrl} />;
}

/**
 * Facebook vykreslí náhled jen v šířce, o kterou si řekneme (180–500 px).
 * Pevných 500 px se na telefon nevejde a okno pak zůstane prázdné,
 * proto změříme skutečné místo a teprve s ním okno načteme.
 */
function FacebookFrame({ pageUrl }: { pageUrl: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const measure = () => {
      const w = Math.max(180, Math.min(500, Math.floor(box.clientWidth)));
      // jen při znatelné změně (otočení telefonu), ať se okno zbytečně nenačítá znovu
      setWidth((prev) => (Math.abs(prev - w) > 20 ? w : prev));
    };
    measure();
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(measure, 150);
    });
    ro.observe(box);
    return () => {
      ro.disconnect();
      clearTimeout(t);
    };
  }, []);

  const narrow = width < 400;
  const height = narrow ? 560 : 640;
  const src =
    "https://www.facebook.com/plugins/page.php?href=" +
    encodeURIComponent(pageUrl) +
    `&tabs=timeline&width=${width}&height=${height}&small_header=${narrow}` +
    "&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=cs_CZ";

  return (
    <div className="fb-box" ref={boxRef}>
      {width > 0 && (
        <iframe
          key={width}
          className="fb-frame"
          src={src}
          width={width}
          height={height}
          title="Příspěvky z našeho Facebooku"
          scrolling="no"
          frameBorder={0}
          allow="encrypted-media; clipboard-write; web-share"
        />
      )}
      <p className="fb-note">
        Nezobrazují se vám příspěvky? Některé prohlížeče (hlavně Safari na iPhonu) okno
        Facebooku blokují –{" "}
        <a href={pageUrl} target="_blank" rel="noopener noreferrer">
          otevřete si nás přímo na Facebooku
        </a>
        .
      </p>
    </div>
  );
}

export function MapFrame({ src, title }: { src: string; title: string }) {
  const { value, ready, accept } = useConsent();

  if (!ready) return <div className="embed-blocked" aria-hidden />;

  if (value !== "all") {
    return (
      <Blocked
        text="Zde se zobrazuje mapa s naší adresou. Načte se až po vašem souhlasu, protože Mapy.cz si ukládají vlastní cookies."
        onAllow={accept}
      />
    );
  }

  return (
    <iframe className="map-frame" src={src} title={title} loading="lazy" frameBorder={0} />
  );
}
