import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "O nás — estetické centrum ve Šluknově",
  description:
    "Elegance Markéta je zdravotnické zařízení s lékařskými estetickými službami ve Šluknově. Samostatná ošetřovna pro každou službu, ověřené značky, individuální přístup.",
  alternates: { canonical: "/o-nas" },
};

export default function ONas() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">O nás</p>
          <div className="gline c" />
          <h1>Péče, které se dá věřit</h1>
        </div>
      </section>

      <section className="split">
        <div className="wrap split-in">
          <div className="split-img">
            <img
              src="/foto/interier-osetrovna.jpg"
              alt="Kosmetická ošetřovna v centru Elegance Markéta ve Šluknově"
              width={1100}
              height={1375}
              loading="lazy"
            />
          </div>
          <div>
            <p>
              Elegance Markéta je estetické centrum ve Šluknově. Fungujeme jako
              zdravotnické zařízení s lékařskými estetickými službami, což znamená, že u zákroků,
              které to vyžadují, máme odpovídající zázemí i odbornost.
            </p>
            <p>
              Zaměřujeme se na problematiky pleti, omlazení, relax a odpočinek. Pracujeme výhradně
              s ověřenými značkami kosmoceutik — René D&apos;essay, MEDIK8, La4imedical, Dermaheal
              HSR, ReviTrane a Croma Saypha — a s prémiovým soláriem ERGOLINE.
            </p>
            <p>
              Ke každé klientce přistupujeme individuálně. Konzultace je vždy prvním krokem: projdeme
              spolu, co vaše pleť potřebuje, co je reálné očekávat a co dává smysl. Nikdy vám
              nedoporučíme ošetření, které nepotřebujete.
            </p>
            <p>
              Na bezpečí si dáváme záležet. Nástroje sterilizujeme v medicínském autoklávu Enbio —
              u piercingu, permanentního make-upu i pedikúry je to to první, na co se ptáme sami
              sebe. Injekční zákroky, tedy dermální výplně a botulotoxin, provádí lékařka.
            </p>
            <p>
              A protože k péči patří i to, jak se u nás cítíte: na recepci je vždy připravená káva
              nebo něco malého k zakousnutí. Nikam vás nikdo nežene.
            </p>
            <ul className="pros">
              <li>Injekční zákroky provádí lékařka</li>
              <li>Nástroje sterilizujeme v medicínském autoklávu Enbio</li>
              <li>Samostatná ošetřovna pro každou službu</li>
              <li>Ověřené značky kosmoceutik</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap prose">
          <h2>Kde nás najdete</h2>
          <p>
            {SITE.street}, {SITE.zip} {SITE.city}. Jsme dostupní i pro klientky z Rumburku,
            Varnsdorfu a okolí Šluknovského výběžku.
          </p>
          <h2>Provozovatel</h2>
          <p>
            {SITE.owner}
            <br />
            IČ: {SITE.ico}
            <br />
            Zdravotnické zařízení s lékařskými estetickými službami
          </p>
        </div>
      </section>

      <AskSection />
    </>
  );
}
