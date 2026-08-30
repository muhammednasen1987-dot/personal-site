import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentAttrs } from "@/components/document-attrs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, t, type Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const copy = t(raw);
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      languages: {
        ar: "/",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const copy = t(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${locale}";document.documentElement.dir="${locale === "ar" ? "rtl" : "ltr"}";document.documentElement.classList.add("dark");`,
        }}
      />
      <DocumentAttrs locale={locale} />
      <SiteHeader locale={locale} copy={copy} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} copy={copy} />
    </>
  );
}
