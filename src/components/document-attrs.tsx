"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export function DocumentAttrs({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    root.classList.add("dark");
  }, [locale]);

  return null;
}
