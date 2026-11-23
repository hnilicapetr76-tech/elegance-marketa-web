import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { PRICES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Ceník ošetření",
  description:
    "Orientační ceník kosmetických ošetření, estetické medicíny, čínské medicíny a solária v centru Elegance Markéta ve Šluknově. Konzultace zdarma.",
  alternates: { canonical: "/cenik" },
};

// Interní poznámky u položek (k doplnění / k potvrzení) jen na náhledu a při vývoji – na ostrém webu nikdy.
const SHOW_TODO =
  process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

// Množství drží pohromadě i na úzkém displeji: „— 1 ml“, „— 60 minut“ se nerozdělí na dva řádky.
const NBSP = "\u00a0";
const glueNum = (t: string) => t.replace(/(\d) (?=[^\d\s])/g, `$1${NBSP}`);
function keepQty(nm: string) {
  const i = nm.lastIndexOf(" — ");
  const tail = i < 0 ? "" : nm.slice(i + 3);
  if (i < 0 || !/^\d/.test(tail)) return glueNum(nm.replace(/ — /g, `${NBSP}— `));
  return (
    <>
      {glueNum(nm.slice(0, i))}
      <span className="qty">{`${NBSP}— ${glueNum(tail)}`}</span>
    </>
  );
}

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
              <h3>
                {g.group}
                {g.badge && <span className="price-badge">{g.badge}</span>}
              </h3>
              {g.desc && <p className="price-desc">{g.desc}</p>}
              {g.rows.map(([nm, pr, todo]) => (
                <div className="price-row" key={nm}>
                  <span className="nm">
                    {keepQty(nm)}
                    {SHOW_TODO && todo && <span className="price-todo">{todo}</span>}
                  </span>
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
