import Link from "next/link";
import AskSection from "../components/AskSection";
import { BRANDS, SERVICES, SITE } from "../lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <img
              className="hero-logo"
              src="/logo.png"
              alt="Logo Centrum estetické krásy, elegance Markéta"
              width={160}
              height={160}
            />
            <p className="eyebrow">Šluknov &middot; zdravotnické zařízení</p>
            <h1>
              Elegance <em>Markéta</em>
            </h1>
            <p className="lead-sub">Centrum estetické krásy</p>
            <p className="claim">Krása není luxus, ale péče, kterou si zasloužíte.</p>
            <p>
              Nadstandardní kosmetické a estetické služby se špičkovými produkty, díky kterým si
              nejen odpočinete, ale zároveň podtrhnete svou přirozenou krásu.
            </p>
            <div className="cta-row">
              <Link className="btn btn-gold" href="/kontakt#zeptejte-se">
                Zeptejte se Markétky
              </Link>
              <Link className="btn btn-out" href="/sluzby">
                Naše služby
              </Link>
            </div>
            <div className="badges">
              {BRANDS.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
          <div className="ph hero-img">Hlavní fotografie salonu</div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Co nabízíme</p>
            <div className="gline c" />
            <h2>Naše služby</h2>
            <p>
              Široká škála ošetření v oblasti péče o tělo — každé začíná nezávaznou konzultací, ať
              víte, do čeho jdete.
            </p>
          </div>
          <div className="grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.id}>
                <p className="ico">{s.n}</p>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn btn-out" href="/sluzby">
              Podrobnosti o službách
            </Link>
          </div>
        </div>
      </section>

      <section className="alt split">
        <div className="wrap split-in">
          <div className="ph split-img">Fotografie interiéru</div>
          <div>
            <p className="eyebrow">O nás</p>
            <div className="gline" />
            <h2>Péče, které se dá věřit</h2>
            <p>
              Elegance Markéta je zdravotnické zařízení s lékařskými estetickými službami ve
              Šluknově. Zaměřujeme se na problematiky pleti, omlazení, relax a odpočinek.
            </p>
            <p>
              Pracujeme výhradně s ověřenými značkami kosmoceutik a přístrojů. Ke každé klientce
              přistupujeme individuálně — konzultace je vždy prvním krokem.
            </p>
            <ul className="pros">
              <li>Zdravotnické zařízení s lékařskými estetickými službami</li>
              <li>Nově zrekonstruované prostory</li>
              <li>Ověřené značky kosmoceutik</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Reference</p>
            <div className="gline c" />
            <h2>Co říkají klientky</h2>
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

      <AskSection />
    </>
  );
}
