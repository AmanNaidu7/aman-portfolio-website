import { Badge, ButtonLink, PageShell, SectionHeading } from "@/components/site";

export const metadata = {
  title: "About",
  description:
    "Professional background, strengths, and working style for Aman Naidu.",
};

const strengths = [
  "AI and data systems",
  "Business problem solving",
  "Stakeholder communication",
  "End-to-end delivery",
  "Architecture thinking",
  "Production-minded implementation",
];

const focusAreas = [
  "AI systems",
  "Automation",
  "Modern data workflows",
  "Consulting",
  "Portfolio projects",
];

export default function AboutPage() {
  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="max-w-4xl space-y-6">
        <Badge>About Aman</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          A senior technical profile with a strong bias toward clarity, useful
          systems, and trustworthy delivery.
        </h1>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">
          This page is written to give visitors a quick but credible sense of
          who Aman is professionally: someone who can work across AI, data,
          automation, and analytics without losing sight of the business
          context.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Background"
            title="Professional background"
            description="The structure is intentionally concise: enough detail to establish credibility without turning into a long biography."
          />
          <div className="mt-6 grid gap-3 text-sm leading-7 text-slate-300">
            <p>Experience across technology, data, and operational workflows.</p>
            <p>Comfortable working with both technical and non-technical teams.</p>
            <p>Focused on systems that improve clarity, speed, and reliability.</p>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Core strengths
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {strength}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            These strengths are represented in the portfolio through real
            project structure, not vague claims.
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            How Aman works
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            The working style is structured and practical: define the problem,
            choose a sensible architecture, build a maintainable solution, and
            keep the outcome grounded in what the business actually needs.
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Current focus
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
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
              The portfolio is built to support consulting, job applications,
              and general professional branding while staying easy to extend.
            </p>
          </div>
        </article>
      </section>

      <section className="rounded-[2rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(15,23,42,0.9))] p-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">
            Personal statement
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The goal is simple: make complex work easy to trust.
          </h2>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            This site is intended to feel composed, senior, and grounded. It
            communicates capability without hype and leaves space for the work
            itself to do the talking.
          </p>
        </div>
        <div className="mt-6">
          <ButtonLink href="/contact">Contact Me</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
