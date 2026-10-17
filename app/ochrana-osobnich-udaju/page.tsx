import type { Metadata } from "next";
import { ConsentReset } from "../../components/Consent";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Jak v Centru estetické krásy elegance Markéta ve Šluknově nakládáme s osobními údaji návštěvnic webu i klientek.",
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
          <p>
            Stručně a bez právnických obratů: co o vás víme, proč to potřebujeme a co s tím můžete
            udělat.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap prose">
          <h2>Kdo se o vaše údaje stará</h2>
          <p>
            Správcem osobních údajů je <b>{SITE.owner}</b>, IČ: {SITE.ico}, {SITE.street},{" "}
            {SITE.zip} {SITE.city} — Centrum estetické krásy elegance Markéta.
          </p>
          <p>
            S čímkoliv ohledně svých údajů se na nás můžete obrátit na{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> nebo{" "}
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>. Nemáme pověřence pro ochranu osobních
            údajů — jsme malý provoz a vyřizujeme to samy.
          </p>

          <h2>Když nám napíšete přes formulář</h2>
          <p>Z formuláře „Zeptejte se Markétky" se k nám dostane:</p>
          <ul>
            <li>jméno a příjmení — abychom vás mohly oslovit,</li>
            <li>telefonní číslo — abychom se vám mohly ozvat zpět,</li>
            <li>e-mail — nepovinně, když je vám milejší psaní než telefon,</li>
            <li>služba, která vás zajímá, a text zprávy — abychom věděly, s čím vám poradit.</li>
          </ul>
          <p>
            Zpracováváme to na základě vašeho souhlasu a proto, abychom mohly odpovědět na vaši
            poptávku. Nezakládáme si z toho databázi na rozesílání nabídek — pokud si od nás někdy
            budete přát novinky, řekneme si o souhlas zvlášť.
          </p>

          <h2>Když se stanete klientkou</h2>
          <p>
            U ošetření potřebujeme vědět víc než jen jméno a telefon. Podle typu zákroku se ptáme
            například na alergie, užívané léky, těhotenství, kožní onemocnění nebo prodělané
            zákroky. Tomu se říká <b>zvláštní kategorie osobních údajů</b> a zákon je chrání
            přísněji než ostatní.
          </p>
          <p>
            Neptáme se ze zvědavosti. U injekčních aplikací, permanentního make-upu, piercingu i
            chemických peelingů jsou kontraindikace důvodem, proč se zákrok někdy nesmí provést.
            Bez těch informací bychom vás mohly ohrozit.
          </p>
          <p>
            Máte právo nám je odmítnout sdělit. Berte ale prosím na vědomí, že v takovém případě
            vám některá ošetření nebudeme moci nabídnout — a nebude to tvrdohlavost, ale
            odpovědnost.
          </p>
          <p>
            Kromě toho, co nám sama řeknete, si poznamenáváme i to, co při ošetření zjistíme —
            například stav a typ pleti nebo jak jste reagovala na použité přípravky. Bez toho
            bychom při každé návštěvě začínaly od nuly.
          </p>
          <p>
            U zákroků, které spadají pod zdravotní služby, se vedení a uchovávání dokumentace řídí
            zvláštními právními předpisy.
          </p>

          <h2>Jak dlouho si údaje necháváme</h2>
          <ul>
            <li>
              <b>Poptávky z webu</b> — po dobu vyřízení, nejdéle 12 měsíců. Pak je mažeme.
            </li>
            <li>
              <b>Údaje klientek a dokumentace k ošetření</b> — po dobu, kterou ukládají právní
              předpisy, a dále po dobu běhu promlčecích a reklamačních lhůt. V každém případě
              nejdéle <b>10 let</b> od vašeho posledního ošetření.
            </li>
            <li>
              <b>Kontakt pro zasílání nabídek</b> — po dobu, kdy k nám chodíte, a dva roky poté.
              Nebo do chvíle, kdy nám řeknete, ať přestaneme.
            </li>
          </ul>

          <h2>Když vám občas napíšeme</h2>
          <p>
            Klientkám, které k nám chodí, čas od času pošleme SMS nebo e-mail — připomínku
            termínu, akční nabídku nebo novinku ze salonu. Vždy se to týká služeb, které u nás
            čerpáte nebo které s nimi souvisejí. Nic jiného vám neposíláme a vaše číslo ani adresu
            nikomu nepředáváme.
          </p>
          <p>
            <b>Kdykoliv to můžete zastavit.</b> Stačí odpovědět na zprávu, napsat na{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> nebo to říct při návštěvě. Přestaneme
            hned a nebudeme se ptát proč.
          </p>
          <p>
            Pokud nám napíšete jen přes formulář na webu a klientkou se nestanete, do rozesílání
            vás nezařadíme.
          </p>

          <h2>Kdo se k údajům ještě dostane</h2>
          <p>
            Neprodáváme je, nepředáváme reklamním sítím ani nikomu, kdo by vám na jejich základě
            něco nabízel. Používáme ale technické dodavatele, bez kterých by web a e-mail
            nefungovaly:
          </p>
          <ul>
            <li>poskytovatele provozu tohoto webu,</li>
            <li>službu, která doručí zprávu z formuláře do naší schránky,</li>
            <li>poskytovatele naší e-mailové schránky.</li>
          </ul>
          <p>
            Všichni vystupují jako zpracovatelé, mají to smluvně ošetřené a údaje smějí použít
            výhradně k tomu, k čemu je od nás dostali. Naše schránka i zprávy z formuláře jsou
            uloženy na serverech v Evropské unii; u dodavatelů se sídlem mimo EU je předání
            zajištěno standardními smluvními doložkami schválenými Evropskou komisí.
          </p>
          <p>
            Chcete-li vědět, o které konkrétní společnosti jde, napište nám na{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> — rády vám je jmenovitě sdělíme.
          </p>

          <h2>Cookies a obsah z Facebooku a Map</h2>
          <p>
            Web sám o sobě žádné sledovací ani reklamní cookies nepoužívá. Zobrazujeme ale{" "}
            <b>příspěvky z našeho Facebooku</b> a <b>mapu s adresou od Googlu</b> — a tyto dvě
            služby si do vašeho prohlížeče ukládají vlastní cookies a vidí, že jste náš web
            navštívila.
          </p>
          <p>
            Proto se vám při první návštěvě zobrazí lišta se souhlasem. Dokud nerozhodnete, obsah
            se nenačte. Zvolíte-li „Jen nezbytné", zůstane zablokovaný a web funguje dál — jen
            místo okénka uvidíte vysvětlení s tlačítkem, kterým jej můžete zobrazit jednorázově.
          </p>

          <ConsentReset />

          <h2>Co s tím můžete udělat</h2>
          <ul>
            <li>chtít vědět, jaké údaje o vás máme,</li>
            <li>nechat si je opravit, když nesedí,</li>
            <li>nechat si je vymazat,</li>
            <li>omezit, jak s nimi nakládáme,</li>
            <li>vznést námitku proti zpracování,</li>
            <li>odvolat souhlas, který jste nám dala,</li>
            <li>získat je ve strojově čitelné podobě a přenést jinam,</li>
            <li>
              podat stížnost u <b>Úřadu pro ochranu osobních údajů</b>, Pplk. Sochora 27, Praha 7,{" "}
              <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">
                uoou.gov.cz
              </a>
              .
            </li>
          </ul>
          <p>
            Stačí napsat na <a href={`mailto:${SITE.email}`}>{SITE.email}</a> nebo zavolat.
            Odpovíme nejpozději do měsíce a nebudeme za to nic chtít.
          </p>
          <p>
            Vznesete-li námitku proti zpracování, přestaneme s ním — a pokračovaly bychom jen
            tehdy, kdyby pro to byly opravdu závažné důvody, které převáží nad vaším zájmem. O tom,
            jak jsme námitku vyřídily, vám dáme vědět.
          </p>
        </div>
      </section>
    </>
  );
}
