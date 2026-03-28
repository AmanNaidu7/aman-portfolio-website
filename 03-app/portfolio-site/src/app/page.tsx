import {
  Badge,
  ButtonLink,
  CapabilityCard,
  PageShell,
  ProcessCard,
  ProjectCard,
  SectionHeading,
  StatCard,
  TextLink,
  VisualFrame,
} from "@/components/site";
import {
  getFeaturedProjects,
  getHomeShellContent,
  getHomeStats,
} from "@/lib/home-shell";
import { getSiteShellContent } from "@/lib/site-shell";

export async function generateMetadata() {
  const [shell, content] = await Promise.all([
    getSiteShellContent(),
    getHomeShellContent(),
  ]);

  return {
    title: `${shell.site.name} | Portfolio`,
    description: content.heroSummary,
  };
}

export default async function Home() {
  const content = await getHomeShellContent();
  const featuredProjects = getFeaturedProjects();
  const homeStats = getHomeStats();

  return (
    <PageShell className="space-y-20 py-10 sm:py-14 lg:py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <Badge>{content.eyebrow}</Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
              {content.heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {content.heroSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={content.heroPrimaryCTA.href}>
              {content.heroPrimaryCTA.label}
            </ButtonLink>
            <ButtonLink href={content.heroSecondaryCTA.href} variant="secondary">
              {content.heroSecondaryCTA.label}
            </ButtonLink>
            <ButtonLink href={content.heroTertiaryCTA.href} variant="ghost">
              {content.heroTertiaryCTA.label}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeStats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        <VisualFrame className="lg:justify-self-end">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Operating style
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  {content.operatingStyle}
                </p>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                Available for projects
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.credibilityStrip.map((point, index) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-medium text-white">{point}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {index === 0
                      ? "Established credibility and experience for senior audiences."
                      : index === 1
                        ? "Built to communicate systems that solve real business problems."
                        : index === 2
                          ? "Shows implementation depth and production-minded thinking."
                          : "Relevant for consulting, delivery, and technical leadership."}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Focus areas</p>
                  <p className="mt-1 text-lg font-medium text-white">
                    {content.capabilities
                      .slice(0, 4)
                      .map((capability) => capability.title)
                      .join(", ")}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(45,212,191,0.35),rgba(59,130,246,0.15))]" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {content.workingStyleSteps.slice(0, 3).map((step) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-sm text-slate-200"
                  >
                    {step.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VisualFrame>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured work"
          title="Selected projects that show problem-solving depth, not just screenshots."
          description="The featured set is tuned for quick credibility: business problem, implementation choices, and a practical outcome."
          action={<TextLink href="/projects">See all projects</TextLink>}
        />
        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-end delivery across AI, automation, analytics, and deployment."
          description="These are the kinds of systems this portfolio is meant to communicate clearly."
        />
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
          {content.capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            Professional summary
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Senior enough to think in systems. Practical enough to ship.
          </h2>
          <p className="max-w-prose text-sm leading-7 text-slate-300 sm:text-base">
            {content.professionalSummary}
          </p>
          <ButtonLink href="/about" variant="secondary">
            Read About
          </ButtonLink>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Working style
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {content.workingStyleTitle}
              </h2>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              End-to-end
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.workingStyleSteps.map((step, index) => (
              <ProcessCard key={step.title} step={step} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,0.9))] p-8 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/80">
              Final call to action
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              If you want to review the work, compare notes, or start a
              conversation, the next step is straightforward.
            </h2>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              Browse the projects, read the background, or reach out directly
              through the contact page. The content is intentionally simple so a
              visitor can move quickly from interest to action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Contact Me</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View Projects
            </ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              About
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
