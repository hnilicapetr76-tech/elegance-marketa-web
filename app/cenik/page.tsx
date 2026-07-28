import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { PRICES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Ceník ošetření",
  description:
    "Orientační ceník kosmetických ošetření, estetické medicíny, čínské medicíny a solária v centru Elegance Markéta ve Šluknově. Konzultace zdarma.",
  alternates: { canonical: "/cenik" },
};

export default function Cenik() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Ceník</p>
          <div className="gline c" />
          <h1>Přehled cen</h1>
          <p>
            Kompletní ceník pro rok 2026. U rozsáhlejších ošetření vám konečnou cenu potvrdíme před
            zákrokem, ať víte, s čím počítat.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          {PRICES.map((g) => (
            <div className="price-block" key={g.group}>
              <h3>{g.group}</h3>
              {g.rows.map(([nm, pr]) => (
                <div className="price-row" key={nm}>
                  <span className="nm">{nm}</span>
                  <span className="dots" />
                  <span className="pr">{pr}</span>
                </div>
              ))}
            </div>
          ))}
          <p className="note">
            Nejste si jistí, které ošetření je pro vás vhodné? Napište nám — společně vybereme to,
            co dává smysl.
          </p>
        </div>
      </section>

      <AskSection />
    </>
  );
}
