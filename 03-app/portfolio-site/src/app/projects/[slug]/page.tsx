import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Badge,
  ButtonLink,
  PageShell,
} from "@/components/site";
import {
  getProjectDetailContentBySlug,
  getProjectRouteParams,
} from "@/lib/project-shell";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getProjectRouteParams();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDetailContentBySlug(slug);

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
  const project = await getProjectDetailContentBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="space-y-6">
        <Badge>{project.category}</Badge>
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
          <p className="mt-6 text-sm uppercase tracking-[0.22em] text-slate-400">
            Outcome
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            {project.outcome}
          </p>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Why it Matters
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {project.whyItMatters}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.22em] text-slate-400">
            Challenges and decisions
          </p>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-200">
            {project.challenges.map((challenge) => (
              <p key={challenge}>{challenge}</p>
            ))}
          </div>
        </article>
      </section>
    </PageShell>
  );
}
