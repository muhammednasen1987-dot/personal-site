import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localePath, t } from "@/lib/i18n";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const copy = t(raw);
  const p = copy.products;

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="kicker">{p.kicker}</p>
      <h1 className="display mt-3 text-4xl sm:text-5xl">{p.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-paper-dim">{p.lead}</p>

      <header className="frame mt-12 p-6 sm:p-10">
        <p className="font-mono text-sm text-brass">{p.stack}</p>
        <h2 className="mt-3 font-mono text-3xl tracking-tight text-paper sm:text-4xl">
          {p.name}
        </h2>
        <p className="mt-2 text-xl text-paper">{p.tagline}</p>
        <p className="mt-5 max-w-3xl text-paper-dim">{p.intro}</p>
        <p className="mt-4 max-w-3xl border-s-2 border-brass/50 ps-4 text-paper">
          {p.honest}
        </p>
        <Link href={localePath(raw, "/contact")} className="cta cta-primary mt-8">
          {p.cta}
        </Link>
      </header>

      <h3 className="display mt-16 text-3xl">{p.specsTitle}</h3>
      <ol className="mt-8 grid gap-6 md:grid-cols-2">
        {p.specs.map((spec) => (
          <li key={spec.num} className="border-t border-brass/20 pt-5">
            <span className="font-mono text-xs text-brass">{spec.num}</span>
            <h4 className="mt-2 text-xl text-paper">{spec.title}</h4>
            <p className="mt-2 text-paper-dim">{spec.body}</p>
          </li>
        ))}
      </ol>

      <section className="mt-16 border border-brass/15 p-6 sm:p-8">
        <h3 className="text-xl text-paper">{p.outTitle}</h3>
        <ul className="mt-4 grid gap-2 text-paper-dim sm:grid-cols-2">
          {p.outItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 bg-brass/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
