import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/sluzby", "/cenik", "/o-nas", "/galerie", "/reference", "/kontakt"];
  const now = new Date();
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
