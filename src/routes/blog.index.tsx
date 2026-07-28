import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { POSTS } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "وبلاگ آموزشی پایان‌نامه و مقاله | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "مقالات آموزشی نگارش پایان‌نامه، مقاله ISI، روش تحقیق، نرم‌افزارهای آماری، معرفی پرسشنامه‌ها و اخبار دانشگاه‌ها و بورسیه.",
      },
      { property: "og:title", content: "وبلاگ آموزشی | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "آموزش پایان‌نامه، مقاله، روش تحقیق و نرم‌افزارهای آماری.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        title="وبلاگ آموزشی"
        subtitle="آموزش‌های کاربردی پایان‌نامه‌نویسی، مقاله‌نویسی، روش تحقیق و نرم‌افزارهای آماری"
      />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              {p.category}
            </span>
            <h2 className="mb-3 text-base font-bold leading-8 group-hover:text-primary">{p.title}</h2>
            <p className="flex-1 text-sm leading-7 text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {p.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {p.readTime}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
