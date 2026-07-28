# Web Elegance Markéta — jak ho dostat online

Kompletní zdrojový kód webu. Vše je hotové včetně loga v plné kvalitě.

## Co je uvnitř

- `app/` — jednotlivé stránky (úvod, služby, ceník, o nás, galerie, reference, kontakt, GDPR)
- `components/` — navigace, patička, poptávkový formulář
- `lib/site.ts` — **veškerý obsah na jednom místě**: kontakty, ceník, služby, FAQ
- `public/logo.png` — logo (512 px), `public/logo-full.png` — originál v plné velikosti

---

## Nasazení — nejjednodušší cesta (5 minut, zdarma)

1. Rozbalte tento ZIP do složky v počítači.
2. Jděte na <https://vercel.com/new> a přihlaste se.
3. Klikněte na **Deploy** a zvolte možnost nahrát složku (drag & drop celé rozbalené složky).
4. Vercel sám pozná, že jde o Next.js, a web nasadí.

Vznikne nový projekt. Ten stávající `elegance-marketa-web` pak můžete smazat, nebo v něm
jen přepnout doménu na ten nový.

## Nasazení přes GitHub (doporučeno dlouhodobě)

Vyplatí se, jakmile budete chtít web dál upravovat — mě i vás to zbaví ručního nahrávání.

1. Založte nový repozitář na <https://github.com/new>, třeba `elegance-marketa-web`.
2. Nahrajte do něj obsah této složky (GitHub umí drag & drop přes tlačítko *uploading an existing file*).
3. Ve Vercelu **Add New → Project → Import** vyberte ten repozitář.
4. Hotovo. Od té chvíle se každá změna v GitHubu sama nasadí.

---

## Co ještě zbývá doplnit

| Co | Kde to změnit |
|---|---|
| **Provozní doba** | `lib/site.ts` → `HOURS` — vyplňte dny a časy; dokud je pole prázdné, zobrazuje se věta „Termíny domlouváme individuálně" |
| **Fotky salonu** | `app/galerie/page.tsx` a šedá místa na úvodu a v „O nás" |
| **Ochrana osobních údajů** | `app/ochrana-osobnich-udaju/page.tsx` — je to obecná šablona, nechte zkontrolovat |
| **Poptávkový formulář** | potřebuje proměnnou `RESEND_API_KEY` z resend.com (viz níže) |

### Provozní doba — příklad

```ts
export const HOURS = [
  { d: "Pondělí – Pátek", h: "8:00 – 18:00" },
  { d: "Sobota", h: "dle domluvy" },
  { d: "Neděle", h: "zavřeno" },
];
```

### Poptávkový formulář

Ve Vercelu v **Settings → Environment Variables** přidejte:

| Proměnná | Hodnota |
|---|---|
| `RESEND_API_KEY` | API klíč z <https://resend.com> (zdarma do 3000 e-mailů měsíčně) |
| `POPTAVKA_TO` | `info@elegancemarketa.cz` |
| `POPTAVKA_FROM` | `Web <formular@elegancemarketa.cz>` |

Dokud klíč chybí, formulář poctivě zobrazí výzvu zavolat — nikdy nepředstírá, že odeslal.

### Interní rezervační systém

`/system` přesměrovává na rezervační systém. Na webu na něj nevede žádný odkaz
a je vyloučen v `robots.txt`. Adresa systému se mění v `next.config.mjs`.
