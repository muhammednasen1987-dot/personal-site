import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { isLocale, t } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const copy = t(raw);
  const c = copy.contact;

  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
      <header>
        <h1 className="display text-4xl sm:text-5xl">{c.title}</h1>
        <p className="mt-5 text-lg text-paper-dim">{c.lead}</p>
        <div className="frame mt-8 p-6">
          <p className="kicker">{c.emailLabel}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block font-mono text-xl text-brass"
            dir="ltr"
          >
            {site.email}
          </a>
          <div className="mt-5">
            <CopyEmail copyLabel={c.copy} copiedLabel={c.copied} />
          </div>
          <a
            href={site.github}
            className="mt-6 inline-block text-paper-dim underline-offset-4 hover:text-brass hover:underline"
            dir="ltr"
            rel="noreferrer"
            target="_blank"
          >
            {c.github} · {site.githubHandle}
          </a>
        </div>
      </header>
      <section className="frame p-6 sm:p-8">
        <h2 className="text-2xl text-paper">{c.formTitle}</h2>
        <div className="mt-6">
          <ContactForm copy={c} />
        </div>
      </section>
    </article>
  );
}
