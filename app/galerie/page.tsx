import type { Metadata } from "next";
import AskSection from "../../components/AskSection";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Nahlédněte do estetického centra Elegance Markéta ve Šluknově — interiér, ošetřovny, solárium a výsledky ošetření.",
  alternates: { canonical: "/galerie" },
};

const ITEMS = [
  { t: "Interiér", wide: true },
  { t: "Ošetřovna" },
  { t: "Solárium" },
  { t: "Před / po" },
  { t: "Detail ošetření" },
  { t: "Před / po" },
  { t: "Recepce" },
];

export default function Galerie() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Galerie</p>
          <div className="gline c" />
          <h1>Nahlédněte k nám</h1>
          <p>
            Fotografie interiéru a výsledků ošetření. Připravujeme — brzy sem doplníme skutečné
            snímky ze salonu.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="gal">
            {ITEMS.map((i, n) => (
              <div className={i.wide ? "ph wide" : "ph"} key={n}>
                {i.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AskSection />
    </>
  );
}
