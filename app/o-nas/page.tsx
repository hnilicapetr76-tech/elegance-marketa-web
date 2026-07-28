import type { Metadata } from "next";
import AskSection from "../../components/AskSection";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "O nás — estetické centrum ve Šluknově",
  description:
    "Elegance Markéta je zdravotnické zařízení s lékařskými estetickými službami ve Šluknově. Nově zrekonstruované prostory, ověřené značky, individuální přístup.",
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
          <div className="ph split-img">Fotografie interiéru</div>
          <div>
            <p>
              Elegance Markéta je nově zrekonstruované estetické centrum ve Šluknově. Fungujeme jako
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
            <ul className="pros">
              <li>Zdravotnické zařízení s lékařskými estetickými službami</li>
              <li>Nově zrekonstruované prostory</li>
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
