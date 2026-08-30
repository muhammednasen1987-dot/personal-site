import Link from "next/link";
import { Mark } from "@/components/mark";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";

export function SiteFooter({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-brass/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center gap-3 text-brass">
            <Mark className="size-8" />
            <strong className="text-paper">{copy.brand.name}</strong>
          </div>
          <p className="text-sm text-paper-dim">{copy.footer.note}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navItems(locale).map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-paper/80 hover:text-brass"
            >
              {copy.nav[item.key]}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="text-paper/80 hover:text-brass"
          >
            {site.email}
          </a>
        </nav>
      </div>
      <div className="hairline h-px" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-paper-dim sm:px-6">
        <span>{copy.footer.rights}</span>
        <Link href={localePath(locale, "/products")} className="hover:text-brass">
          {site.product}
        </Link>
      </div>
    </footer>
  );
}
