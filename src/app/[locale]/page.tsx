import Link from "next/link";
import { notFound } from "next/navigation";
import { Mark } from "@/components/mark";
import { isLocale, localePath, t } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const copy = t(raw);
  const services = copy.services.items;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="kicker mb-5">{copy.home.eyebrow}</p>
            <h1 className="display text-4xl text-paper sm:text-5xl lg:text-[3.6rem]">
              {copy.home.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper-dim">
              {copy.home.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={localePath(raw, "/contact")} className="cta cta-primary">
                {copy.home.primary}
              </Link>
              <Link href={localePath(raw, "/products")} className="cta cta-ghost">
                {copy.home.secondary}
              </Link>
            </div>
          </div>
          <aside className="frame relative p-6 sm:p-8">
            <Mark className="absolute top-5 end-5 size-12 text-brass/50" />
            <p className="kicker">{copy.home.featuredKicker}</p>
            <h2 className="mt-3 font-mono text-2xl tracking-tight text-brass">
              {copy.home.featuredTitle}
            </h2>
            <p className="mt-1 text-paper">{copy.home.featuredSubtitle}</p>
            <p className="mt-4 text-paper-dim">{copy.home.featuredBody}</p>
            <Link
              href={localePath(raw, "/products")}
              className="mt-6 inline-block text-brass underline-offset-4 hover:underline"
            >
              {copy.home.featuredCta}
            </Link>
          </aside>
        </div>
      </section>

      <div className="hairline h-px" />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="kicker">{copy.home.servicesKicker}</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">{copy.home.servicesTitle}</h2>
        <ol className="mt-10 grid gap-px bg-brass/15 sm:grid-cols-2">
          {services.map((item) => (
            <li key={item.num} className="bg-ink p-6 sm:p-8">
              <span className="font-mono text-xs text-brass">{item.num}</span>
              <h3 className="mt-3 text-xl text-paper">{item.title}</h3>
              <p className="mt-2 text-paper-dim">{item.body}</p>
            </li>
          ))}
        </ol>
        <Link
          href={localePath(raw, "/services")}
          className="mt-8 inline-block text-brass underline-offset-4 hover:underline"
        >
          {copy.nav.services}
        </Link>
      </section>

      <section className="border-y border-brass/15 bg-ink-raised/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="display text-3xl">{copy.home.contactBandTitle}</h2>
            <p className="mt-3 text-paper-dim">{copy.home.contactBandBody}</p>
          </div>
          <a href={`mailto:${site.email}`} className="cta cta-primary" dir="ltr">
            {copy.home.contactBandCta}
          </a>
        </div>
      </section>
    </div>
  );
}
