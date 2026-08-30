export const site = {
  nameAr: "محمد نعسان",
  nameEn: "Muhammed Nasen",
  email: "syria4future@gmail.com",
  github: "https://github.com/muhammednasen1987-dot",
  githubHandle: "muhammednasen1987-dot",
  product: "wa-platform",
} as const;

export function displayName(locale: "ar" | "en") {
  return locale === "ar" ? site.nameAr : site.nameEn;
}
