import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS, SITE, TERMS_DATE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Pravidla používání webu",
  description:
    "Kdo provozuje web Centra estetické krásy elegance Markéta ve Šluknově, k čemu slouží a co platí pro jeho používání.",
  alternates: { canonical: "/pravidla-webu" },
  robots: { index: false, follow: true },
};

/*
 * Pravidla používání webu (11. 11. 2026) – podle skillu pravidla-webu-cz a deníku pravidel webů v Kanceláři.
 * Popisuje jen to, co web opravdu dělá (prezentace, nezávazný formulář, Facebook a mapa po souhlasu).
 * Nic se tu nevymýšlí: údaje provozovatele jsou z lib/site.ts (sídlo a rejstřík ověřeny v ARES).
 */
export default function PravidlaWebu() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <p className="eyebrow">Informace</p>
          <div className="gline c" />
          <h1>Pravidla používání webu</h1>
          <p>
            Kdo web elegancemarketa.cz provozuje, k čemu slouží a co platí pro jeho používání.
            Platí od {TERMS_DATE}.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap prose">
          <h2>Kdo web provozuje</h2>
          <p>
            <b>{SITE.owner}</b>, IČ: {SITE.ico}, se sídlem {SITE.seat}, {SITE.register}.
            <br />
            Provozovna: Centrum estetické krásy elegance Markéta, {SITE.street}, {SITE.zip}{" "}
            {SITE.city}.
            <br />
            Telefon <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>, e-mail{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>K čemu web slouží</h2>
          <p>
            Web představuje salon, jeho služby, ceník, provozní dobu a fotky, ukazuje cestu k nám
            a umožňuje poslat dotaz. Na webu se nic neobjednává ani neplatí a online objednávání
            nenabízíme — termín vždy domlouváme s vámi, telefonicky, e-mailem nebo osobně.
          </p>
          <p>Informace a ceny na webu nejsou návrhem na uzavření smlouvy.</p>

          <h2>Formulář „Zeptejte se Markétky“</h2>
          <ul>
            <li>
              Poptávka je <b>nezávazná</b> — není to objednávka ani smlouva. Ozveme se vám a termín
              domluvíme společně.
            </li>
            <li>
              Uveďte prosím pravdivé údaje a kontakt, na kterém vás zastihneme. Cizí údaje bez
              svolení jejich majitele nevyplňujte.
            </li>
            <li>
              Podrobnosti o svém zdravotním stavu do zprávy raději nepište — probereme je osobně
              při konzultaci.
            </li>
            <li>Formulář neslouží k rozesílání reklamy ani hromadných zpráv.</li>
            <li>
              Spěcháte? Zavolejte rovnou na <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.
            </li>
          </ul>
          <p>
            Co se děje s údaji z formuláře, popisuje stránka{" "}
            <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>.
          </p>

          <h2>Informace o službách a cenách</h2>
          <p>
            Popisy ošetření na webu jsou obecné a nenahrazují osobní konzultaci. Zda je ošetření
            pro vás vhodné, posuzujeme vždy individuálně — u injekčních aplikací až po probrání
            vašeho zdravotního stavu. Výsledek se může u každé klientky lišit.
          </p>
          <p>
            Ceník a ostatní informace průběžně aktualizujeme. Pokud si nejste jistá cenou nebo
            rozsahem ošetření, zeptejte se nás předem.
          </p>

          <h2>Texty, fotky a značky</h2>
          <p>
            Texty, fotky a logo salonu nekopírujte ani dál nepoužívejte bez našeho souhlasu.
            Názvy a značky {BRANDS.join(", ")} patří jejich vlastníkům; na webu jsou jen jako
            informace o přípravcích a vybavení, se kterými pracujeme.
          </p>

          <h2>Odkazy na jiné weby a vložený obsah</h2>
          <p>
            Na webu zobrazujeme příspěvky z našeho Facebooku a mapu z Map Google. Načtou se až po
            vašem souhlasu. Odkazy na Facebook a na navigaci v Mapách Google se otevírají v nové
            záložce. Za obsah těchto služeb a za to, jak zpracovávají údaje, odpovídají jejich
            provozovatelé.
          </p>

          <h2>Cookies, písma a měření</h2>
          <p>
            Web sám nepoužívá sledovací ani reklamní cookies a neměří návštěvnost. Písma jsou uložená
            přímo na našem webu. Ve vašem prohlížeči si pamatujeme jen to, jak jste se rozhodla
            o obsahu z Facebooku a Map Google. Volbu můžete kdykoliv změnit na stránce{" "}
            <Link href="/ochrana-osobnich-udaju#cookies">Ochrana osobních údajů</Link>.
          </p>

          <h2>Bezpečnost a dostupnost</h2>
          <p>
            Web prosím nezatěžujte automatickými dotazy a nezkoušejte obejít jeho zabezpečení.
            Snažíme se, aby web běžel bez výpadků, ale nemůžeme to zaručit vždy. Když formulář
            nefunguje, zavolejte nám nebo napište na{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Spory a dozor</h2>
          <p>
            Vztahy z používání webu se řídí českým právem. Pokud se spotřebitelský spor nepodaří
            vyřešit dohodou, můžete podat návrh na mimosoudní řešení u{" "}
            <b>České obchodní inspekce</b> (
            <a href="https://coi.gov.cz/informace-o-adr/" target="_blank" rel="noopener noreferrer">
              coi.gov.cz
            </a>
            ). Dozor nad ochranou osobních údajů vykonává <b>Úřad pro ochranu osobních údajů</b> (
            <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">
              uoou.gov.cz
            </a>
            ).
          </p>

          <h2>Změny pravidel</h2>
          <p>
            Pravidla můžeme upravit, například když na webu přibude nová funkce. Platné znění je
            vždy na této stránce, s datem účinnosti nahoře.
          </p>
        </div>
      </section>
    </>
  );
}
