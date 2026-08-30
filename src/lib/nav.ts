import { localePath, type Locale } from "@/lib/i18n";

export function navItems(locale: Locale) {
  return [
    { href: localePath(locale, "/"), key: "home" as const },
    { href: localePath(locale, "/products"), key: "products" as const },
    { href: localePath(locale, "/services"), key: "services" as const },
    { href: localePath(locale, "/about"), key: "about" as const },
    { href: localePath(locale, "/contact"), key: "contact" as const },
  ];
}
