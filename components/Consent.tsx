"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  return { value, ready, accept: () => write("all"), decline: () => write("necessary") };
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

  const src =
    "https://www.facebook.com/plugins/page.php?href=" +
    encodeURIComponent(pageUrl) +
    "&tabs=timeline&width=500&height=640&small_header=false" +
    "&adapt_container_width=true&hide_cover=false&show_facepile=true&locale=cs_CZ";

  return (
    <iframe
      className="fb-frame"
      src={src}
      width={500}
      height={640}
      title="Příspěvky z našeho Facebooku"
      loading="lazy"
      scrolling="no"
      frameBorder={0}
      allow="encrypted-media"
    />
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
