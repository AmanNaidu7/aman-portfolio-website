import { Badge, PageShell, ProjectCard, SectionHeading } from "@/components/site";
import { getProjectListContent } from "@/lib/project-list-shell";

export const metadata = {
  title: "Projects",
  description:
    "Browse a structured library of AI, automation, data, analytics, and deployment projects.",
};

export default async function ProjectsPage() {
  const { categories, projects } = await getProjectListContent();

  return (
    <PageShell className="space-y-12 py-10 sm:py-14 lg:py-16">
      <section className="space-y-6">
        <Badge>Project library</Badge>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects that show how the work is built, not just what it looks like.
          </h1>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            This page is organised for quick scanning. Each project surfaces the
            problem, the solution, the stack, and the practical result.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (project) => project.category === category,
          );

          return (
            <div
              key={category}
              id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="space-y-5 scroll-mt-28"
            >
              <SectionHeading
                eyebrow={category}
                title={`${categoryProjects.length} project${categoryProjects.length === 1 ? "" : "s"} in this area`}
                description="Each card is written to support fast evaluation of scope, quality, and relevance."
              />
              <div className="grid gap-5 xl:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </PageShell>
  );
}
