import { Badge, ButtonLink, PageShell, SectionHeading } from "@/components/site";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Resume",
  description: "Compact resume-style summary for Aman Naidu.",
};

const highlights = [
  "AI systems and workflow automation",
  "Data engineering and analytics delivery",
  "Consulting-style communication with stakeholders",
  "Production-minded architecture and implementation",
];

export default function ResumePage() {
  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="max-w-3xl space-y-6">
        <Badge>Resume</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          A compact summary of the skills, focus areas, and project themes that
          define {site.name}.
        </h1>
        <p className="text-base leading-7 text-slate-300 sm:text-lg">
          This page stands in for a resume download in version 1. It keeps the
          content accessible from the site while leaving room to swap in a PDF
          later if needed.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Highlights"
            title="What this profile is built to communicate"
            description="The goal is to show seniority, structure, and practical delivery across a range of technical contexts."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Best fit
          </p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <p>AI and automation consulting.</p>
            <p>Data and analytics delivery roles.</p>
            <p>Technical work that needs a clean interface and real structure.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View Projects</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
