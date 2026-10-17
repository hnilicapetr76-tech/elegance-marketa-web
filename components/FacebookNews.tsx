import Image from "next/image";
import { getFacebookPosts } from "../lib/facebook";
import { FacebookFeed } from "./Consent";

const fmt = new Intl.DateTimeFormat("cs-CZ", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Prague",
});

/**
 * Novinky z Facebooku vykreslené v designu webu (zapnou se, jakmile je ve Vercelu FB_PAGE_TOKEN).
 * Obrázky jdou přes náš server (next/image), takže prohlížeč návštěvnice
 * se s Facebookem vůbec nespojí a nepotřebuje souhlas s cookies.
 */
export default async function FacebookNews({ pageUrl }: { pageUrl: string }) {
  const posts = await getFacebookPosts(pageUrl);

  // Bez tokenu (FB_PAGE_TOKEN) nebo když Facebook neodpoví: původní okno Facebooku.
  if (posts.length === 0) {
    return (
      <div className="fb-wrap">
        <FacebookFeed pageUrl={pageUrl} />
      </div>
    );
  }

  return (
    <div className="fb-posts">
      {posts.map((p) => (
        <a
          key={p.id}
          className="fb-post"
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {p.image && (
            <span className="fb-post-img">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 380px"
              />
            </span>
          )}
          <span className="fb-post-body">
            <time dateTime={p.date}>{fmt.format(new Date(p.date))}</time>
            {p.text && <span className="fb-post-text">{p.text}</span>}
            <span className="fb-post-more">Celý příspěvek na Facebooku →</span>
          </span>
        </a>
      ))}
    </div>
  );
}
