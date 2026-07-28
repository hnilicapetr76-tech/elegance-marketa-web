import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { HOURS, SITE } from "../lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kosmetika a estetická medicína Šluknov | Elegance Markéta",
    template: "%s | Elegance Markéta Šluknov",
  },
  description:
    "Centrum estetické krásy elegance Markéta ve Šluknově. Kosmetická ošetření, lékařské estetické aplikace, čínská medicína, solárium ERGOLINE a péče o ruce a nohy. Objednejte se na +420 775 359 450.",
  keywords: [
    "kosmetika Šluknov",
    "kosmetický salon Šluknov",
    "estetická medicína Šluknov",
    "botox Šluknov",
    "dermální výplně Šluknov",
    "solárium Šluknov",
    "akupunktura Šluknov",
    "modeláž nehtů Šluknov",
    "kosmetika Rumburk",
    "kosmetika Varnsdorf",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE.url,
    siteName: SITE.name,
    title: "Kosmetika a estetická medicína Šluknov | Elegance Markéta",
    description:
      "Nově zrekonstruované estetické centrum ve Šluknově. Péče o pleť, omlazení, relax a odpočinek.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.shortName,
  description:
  "Zdravotnické zařízení s lékařskými estetickými službami ve Šluknově. Kosmetická ošetření, mezoterapie, dermální výplně a botulotoxin, permanentní make-up, piercing, čínská medicína, solárium a nehtová modeláž.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    postalCode: SITE.zip,
    addressCountry: "CZ",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "11:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Thursday"], opens: "07:00", closes: "15:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Friday"], opens: "07:00", closes: "12:00" },
  ],
  sameAs: [SITE.facebook],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Šluknov" },
    { "@type": "City", name: "Rumburk" },
    { "@type": "City", name: "Varnsdorf" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a className="skip" href="#obsah">
          Přeskočit na obsah
        </a>
        <SiteNav />
        <main id="obsah">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
