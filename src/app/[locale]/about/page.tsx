import { notFound } from "next/navigation";
import { isLocale, t } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const copy = t(raw);
  const a = copy.about;

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="display text-4xl sm:text-5xl">{a.title}</h1>
      <p className="mt-5 text-lg text-paper-dim">{a.lead}</p>
      <div className="mt-10 space-y-6 text-lg text-paper">
        <p>{a.p1}</p>
        <p>{a.p2}</p>
        <p>{a.p3}</p>
      </div>
      <section className="mt-14 border-t border-brass/20 pt-8">
        <h2 className="kicker">{a.linksTitle}</h2>
        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-sm text-paper-dim">{a.emailLabel}</dt>
            <dd>
              <a
                href={`mailto:${site.email}`}
                className="text-brass underline-offset-4 hover:underline"
                dir="ltr"
              >
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
