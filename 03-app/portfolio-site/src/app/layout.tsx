import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site";
import { site } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full text-slate-100">
        <div className="relative flex min-h-screen flex-col">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.2),rgba(15,23,42,0))] blur-3xl" />
            <div className="absolute right-[-10rem] top-[18rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),rgba(15,23,42,0))] blur-3xl" />
            <div className="absolute bottom-[-8rem] left-[-8rem] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),rgba(15,23,42,0))] blur-3xl" />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
