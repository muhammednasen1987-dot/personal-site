export const site = {
  nameAr: "محمد نعسان",
  nameEn: "Muhammed Nasen",
  email: "syria4future@gmail.com",
  product: "wa-platform",
} as const;

export function displayName(locale: "ar" | "en") {
  return locale === "ar" ? site.nameAr : site.nameEn;
}
