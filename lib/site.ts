export const SITE = {
  name: "Centrum estetické krásy, elegance Markéta",
  shortName: "Elegance Markéta",
  tagline: "Centrum estetické krásy",
  url: "https://elegancemarketa.cz",
  street: "Sokolská 1031",
  city: "Šluknov",
  zip: "407 77",
  phone: "+420 775 359 450",
  phoneRaw: "+420775359450",
  email: "info@elegancemarketa.cz",
  facebook: "https://facebook.com/elegancemarketa",
  ico: "01087509",
  owner: "Markéta Hnilica, DiS.",
};

export const BRANDS = [
  "René D'essay",
  "MEDIK8",
  "La4imedical",
  "Dermaheal HSR",
  "ReviTrane",
  "Croma Saypha",
  "ERGOLINE",
];

// Provozní doba zatím není potvrzená. Až ji budete mít, vyplňte HOURS
// a HOURS_NOTE se přestane zobrazovat automaticky.
export const HOURS: { d: string; h: string }[] = [];

export const HOURS_NOTE =
  "Termíny domlouváme individuálně. Zavolejte nám nebo napište a domluvíme čas, který vám vyhovuje.";

export const NAV = [
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/o-nas", label: "O nás" },
  { href: "/galerie", label: "Galerie" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export const SERVICES = [
  {
    id: "kosmetika",
    n: "01",
    title: "Kosmetická ošetření pleti",
    short:
      "Komplexní rituál pro čistou, vyživenou a rozzářenou pleť s kosmetikou René D'essay — od přípravy kyselinou glykolovou přes hloubkové čištění po závěrečnou masku a masáž.",
    items: [
      "Ošetření René D'essay, 60 nebo 90 minut",
      "Depilace obličeje",
      "Barvení a úprava obočí a řas",
      "Lash lifting a botox řas",
      "Laminace obočí",
    ],
  },
  {
    id: "mezoterapie",
    n: "02",
    title: "Mezoterapie a revitalizace",
    short:
      "Regenerace pleti mikrojehličkami i mikroinjekcemi. Do pokožky se dostane kyselina hyaluronová, vitaminy a peptidy, které stimulují tvorbu kolagenu.",
    items: [
      "Mezoterapie mikrojehličkami",
      "Dermaheal HSR",
      "Skinbooster ReviTrane",
      "Biostimulační PhilArt Next a PhilArt Eye",
    ],
  },
  {
    id: "vyplne-botox",
    n: "03",
    title: "Dermální výplně a botulotoxin",
    short:
      "Injekční ošetření pro obnovení objemu, vyhlazení vrásek a modelaci kontur obličeje. Vždy po konzultaci a posouzení zdravotního stavu.",
    items: [
      "Výplně Saypha filler, volume a volume plus",
      "Botulotoxin — čelo, glabela, okolí očí",
      "Botulotoxin proti nadměrnému pocení v podpaží",
    ],
  },
  {
    id: "lipolyza-elektrokoagulace",
    n: "04",
    title: "Lipolýza a elektrokoagulace",
    short:
      "Neinvazivní odbourávání tukových buněk a rychlé odstranění drobných kožních nedokonalostí.",
    items: [
      "Lipolýza — podbradek, paže, břicho, stehna, boky",
      "Elektrokoagulace fibromů a kožních výrůstků",
      "Odstranění žilek a drobných bradavic",
    ],
  },
  {
    id: "permanentni-makeup",
    n: "05",
    title: "Permanentní make-up",
    short:
      "Dlouhodobé zvýraznění přirozených rysů mikropigmentací. Kvalitní pigmenty, šetrná technika a důraz na přirozený výsledek.",
    items: ["Obočí", "Rty", "Meziřasová linka", "Korekce a obnova"],
  },
  {
    id: "piercing",
    n: "06",
    title: "Piercing",
    short:
      "Profesionální aplikace piercingů se sterilními nástroji a kvalitními šperky. Součástí je odborné poučení o následné péči.",
    items: [
      "Uši — lobe, helix, tragus, daith, industrial a další",
      "Nos — nostril, septum, bridge, obočí",
      "Ústa — labret, Monroe, medusa, jazyk a další",
      "Tělo — pupík, bradavka, surface, microdermal",
    ],
  },
  {
    id: "masaze-cinska-medicina",
    n: "07",
    title: "Masáže a čínská medicína",
    short:
      "Masáže zaměřené na uvolnění, regeneraci a rovnováhu těla i mysli — od relaxačních po terapeutické. Doplněné čínskou diagnostikou, akupunkturou, baňkováním a bylinnou léčbou.",
    items: [
      "Masáže 60, 90 nebo 120 minut",
      "Čínská diagnostika (kazuistika)",
      "Akupunktura",
      "Baňkování",
      "Bylinná léčba",
    ],
  },
  {
    id: "nehty-manikura-pedikura",
    n: "08",
    title: "Nehtová modeláž, manikúra a pedikúra",
    short:
      "Pečlivá práce s důrazem na detail a trvanlivost — od modeláže nehtů přes manikúru po kompletní ošetření nohou.",
    items: [
      "Nová modeláž nehtů a doplnění",
      "Manikúra, také s P-SHINE",
      "Pedikúra s modeláží i bez",
      "Parafínový zábal na ruce a nohy",
    ],
  },
  {
    id: "solarium",
    n: "09",
    title: "Solárium ERGOLINE",
    short:
      "Solárium ERGOLINE s výhodnějším tarifem za minutu při delších kreditech a široký výběr solární kosmetiky.",
    items: ["Kredity od 10 do 160 minut", "Solární kosmetika ERGOLINE"],
  },
];

export const PRICES = [
  {
    group: "Kosmetické ošetření pleti",
    rows: [
      ["Ošetření René D'essay (60 min)", "1 400 Kč"],
      ["Ošetření René D'essay (90 min)", "1 650 Kč"],
      ["Úprava a depilace obočí", "100 Kč / ks"],
      ["Depilace celého obličeje", "650 Kč"],
      ["Barvení řas", "150 Kč"],
      ["Barvení obočí", "150 Kč"],
      ["Lash lifting a botox řas", "940 Kč"],
      ["Lash lifting v rámci kosmetického ošetření", "840 Kč"],
      ["Laminace obočí", "940 Kč"],
      ["Laminace obočí v rámci kosmetického ošetření", "840 Kč"],
    ],
  },
  {
    group: "Mezoterapie",
    rows: [
      ["1 ošetření — obličej", "1 500 Kč"],
      ["1 ošetření — obličej a krk", "2 000 Kč"],
      ["1 ošetření — obličej, krk a dekolt", "2 500 Kč"],
      ["4 ošetření — obličej", "5 000 Kč"],
      ["4 ošetření — obličej a krk", "6 500 Kč"],
      ["4 ošetření — obličej, krk a dekolt", "8 000 Kč"],
    ],
  },
  {
    group: "Aplikační mezoterapie Dermaheal HSR",
    rows: [
      ["Dermaheal HSR 1 ml", "1 500 Kč"],
      ["Dermaheal HSR 5 ml", "3 500 Kč"],
      ["Balíček 3+1 zdarma (15 ml + 5 ml zdarma)", "10 500 Kč"],
    ],
  },
  {
    group: "Skinbooster ReviTrane",
    rows: [
      ["1 ošetření — obličej", "4 500 Kč"],
      ["1 ošetření — obličej a krk", "9 000 Kč"],
      ["1 ošetření — obličej, krk a dekolt", "13 000 Kč"],
    ],
  },
  {
    group: "Biostimulační mezoterapie",
    rows: [
      ["PhilArt Next 2 ml", "7 000 Kč"],
      ["PhilArt Eye 1 ml", "3 000 Kč"],
    ],
  },
  {
    group: "Dermální výplně Saypha",
    rows: [
      ["Saypha filler — rty, kuřácké vrásky, ztráta objemu", "6 000 Kč"],
      ["Saypha volume — nosolabiální rýhy, lícní kosti", "6 500 Kč"],
      ["Saypha volume plus — kontury, brada, dolní čelist", "7 000 Kč"],
    ],
  },
  {
    group: "Aplikace botulotoxinu",
    rows: [
      ["Cena za jednotku", "130 Kč"],
      ["Čelo (13–20 jednotek)", "1 690 – 2 600 Kč"],
      ["Glabela (13 jednotek)", "1 690 Kč"],
      ["Okolí očí (15 jednotek)", "1 950 Kč"],
      ["Podpaží — zábrana pocení (50 jednotek)", "6 500 Kč"],
    ],
  },
  {
    group: "Lipolýza a elektrokoagulace",
    rows: [
      ["Lipolýza 5 ml", "2 500 Kč"],
      ["Elektrokoagulace 1–5 ks", "500 Kč"],
      ["Elektrokoagulace 5–10 ks", "900 Kč"],
      ["Elektrokoagulace 10 ks a více", "dle konzultace"],
    ],
  },
  {
    group: "Permanentní make-up",
    rows: [
      ["Obočí", "5 000 Kč"],
      ["Obočí — korekce do 12 týdnů", "1 000 Kč"],
      ["Obočí — obnova po 2 letech", "3 500 Kč"],
      ["Rty", "5 000 Kč"],
      ["Rty — korekce do 12 týdnů", "1 000 Kč"],
      ["Rty — obnova po 2 letech", "3 500 Kč"],
      ["Meziřasová linka", "3 500 Kč"],
      ["Meziřasová linka — korekce do 12 týdnů", "1 000 Kč"],
      ["Meziřasová linka — obnova po 2 letech", "2 000 Kč"],
    ],
  },
  {
    group: "Piercing",
    rows: [
      ["Aplikace piercingu", "1 000 Kč"],
      ["Péče po aplikaci", "200 Kč"],
    ],
  },
  {
    group: "Masáže a čínská medicína",
    rows: [
      ["Masáž 60 minut", "750 Kč"],
      ["Masáž 90 minut", "1 100 Kč"],
      ["Masáž 120 minut", "1 400 Kč"],
      ["Čínská diagnostika (kazuistika)", "1 200 Kč"],
      ["Akupunktura", "500 Kč"],
    ],
  },
  {
    group: "Nehtová modeláž a manikúra",
    rows: [
      ["Nová modeláž nehtů (šablonky)", "900 Kč"],
      ["Doplnění modeláže S", "650 Kč"],
      ["Doplnění modeláže M", "700 Kč"],
      ["Doplnění modeláže L", "750 Kč"],
      ["Oprava nehtu mimo termín", "150 Kč"],
      ["Odstranění modeláže", "350 Kč"],
      ["Pilník (výměna každých 6 měsíců)", "50 Kč"],
      ["Manikúra", "350 Kč"],
      ["Manikúra s P-SHINE", "500 Kč"],
    ],
  },
  {
    group: "Pedikúra",
    rows: [
      ["Pedikúra s nehtovou modeláží", "800 Kč"],
      ["Pedikúra bez nehtové modeláže", "550 Kč"],
      ["Samotná nehtová modeláž na nohou", "500 Kč"],
      ["Parafín na nohy nebo ruce (studený i teplý)", "150 Kč"],
      ["Příplatek dle náročnosti", "100 Kč"],
    ],
  },
  {
    group: "Solárium",
    rows: [
      ["10 minut", "220 Kč (22 Kč/min)"],
      ["15 minut", "300 Kč (20 Kč/min)"],
      ["20 minut", "380 Kč (19 Kč/min)"],
      ["60 minut", "1 050 Kč (17,50 Kč/min)"],
      ["100 minut", "1 600 Kč (16 Kč/min)"],
      ["120 minut", "1 800 Kč (15 Kč/min)"],
      ["160 minut", "2 240 Kč (14 Kč/min)"],
    ],
  },
];

export const REVIEWS: { q: string; a: string }[] = [];

export const FAQ = [
  {
    q: "Jak se k vám objednám?",
    a: "Napište nám přes formulář na stránce — ozveme se vám zpět a společně najdeme termín, který vám vyhovuje. Nebo rovnou zavolejte na +420 775 359 450.",
  },
  {
    q: "Je potřeba konzultace před zákrokem?",
    a: "U injekčních aplikací — výplní, botulotoxinu, mezoterapie — vždy probereme zdravotní stav i očekávaný výsledek, než začneme. U kosmetického ošetření, manikúry nebo solária to potřeba není.",
  },
  {
    q: "Kolikrát musím na mezoterapii přijít?",
    a: "Pro výsledný efekt je potřeba absolvovat 3 ošetření v rámci jednoho měsíce. U Dermaheal HSR se doporučuje série tří ošetření v měsíčním intervalu a udržovací kúra každého půl roku.",
  },
  {
    q: "Jak dlouho vydrží výsledek?",
    a: "U botulotoxinu efekt přetrvává několik měsíců. U Skinboosteru ReviTrane až jeden rok po sérii tří ošetření. U permanentního make-upu se doporučuje korekce do 12 týdnů a obnova po dvou letech.",
  },
  {
    q: "Jakou máte otevírací dobu?",
    a: "Termíny domlouváme individuálně. Zavolejte na +420 775 359 450 nebo napište přes formulář a domluvíme čas, který vám vyhovuje.",
  },
  {
    q: "Kde přesně vás najdu?",
    a: "Sokolská 1031, 407 77 Šluknov. Jsme zdravotnické zařízení s lékařskými estetickými službami.",
  },
];
