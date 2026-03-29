import { ButtonLink, PageShell } from "@/components/site";

export default function NotFound() {
  return (
    <PageShell className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="max-w-2xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
          Page not found
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          The page you&apos;re looking for doesn&apos;t exist.
        </h1>
        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          Use the navigation to return to the home page, browse projects, or
          get in touch.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            Projects
          </ButtonLink>
        </div>
      </div>
    </PageShell>
  );
}
