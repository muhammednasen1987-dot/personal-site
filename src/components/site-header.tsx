"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { Mark } from "@/components/mark";
import { localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary;
}) {
  const pathname = usePathname() || "/";
  const items = navItems(locale);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brass/15 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-3 text-paper"
          onClick={() => setOpen(false)}
        >
          <Mark className="size-9 text-brass" />
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-semibold">
              {copy.brand.name}
            </span>
            <span className="block text-[0.68rem] text-paper-dim">
              {copy.brand.field}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="primary">
          {items.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              home={item.href === localePath(locale, "/")}
              pathname={pathname}
            >
              {copy.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle
            locale={locale}
            label={copy.nav.language}
            ariaLabel={copy.nav.languageAria}
          />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-paper hover:text-brass lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? copy.nav.close : copy.nav.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-brass/15 bg-ink px-4 py-3 lg:hidden sm:px-6"
          aria-label="mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-brass/10 py-3 text-lg text-paper"
                >
                  {copy.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  home,
  pathname,
  children,
}: {
  href: string;
  home: boolean;
  pathname: string;
  children: React.ReactNode;
}) {
  const active = home
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-[0.92rem] transition-colors",
        active ? "text-brass" : "text-paper/80 hover:text-paper"
      )}
    >
      {children}
    </Link>
  );
}
