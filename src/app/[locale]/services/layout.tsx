import type { Metadata } from "next";
import { isLocale, t } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: t(locale).services.title };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
