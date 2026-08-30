import type { MetadataRoute } from "next";
import { localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const publicPaths = ["/", "/products", "/services", "/about", "/contact"] as const;

function absoluteUrl(locale: Locale, path: (typeof publicPaths)[number]) {
  const rel = localePath(locale, path);
  return rel === "/" ? `${site.origin}/` : `${site.origin}${rel}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.flatMap((path) => {
    const ar = absoluteUrl("ar", path);
    const en = absoluteUrl("en", path);
    const languages = {
      ar,
      en,
      "x-default": ar,
    };

    return [
      { url: ar, alternates: { languages } },
      { url: en, alternates: { languages } },
    ];
  });
}
