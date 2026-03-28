import { Badge, ButtonLink, PageShell, SectionHeading } from "@/components/site";

export const metadata = {
  title: "About",
  description:
    "Professional background, strengths, and working style for Aman Naidu.",
};

import { getAboutPageContent } from "@/lib/about-shell";

export default async function AboutPage() {
  const content = await getAboutPageContent();

  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="max-w-4xl space-y-6">
        <Badge>{content.badge}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {content.heroTitle}
        </h1>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">
          {content.heroSummary}
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow={content.background.eyebrow}
            title={content.background.title}
            description={content.background.description}
          />
          <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-300">
            {content.background.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Core strengths
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {strength}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            {content.strengthsSummary}
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            {content.workingStyle.eyebrow}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {content.workingStyle.body}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Current focus
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm leading-7 text-slate-300">
              {content.focusSummary}
            </p>
          </div>
        </article>
      </section>

      <section className="rounded-[2rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(15,23,42,0.9))] p-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">
            {content.statement.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {content.statement.title}
          </h2>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            {content.statement.body}
          </p>
        </div>
        <div className="mt-6">
          <ButtonLink href={content.cta.href}>{content.cta.label}</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
