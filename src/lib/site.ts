export const site = {
  nameAr: "محمد نعسان",
  nameEn: "Muhammed Nasen",
  email: "syria4future@gmail.com",
  facebook: "https://www.facebook.com/nasasana.nasa",
  product: "wa-platform",
  origin: "https://muhammednasen.com",
} as const;

export function displayName(locale: "ar" | "en") {
  return locale === "ar" ? site.nameAr : site.nameEn;
}
