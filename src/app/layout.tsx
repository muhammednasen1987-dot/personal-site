import type { Metadata } from "next";
import { Amiri, IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Fully static pages emit s-maxage=31536000. ISR with 60s is what actually
// shortens HTML Cache-Control; Hostinger's CDN was pinning stale documents.
export const revalidate = 60;

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const latin = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
  display: "swap",
});

const display = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: `${site.nameAr} — حلول تقنية، أتمتة، وذكاء اصطناعي`,
    template: `%s · ${site.nameAr}`,
  },
  description:
    "أعمل بشكل مستقل على بناء أنظمة عملية: بوابات واتساب، أتمتة سير العمل، ووكلاء ذكاء اصطناعي قابلة للنشر.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${site.nameAr} — حلول تقنية، أتمتة، وذكاء اصطناعي`,
    description:
      "أعمل بشكل مستقل على بناء أنظمة عملية: بوابات واتساب، أتمتة سير العمل، ووكلاء ذكاء اصطناعي قابلة للنشر.",
    locale: "ar",
    alternateLocale: "en",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark ${body.variable} ${latin.variable} ${display.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="site-pattern min-h-full flex flex-col">{children}</body>
    </html>
  );
}
