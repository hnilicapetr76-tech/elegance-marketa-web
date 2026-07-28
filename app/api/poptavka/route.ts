import { NextResponse } from "next/server";
import { SITE } from "../../../lib/site";

export const runtime = "nodejs";

type Body = {
  jmeno?: string;
  telefon?: string;
  email?: string;
  sluzba?: string;
  zprava?: string;
  souhlas?: string;
  web?: string;
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Neplatný požadavek." }, { status: 400 });
  }

  // Honeypot — roboti vyplní skryté pole, lidé ne.
  if (body.web) {
    return NextResponse.json({ ok: true });
  }

  const jmeno = (body.jmeno || "").trim();
  const telefon = (body.telefon || "").trim();
  const email = (body.email || "").trim();
  const sluzba = (body.sluzba || "Neuvedeno").trim();
  const zprava = (body.zprava || "").trim();

  if (!jmeno || !telefon) {
    return NextResponse.json(
      { ok: false, message: "Vyplňte prosím jméno a telefon." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.POPTAVKA_TO || SITE.email;
  const from = process.env.POPTAVKA_FROM || "Web Elegance Markéta <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[poptavka] RESEND_API_KEY není nastaven. Poptávka:", {
      jmeno,
      telefon,
      email,
      sluzba,
      zprava,
    });
    return NextResponse.json(
      {
        ok: false,
        message: `Formulář se právě dokončuje. Zavolejte nám prosím na ${SITE.phone} — ozveme se hned.`,
      },
      { status: 503 }
    );
  }

  const html = `
    <h2 style="font-family:Georgia,serif">Nová poptávka z webu</h2>
    <table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">
      <tr><td style="padding:6px 14px 6px 0"><b>Jméno</b></td><td>${esc(jmeno)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><b>Telefon</b></td><td>${esc(telefon)}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><b>E-mail</b></td><td>${esc(email) || "—"}</td></tr>
      <tr><td style="padding:6px 14px 6px 0"><b>Zájem o</b></td><td>${esc(sluzba)}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:15px"><b>Zpráva</b><br>${
      esc(zprava).replace(/\n/g, "<br>") || "—"
    }</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `Poptávka z webu — ${jmeno}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[poptavka] Resend selhal:", res.status, detail);
      return NextResponse.json(
        {
          ok: false,
          message: `Odeslání se nepodařilo. Zavolejte nám prosím na ${SITE.phone}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[poptavka] Chyba:", err);
    return NextResponse.json(
      { ok: false, message: `Odeslání se nepodařilo. Zavolejte nám prosím na ${SITE.phone}.` },
      { status: 500 }
    );
  }
}
