import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { HOURS, HOURS_NOTE, SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Kontakt a provozní doba",
  description:
    "Elegance Markéta, Sokolská 1031, 407 77 Šluknov. Telefon +420 775 359 450. Napište nám a ozveme se vám zpět do jednoho pracovního dne.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Kontakt</p>
          <div className="gline c" />
          <h1>Ozvěte se nám</h1>
          <p>
            Zavolejte, napište, nebo použijte formulář níže. Ozveme se vám zpět obvykle do jednoho
            pracovního dne.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid">
            <article className="card">
              <p className="ico">Telefon</p>
              <h2 style={{ fontSize: 24, margin: "12px 0 11px" }}>
                <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </h2>
              <p>Nejrychlejší cesta, když spěcháte nebo potřebujete termín na poslední chvíli.</p>
            </article>

            <article className="card">
              <p className="ico">E-mail</p>
              <h2 style={{ fontSize: 24, margin: "12px 0 11px" }}>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </h2>
              <p>Napište nám kdykoliv — odpovídáme v pracovní dny.</p>
            </article>

            <article className="card">
              <p className="ico">Adresa</p>
              <h2 style={{ fontSize: 24, margin: "12px 0 11px" }}>
                {SITE.street}
              </h2>
              <p>
                {SITE.zip} {SITE.city}
                <br />
                Zdravotnické zařízení s lékařskými estetickými službami
              </p>
              {HOURS.length > 0 ? (
                <ul>
                  {HOURS.map((h) => (
                    <li key={h.d}>
                      {h.d} — {h.h}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ marginTop: 14 }}>{HOURS_NOTE}</p>
              )}
            </article>
          </div>
        </div>
      </section>

      <AskSection />
    </>
  );
}
