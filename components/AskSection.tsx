"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES, SITE } from "../lib/site";

type State = { kind: "idle" | "sending" | "ok" | "err"; text?: string };

export default function AskSection() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });

    try {
      const res = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setState({
          kind: "ok",
          text: "Děkujeme, poptávku máme. Ozveme se vám zpět obvykle do jednoho pracovního dne.",
        });
        form.reset();
      } else {
        setState({
          kind: "err",
          text:
            json.message ||
            `Odeslání se nepodařilo. Zavolejte nám prosím na ${SITE.phone} nebo napište na ${SITE.email}.`,
        });
      }
    } catch {
      setState({
        kind: "err",
        text: `Odeslání se nepodařilo. Zavolejte nám prosím na ${SITE.phone} nebo napište na ${SITE.email}.`,
      });
    }
  }

  return (
    <section className="ask" id="zeptejte-se">
      <div className="wrap ask-in">
        <div>
          <div className="eyebrow">Napište nám</div>
          <div className="gline" />
          <h2>
            Zeptejte se <em>Markétky</em>
          </h2>
          <p>
            Nevíte, které ošetření je pro vás to pravé? Chcete si domluvit termín? Napište nám pár
            řádků a my se vám ozveme zpět — telefonicky nebo e-mailem, jak vám to bude vyhovovat.
          </p>
          <ul className="ask-info">
            <li>
              <b>Telefon</b> <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </li>
            <li>
              <b>E-mail</b> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <b>Adresa</b>{" "}
              <span>
                {SITE.street}, {SITE.zip} {SITE.city}
              </span>
            </li>
            <li>
              <b>Facebook</b>{" "}
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">
                elegancemarketa
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit}>
          {state.kind === "ok" && <div className="msg ok">{state.text}</div>}
          {state.kind === "err" && <div className="msg err">{state.text}</div>}

          <div className="frow">
            <div className="fg">
              <label htmlFor="jmeno">Jméno a příjmení *</label>
              <input id="jmeno" name="jmeno" type="text" placeholder="Jana Nováková" required />
            </div>
            <div className="fg">
              <label htmlFor="telefon">Telefon *</label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                placeholder="+420 777 123 456"
                required
              />
            </div>
          </div>

          <div className="fg">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="jana@email.cz" />
          </div>

          <div className="fg">
            <label htmlFor="sluzba">O co máte zájem</label>
            <select id="sluzba" name="sluzba" defaultValue="Nevím, poraďte mi">
              <option>Nevím, poraďte mi</option>
              {SERVICES.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          <div className="fg">
            <label htmlFor="zprava">Vaše zpráva</label>
            <textarea
              id="zprava"
              name="zprava"
              placeholder="Napište nám, co potřebujete, a kdy se vám hodí termín…"
            />
          </div>

          <input className="hp" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="consent">
            <input id="souhlas" name="souhlas" type="checkbox" required />
            <label htmlFor="souhlas" style={{ letterSpacing: 0, textTransform: "none", fontSize: 12.5, color: "#c9bdad", margin: 0 }}>
              Souhlasím se{" "}
              <Link href="/ochrana-osobnich-udaju">zpracováním osobních údajů</Link> za účelem
              vyřízení mé poptávky.
            </label>
          </div>

          <button className="btn btn-gold" type="submit" disabled={state.kind === "sending"}>
            {state.kind === "sending" ? "Odesílám…" : "Odeslat poptávku"}
          </button>
          <p className="formnote">Ozveme se vám obvykle do jednoho pracovního dne.</p>
        </form>
      </div>
    </section>
  );
}
