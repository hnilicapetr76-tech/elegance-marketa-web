"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "../lib/site";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" href="/" aria-label={SITE.name}>
          <span className="mono">
            <img src="/logo.png" alt="" width={54} height={54} />
          </span>
          <span className="brand-txt">
            <b>{SITE.shortName}</b>
            <span>{SITE.tagline}</span>
          </span>
        </Link>

        <nav className="links" aria-label="Hlavní navigace">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className={path === i.href ? "on" : ""}>
              {i.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-gold" href="/kontakt#zeptejte-se">
          Zeptejte se Markétky
        </Link>

        <button
          className="navtoggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? "Zavřít" : "Menu"}
        </button>
      </div>

      <nav className={open ? "mobmenu open" : "mobmenu"} aria-label="Mobilní navigace">
        {NAV.map((i) => (
          <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>
            {i.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
