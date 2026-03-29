import { Badge, PageShell, ProjectCard } from "@/components/site";
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
            <span
              key={category}
              className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="grid gap-5 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
