"use client";

/*
 * Pohyb na webu: plynulý scroll (Lenis) + animace (GSAP).
 *
 * Jak to vypnout:
 *  - celé: v app/layout.tsx smazat řádek <Motion />
 *  - jen plynulý scroll: níže SMOOTH_SCROLL = false
 * Kdo má v systému zapnuté „omezit pohyb“, animace ani plynulý scroll nedostane.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SMOOTH_SCROLL = true;
const EASE = "power3.out";

// Bloky, které se při scrollu jemně vysunou (na všech stránkách).
const REVEAL = [
  ".sec-head",
  ".phead",
  ".split-in > div:not(.split-img)",
  ".price-block",
  ".warn",
  ".faq",
  ".fb-wrap",
].join(",");

// Skupiny, kde se položky objevují postupně jedna po druhé.
const BATCH = [".grid > .card", ".rev-grid > .rev-card", ".gal > *", ".pros li"].join(",");

export default function Motion() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Plynulý scroll – jednou pro celý web, napojený na GSAP ticker.
  useEffect(() => {
    if (!SMOOTH_SCROLL) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ anchors: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Otevřená adresa s kotvou (např. /kontakt#zeptejte-se) – dojet na ni,
    // protože spuštění plynulého scrollu zastaví skok prohlížeče.
    if (window.location.hash) {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) requestAnimationFrame(() => lenis.scrollTo(target));
    }

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Animace – znovu po každé změně stránky.
  useGSAP(
    () => {
      const root = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Na mobilu (úzký displej, jeden sloupec) jsou pohyby výraznější,
        // jinak by na malé obrazovce skoro nebyly vidět.
        const mobile = window.matchMedia("(max-width: 900px)").matches;
        const M = mobile
          ? { rise: 70, dur: 1.1, start: "top 92%", cardRise: 60, cardX: 36, cardScale: 0.94, para: 12, paraScale: 1.26 }
          : { rise: 40, dur: 0.9, start: "top 85%", cardRise: 34, cardX: 0, cardScale: 1, para: 7, paraScale: 1.16 };

        // 1) Úvod: postupný nástup, nadpis vyjede slovo po slově.
        const hero = document.querySelector(".hero");
        if (hero) {
          const q = gsap.utils.selector(hero);
          const tl = gsap.timeline({ defaults: { ease: EASE } });
          tl.from(q(".hero-logo"), { autoAlpha: 0, scale: mobile ? 0.8 : 0.92, duration: 0.9 })
            .from(q(".eyebrow"), { autoAlpha: 0, y: 14, duration: 0.6 }, "-=0.5")
            .from(q("h1"), { autoAlpha: 0, duration: 0.01 }, "<")
            .from(q("h1 .hw > span"), { yPercent: 110, duration: 0.9, stagger: 0.12 }, "<")
            .from(
              q(".lead-sub, .claim, .hero-text, .cta-row, .badges"),
              { autoAlpha: 0, y: mobile ? 34 : 22, duration: 0.7, stagger: 0.09 },
              "-=0.45"
            );

          if (!mobile) {
            tl.from(q(".hero-img"), { autoAlpha: 0, y: 30, duration: 1.1 }, 0.15).from(
              q(".hero-img img"),
              { scale: 1.12, duration: 1.8, ease: "power2.out" },
              0.15
            );
          } else {
            // Na mobilu je fotka pod textem – rozehrát ji, až k ní člověk doscrolluje.
            const img = q(".hero-img");
            gsap.set(img, { autoAlpha: 0 });
            gsap
              .timeline({ scrollTrigger: { trigger: img[0], start: "top 88%", once: true } })
              .fromTo(
                img,
                { autoAlpha: 0, y: 70, scale: 0.92 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 1.2, ease: EASE }
              )
              .from(q(".hero-img img"), { scale: 1.3, duration: 1.9, ease: "power2.out" }, 0);
          }
        }
        root.classList.remove("mo");

        // 2) Bloky při scrollu.
        gsap.utils.toArray<HTMLElement>(REVEAL).forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: M.rise,
            duration: M.dur,
            ease: EASE,
            scrollTrigger: { trigger: el, start: M.start, once: true },
          });
        });

        // 3) Karty a seznamy postupně (na mobilu karty najíždějí střídavě zleva a zprava).
        //    Během nájezdu vypneme CSS přechod, aby se nepral s animací, a po ní ho vrátíme.
        const items = gsap.utils.toArray<HTMLElement>(BATCH);
        if (items.length) {
          gsap.set(items, {
            autoAlpha: 0,
            y: M.cardRise,
            x: (i, el: HTMLElement) =>
              M.cardX && el.matches(".card, .rev-card") ? (i % 2 ? M.cardX : -M.cardX) : 0,
            scale: (_i, el: HTMLElement) => (el.matches(".card, .rev-card, .gal > *") ? M.cardScale : 1),
          });
          ScrollTrigger.batch(items, {
            start: M.start,
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: mobile ? 1 : 0.75,
                ease: EASE,
                stagger: 0.08,
                onStart: () => gsap.set(batch, { transition: "none" }),
                clearProps: "transform,transition",
              }),
          });
        }

        // 4) Fotky v rámečku: parallax.
        gsap.utils.toArray<HTMLElement>(".split-img img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -M.para, scale: M.paraScale },
            {
              yPercent: M.para,
              scale: M.paraScale,
              ease: "none",
              scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });

      // Bez animací (omezený pohyb) nic neschovávat.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        root.classList.remove("mo");
      });

      // Po načtení písem se mohou posunout výšky – přepočítat spouštěče.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
