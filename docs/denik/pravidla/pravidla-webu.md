# Pravidla webu (právo ČR a EU)

Kontroly webu elegancemarketa.cz podle 8 pravidel webů (skill `pravidla-webu-cz`, Kancelář → Pravidla webů).
Společná rozhodnutí pro víc webů jsou v deníku `hnilicapetr76-tech/kancelar` → `docs/pravidla-webu/index.md`.
Nejsme právníci – text pravidel doporučujeme dát přečíst Markétě, případně právníkovi.

## 2026-11-11 · kontrola a Pravidla používání webu

- Petr: projít celý web, do patičky vedle Ochrany osobních údajů doplnit Pravidla používání webu podle skillů,
  projektu a Kanceláře, nasadit, otestovat (i telefon); nic nevymýšlet, nejasnosti označit k ověření.
- Co web dělá (zjištěno v kódu, stav k `083f9e0`): prezentace salonu, ceník, nezávazný formulář
  „Zeptejte se Markétky“ (e-mail salonu přes Resend, skryté pole proti robotům), příspěvky z Facebooku a mapa
  z Map Google až po souhlasu (`components/Consent.tsx`, volba v localStorage `em-consent`), písma přes
  `next/font` (servírují se z webu), žádná analytika, žádné účty, žádné platby, uživatelé nic nepublikují.
  `/system` přesměrovává na rezervační systém (bez odkazu na webu).
- ARES (ověřeno 2026-11-11 v ares.gov.cz, IČO 01087509): Markéta Hnilica, sídlo T. G. Masaryka 290,
  407 77 Šluknov, živnostenský rejstřík aktivní. Národní registr poskytovatelů zdravotních služeb: **bez záznamu**.

### Hotovo · commit `38c1777`
- stránka `/pravidla-webu` „Pravidla používání webu“ (provozovatel, účel webu, nezávazný formulář, informace
  o službách a cenách, texty a značky, vložený obsah, cookies, bezpečnost, spory – ČOI ADR a ÚOOÚ, změny);
  `noindex` jako Ochrana osobních údajů
- patička: `Ochrana osobních údajů · Pravidla používání webu` vpravo dole (na telefonu pod ©), odkazy ≥ 24 px;
  patička je společná, takže obě právní stránky na sebe odkazují
- provozovatel: sídlo a „zapsána v živnostenském rejstříku“ v `lib/site.ts` (`seat`, `register`), zobrazeno
  v patičce, na O nás, v Ochraně osobních údajů a v pravidlech
- cookie lišta a zablokovaná mapa psaly „Mapy.cz“, ale mapa je z Map Google → opraveno na Mapy Google
- tlačítko formuláře „Odeslat nezávaznou poptávku“ (pravidlo 7)
- cookie lišta na telefonu zakrývala spodek patičky (odkazy nešly ťuknout, dokud návštěvnice nerozhodla) →
  dokud je lišta vidět, má stránka dole volné místo o její výšce
- Ochrana osobních údajů: kotva `#cookies` (z pravidel odkaz „změnit volbu“)
- Ověřeno lokálně (Playwright, 360/390/768/1280 px, omezený pohyb): všech 9 stránek 200, bez vodorovného
  posouvání, oba odkazy v patičce, proklik patička → pravidla → ochrana → `#cookies`, žádný požadavek na cizí
  doménu před souhlasem, bez chyb JS. Pozn.: v pracovním prostoru Clauda jsou Google Fonts blokované, test běžel
  s náhradním písmem; Vercel písma při buildu stahuje normálně.

### Stav pravidel (2026-11-11)
| Pravidlo | Stav | Poznámka |
|---|---|---|
| 1 Provozovatel | splněno | jméno, IČO, sídlo z ARES, živnostenský rejstřík, kontakt (`38c1777`) |
| 2 GDPR | doplnit | stránka existuje a formulář na ni odkazuje; zpracovatelé nejsou jmenovitě (Vercel, Resend, e-mailová schránka; Facebook a Google jako samostatní správci) |
| 3 Věk 15+ | netýká se | žádné účty |
| 4 Písma a skripty | splněno | `next/font`, Facebook a mapa až po souhlasu |
| 5 Cookies | splněno, k rozhodnutí | web sám cookies nepoužívá; lišta jen kvůli Facebooku a mapě; tlačítko „Přijmout vše“ je zlaté, „Jen nezbytné“ obrysové – doporučení je stejná výraznost |
| 6 E-maily a SMS | netýká se webu | web posílá jen poptávku do schránky salonu; viz k ověření níže (SMS/e-maily klientkám) |
| 7 Objednávka | splněno | jen nezávazná poptávka, nic se neplatí |
| 8 DSA | netýká se | uživatelé nic nepublikují |

### K ověření (Petr / Markéta)
- **Zdravotnické zařízení:** web na více místech píše „Zdravotnické zařízení s lékařskými estetickými službami“
  (patička, Kontakt, O nás, FAQ, strukturovaná data) a „Injekční zákroky provádí lékařka“. Pod IČO 01087509 ARES
  záznam v registru poskytovatelů zdravotních služeb nemá. Ověřit, kdo je poskytovatelem zdravotních služeb
  (např. lékařka pod vlastním oprávněním) a podle toho upravit text – Claude ho neměnil.
- **Kolegyně s vlastním IČO** (Eliška Svobodová, Romana Urbanová – viz popis projektu): web prezentuje všechny
  služby jako salon Markéty Hnilica. Rozhodnout, zda uvést, které služby poskytují kolegyně vlastním jménem
  (u těch služeb je smluvní stranou kolegyně).
- **Ochrana osobních údajů:** doplnit zpracovatele jmenovitě (pravidlo 2); text zmiňuje akční nabídky a novinky
  SMS/e-mailem klientkám – každé takové obchodní sdělení musí mít jednoduchou možnost odhlášení (pravidlo 6).
- **Sídlo** na webu je adresa z ARES (podle rozhodnutí Petra 2026-11-11 uvádět vždy) – Markéta by o tom měla vědět.
- **Text pravidel** dát přečíst Markétě.
