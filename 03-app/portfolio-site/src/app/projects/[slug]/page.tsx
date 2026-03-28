import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Badge,
  ButtonLink,
  PageShell,
  SectionHeading,
  TextLink,
  VisualFrame,
} from "@/components/site";
import { getProjectBySlug, projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const links = [
    project.links.demo ? { label: "Live demo", href: project.links.demo } : null,
    project.links.repo ? { label: "Repo", href: project.links.repo } : null,
    project.links.video ? { label: "Video", href: project.links.video } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="space-y-6">
        <Badge>{project.category}</Badge>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="secondary">
                Back to Projects
              </ButtonLink>
              <ButtonLink href="/contact">Discuss This Work</ButtonLink>
            </div>
          </div>

          <VisualFrame>
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Category
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    {project.category}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Featured
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">
                    {project.featured ? "Yes" : "No"}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </VisualFrame>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Problem
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {project.problem}
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Solution
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {project.solution}
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <SectionHeading
            eyebrow="Architecture"
            title="How the system is shaped"
            description={project.architecture}
          />
        </article>

        <div className="space-y-5">
          <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Key features
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Outcome
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              {project.outcome}
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Challenges and decisions
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Visuals and links
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Hero image path
              </p>
              <p className="mt-2 break-all font-mono text-xs text-slate-300">
                {project.heroImage}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Links
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {links.length > 0 ? (
                  links.map((link) => (
                    <TextLink key={link.label} href={link.href}>
                      {link.label}
                    </TextLink>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">
                    Demo and repository links can be added later.
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
