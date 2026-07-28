# Web — Centrum estetické krásy, elegance Markéta

Veřejný web salonu. Next.js (App Router), bez závislosti na UI knihovnách.

## Co je kde

- `app/` — stránky (úvod, služby, ceník, o nás, galerie, reference, kontakt, GDPR)
- `components/` — navigace, patička, poptávkový formulář
- `lib/site.ts` — **veškerý obsah na jednom místě**: kontakty, ceník, služby, recenze, FAQ
- `app/api/poptavka/route.ts` — odeslání poptávky e-mailem přes Resend

## Úprava obsahu

Ceny, provozní dobu, telefon i texty služeb měňte v `lib/site.ts`. Nic jiného není potřeba.

## Poptávkový formulář

Vyžaduje proměnné prostředí ve Vercelu:

| Proměnná | Popis |
|---|---|
| `RESEND_API_KEY` | API klíč z resend.com |
| `POPTAVKA_TO` | kam chodí poptávky, výchozí `info@elegancemarketa.cz` |
| `POPTAVKA_FROM` | odesílatel, např. `Web <formular@elegancemarketa.cz>` |

Bez `RESEND_API_KEY` formulář zobrazí návštěvníkovi výzvu k telefonátu
a poptávku zaloguje — nikdy netvrdí, že odeslal, když neodeslal.

## Interní systém

`/system` přesměrovává na rezervační systém. Na webu na něj nevede žádný odkaz
a je vyloučen v `robots.txt`.
