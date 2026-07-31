import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Nahlédněte do Centra estetické krásy elegance Markéta ve Šluknově — recepce, ošetřovny, nehtové studio, solárium a zázemí.",
  alternates: { canonical: "/galerie" },
};

const ITEMS = [
  { f: "exterier", t: "Vchod do centra", a: "Vchod do Centra estetické krásy elegance Markéta, Sokolská 1031 Šluknov" },
  { f: "recepce", t: "Recepce", a: "Recepce s čekacím koutem" },
  { f: "chodba", t: "Chodba", a: "Spojovací chodba s věšáky a šatnou" },
  { f: "kosmetika", t: "Kosmetická ošetřovna", a: "Kosmetická ošetřovna s ošetřovacím lehátkem a kosmetikou" },
  { f: "osetrovna", t: "Ošetřovna", a: "Ošetřovna se dvěma lehátky a denním světlem" },
  { f: "ordinace", t: "Ordinace", a: "Ordinace pro estetické zákroky s polohovacím křeslem" },
  { f: "manikura", t: "Nehtové studio", a: "Pracoviště manikúry a nehtové modeláže" },
  { f: "pedikura", t: "Pedikúra", a: "Pracoviště pedikúry s ošetřovacím křeslem" },
  { f: "solarium", t: "Solárium ERGOLINE", a: "Solárium ERGOLINE se samostatnou převlékací zónou" },
  { f: "sterilizator", t: "Sterilizace nástrojů", a: "Medicínský autokláv Enbio pro sterilizaci nástrojů" },
  { f: "nastroje", t: "Sterilní nástroje", a: "Sterilizované nástroje připravené k ošetření" },
  { f: "obcerstveni", t: "Občerstvení", a: "Káva a občerstvení připravené pro klientky na recepci" },
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
            Nově zrekonstruované prostory ve Šluknově — recepce, ošetřovny, nehtové studio, solárium
            i zázemí, kde sterilizujeme nástroje.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="gal">
            {ITEMS.map((i) => (
              <figure className="gal-item" key={i.f}>
                <img
                  src={`/foto/g-${i.f}.jpg`}
                  alt={i.a}
                  width={900}
                  height={900}
                  loading="lazy"
                />
                <figcaption>{i.t}</figcaption>
              </figure>
            ))}
          </div>

          <p className="note" style={{ marginTop: 40 }}>
            Ukázky konkrétních ošetření a výsledků průběžně zveřejňujeme na{" "}
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
              našem Facebooku
            </a>
            .
          </p>
        </div>
      </section>

      <AskSection />
    </>
  );
}
