import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { SERVICES } from "../../lib/site";

export const metadata: Metadata = {
  title: "Služby — kosmetika, estetická medicína, solárium",
  description:
    "Kosmetická ošetření, lékařské estetické aplikace, čínská medicína, solárium ERGOLINE a péče o ruce a nohy ve Šluknově. Přehled všech služeb centra Elegance Markéta.",
  alternates: { canonical: "/sluzby" },
};

export default function Sluzby() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Co nabízíme</p>
          <div className="gline c" />
          <h1>Naše služby</h1>
          <p>
            Široká škála ošetření v oblasti péče o tělo. Nevíte, co si vybrat? Napište nám a
            poradíme — konzultace je nezávazná.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.id} id={s.id}>
                <p className="ico">{s.n}</p>
                <h2 style={{ fontSize: 26, margin: "12px 0 11px" }}>{s.title}</h2>
                <p>{s.short}</p>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AskSection />
    </>
  );
}
