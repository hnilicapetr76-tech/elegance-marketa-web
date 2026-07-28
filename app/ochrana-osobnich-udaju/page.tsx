import type { Metadata } from "next";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Informace o zpracování osobních údajů návštěvníků webu a klientek centra Elegance Markéta ve Šluknově.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
  robots: { index: false, follow: true },
};

export default function Gdpr() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Informace</p>
          <div className="gline c" />
          <h1>Ochrana osobních údajů</h1>
        </div>
      </section>

      <section>
        <div className="wrap prose">
          <div className="warn">
            <b>Poznámka pro provozovatele:</b> tento text je základní šablona. Před ostrým
            spuštěním jej nechte zkontrolovat — zejména části o zpracování zdravotních údajů, které
            u estetických zákroků podléhají přísnějšímu režimu.
          </div>

          <h2>Kdo zpracovává vaše údaje</h2>
          <p>
            Správcem osobních údajů je {SITE.owner}, IČ: {SITE.ico}, se sídlem {SITE.street},{" "}
            {SITE.zip} {SITE.city}. Kontakt: {SITE.email}, {SITE.phone}.
          </p>

          <h2>Jaké údaje a proč</h2>
          <p>Prostřednictvím kontaktního formuláře na tomto webu zpracováváme:</p>
          <ul>
            <li>jméno a příjmení — abychom vás mohli oslovit,</li>
            <li>telefonní číslo — abychom se vám mohli ozvat zpět,</li>
            <li>e-mailovou adresu — nepovinně, jako alternativní způsob kontaktu,</li>
            <li>text vaší zprávy a zvolenou službu — abychom věděli, s čím vám pomoci.</li>
          </ul>
          <p>
            Právním základem je oprávněný zájem na vyřízení vaší poptávky, případně kroky před
            uzavřením smlouvy. Údaje nepoužíváme k zasílání obchodních sdělení bez vašeho souhlasu.
          </p>

          <h2>Jak dlouho je uchováváme</h2>
          <p>
            Poptávky uchováváme po dobu nezbytnou k jejich vyřízení, nejdéle 12 měsíců. Pokud se
            stanete naší klientkou, řídí se uchovávání zdravotnické dokumentace zvláštními právními
            předpisy.
          </p>

          <h2>Komu je předáváme</h2>
          <p>
            Zprávy z formuláře jsou doručovány prostřednictvím e-mailové služby, která vystupuje
            jako zpracovatel. Údaje nepředáváme dalším třetím stranám za marketingovými účely.
          </p>

          <h2>Vaše práva</h2>
          <ul>
            <li>právo na přístup ke svým údajům,</li>
            <li>právo na opravu nepřesných údajů,</li>
            <li>právo na výmaz,</li>
            <li>právo na omezení zpracování,</li>
            <li>právo vznést námitku proti zpracování,</li>
            <li>právo podat stížnost u Úřadu pro ochranu osobních údajů.</li>
          </ul>
          <p>
            Uplatnit je můžete na {SITE.email} nebo telefonicky na {SITE.phone}.
          </p>

          <h2>Cookies</h2>
          <p>
            Tento web nepoužívá reklamní ani sledovací cookies. Nezobrazujeme proto lištu se
            souhlasem — není co odsouhlasit.
          </p>
        </div>
      </section>
    </>
  );
}
