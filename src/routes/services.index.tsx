import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "خدمات پژوهشی و دانشگاهی | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "فهرست کامل خدمات پژوهشی: پایان‌نامه، مقاله ISI، پروپوزال، تحلیل آماری، پرسشنامه، دیتاست، ترجمه تخصصی، ویراستاری و آموزش نرم‌افزار.",
      },
      { property: "og:title", content: "خدمات پژوهشی و دانشگاهی | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "فهرست کامل خدمات پایان‌نامه، مقاله، تحلیل آماری و ترجمه تخصصی.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        title="خدمات پژوهشی ما"
        subtitle="مجموعه کاملی از خدمات تخصصی دانشگاهی از پروپوزال تا چاپ مقاله؛ برای همه مقاطع و رشته‌ها"
      />
      <section className="container-site grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <h2 className="mb-3 text-lg font-bold group-hover:text-primary">{s.title}</h2>
            <p className="flex-1 text-sm leading-8 text-muted-foreground">{s.intro}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {s.items.slice(0, 4).map((i) => (
                <li key={i.name} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                  {i.name}
                </li>
              ))}
            </ul>
            <span className="mt-5 flex items-center gap-1 text-sm font-bold text-primary">
              جزئیات و زیرخدمات
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
