/**
 * Poslední příspěvky z Facebooku salonu – stahuje je náš server, ne prohlížeč návštěvnice.
 *
 * Potřebuje ve Vercelu proměnnou prostředí FB_PAGE_TOKEN (trvalý token stránky
 * Elegance Markéta s oprávněním pages_read_engagement). Bez ní, nebo když Facebook
 * neodpoví, vrací prázdný seznam a na webu se ukáže záložní dlaždice.
 *
 * Výsledek se drží 30 minut v mezipaměti, takže nový příspěvek se na webu
 * objeví nejpozději do půl hodiny.
 */

export type FbPost = {
  id: string;
  text: string;
  date: string;
  link: string;
  image: string | null;
};

const REFRESH_SECONDS = 1800;
const LIMIT = 3;

type GraphPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string;
};

export async function getFacebookPosts(fallbackLink: string): Promise<FbPost[]> {
  const token = process.env.FB_PAGE_TOKEN;
  if (!token) return [];

  const page = process.env.FB_PAGE_ID || "me";
  const base = process.env.FB_GRAPH_URL || "https://graph.facebook.com";
  const url =
    `${base}/${encodeURIComponent(page)}/posts` +
    `?fields=id,message,created_time,permalink_url,full_picture` +
    `&limit=${LIMIT * 3}&access_token=${encodeURIComponent(token)}`;

  try {
    const res = await fetch(url, { next: { revalidate: REFRESH_SECONDS, tags: ["facebook"] } });
    if (!res.ok) {
      const body = await res.text();
      console.error("[facebook] Graph API", res.status, body.slice(0, 300));
      return [];
    }
    const json = (await res.json()) as { data?: GraphPost[] };
    return (json.data ?? [])
      .filter((p) => (p.message && p.message.trim()) || p.full_picture)
      .slice(0, LIMIT)
      .map((p) => ({
        id: p.id,
        text: (p.message ?? "").trim(),
        date: p.created_time,
        link: p.permalink_url || fallbackLink,
        image: p.full_picture ?? null,
      }));
  } catch (err) {
    console.error("[facebook] fetch failed", err);
    return [];
  }
}
