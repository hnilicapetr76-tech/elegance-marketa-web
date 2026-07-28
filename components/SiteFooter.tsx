import Link from "next/link";
import { HOURS, HOURS_NOTE, SITE } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <span className="mono">
                <img src="/logo.png" alt="" width={54} height={54} />
              </span>
              <span className="brand-txt">
                <b>{SITE.shortName}</b>
                <span>{SITE.tagline}</span>
              </span>
            </div>
            <p>
              Zdravotnické zařízení s lékařskými estetickými službami.
              <br />
              {SITE.owner} &middot; IČ: {SITE.ico}
            </p>
          </div>

          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>{SITE.street}</li>
              <li>
                {SITE.zip} {SITE.city}
              </li>
              <li>
                <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Provozní doba</h4>
            {HOURS.length > 0 ? (
              <ul>
                {HOURS.map((h) => (
                  <li key={h.d}>
                    {h.d} &nbsp; {h.h}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{HOURS_NOTE}</p>
            )}
          </div>
        </div>

        <div className="f-bot">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>
            <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
