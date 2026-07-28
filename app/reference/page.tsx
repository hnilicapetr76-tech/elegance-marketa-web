import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { FAQ, SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Reference a časté dotazy",
  description:
    "Hodnocení klientek centra Elegance Markéta ve Šluknově a odpovědi na časté dotazy — objednání, konzultace, délka ošetření, rušení termínu.",
  alternates: { canonical: "/reference" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Reference() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Reference</p>
          <div className="gline c" />
          <h1>Co říkají klientky</h1>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <p>
              Hodnocení našich klientek najdete na Facebooku — píší tam bez našeho zásahu, tak jak
              to mají.
            </p>
            <div className="cta-row" style={{ justifyContent: "center", marginTop: 30 }}>
              <a
                className="btn btn-out"
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Recenze na Facebooku
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">FAQ</p>
            <div className="gline c" />
            <h2>Časté dotazy</h2>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AskSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
