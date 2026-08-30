import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localePath, t } from "@/lib/i18n";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const copy = t(raw);
  const s = copy.services;

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="display text-4xl sm:text-5xl">{s.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-paper-dim">{s.lead}</p>

      <ol className="mt-12 divide-y divide-brass/15 border-y border-brass/15">
        {s.items.map((item) => (
          <li
            key={item.num}
            className="grid gap-3 py-8 md:grid-cols-[5rem_1fr] md:gap-10"
          >
            <span className="font-mono text-sm text-brass">{item.num}</span>
            <div>
              <h2 className="text-2xl text-paper">{item.title}</h2>
              <p className="mt-2 max-w-2xl text-paper-dim">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_18rem]">
        <div>
          <h2 className="display text-3xl">{s.howTitle}</h2>
          <ol className="mt-6 space-y-4">
            {s.how.map((step, index) => (
              <li key={step} className="flex gap-4 text-paper-dim">
                <span className="font-mono text-brass">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside className="frame flex flex-col justify-between p-6">
          <p className="text-paper">{s.lead}</p>
          <Link href={localePath(raw, "/contact")} className="cta cta-primary mt-8">
            {s.cta}
          </Link>
        </aside>
      </section>
    </article>
  );
}
