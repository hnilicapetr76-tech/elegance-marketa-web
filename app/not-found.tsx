import Link from "next/link";

export default function NotFound() {
  return (
    <section className="phead" style={{ paddingBottom: 90 }}>
      <div className="wrap">
        <p className="eyebrow">Chyba 404</p>
        <div className="gline c" />
        <h1>Tuto stránku jsme nenašli</h1>
        <p>Možná se přesunula, nebo je v odkazu překlep.</p>
        <div className="cta-row" style={{ justifyContent: "center", marginTop: 32 }}>
          <Link className="btn btn-gold" href="/">
            Zpět na úvod
          </Link>
          <Link className="btn btn-out" href="/kontakt">
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
