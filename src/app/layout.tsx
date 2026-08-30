import type { Metadata } from "next";
import { Amiri, IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "محمد نعسان — حلول تقنية، أتمتة، وذكاء اصطناعي",
    template: "%s · محمد نعسان",
  },
  description:
    "مهندس مستقل يبني أنظمة عملية: بوابات واتساب، أتمتة سير العمل، ووكلاء ذكاء اصطناعي قابلة للنشر.",
  openGraph: {
    title: "محمد نعسان — حلول تقنية، أتمتة، وذكاء اصطناعي",
    description:
      "مهندس مستقل يبني أنظمة عملية: بوابات واتساب، أتمتة سير العمل، ووكلاء ذكاء اصطناعي قابلة للنشر.",
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
