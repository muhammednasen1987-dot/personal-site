"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocale, type Locale } from "@/lib/i18n";

export function LanguageToggle({
  locale,
  label,
  ariaLabel,
}: {
  locale: Locale;
  label: string;
  ariaLabel: string;
}) {
  const pathname = usePathname() || "/";
  const href = switchLocale(locale, pathname);

  return (
    <Link
      href={href}
      hrefLang={locale === "ar" ? "en" : "ar"}
      aria-label={ariaLabel}
      className="inline-flex h-9 items-center border border-brass/30 px-3 text-[0.78rem] tracking-wide text-paper/90 transition-colors hover:border-brass hover:text-brass"
    >
      {label}
    </Link>
  );
}
