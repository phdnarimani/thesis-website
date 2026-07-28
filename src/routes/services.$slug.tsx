import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "خدمت یافت نشد" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.metaTitle} | پژوهش‌یار آکادمیک` },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: { "@type": "Organization", name: "پژوهش‌یار آکادمیک" },
            areaServed: "IR",
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  errorComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="text-2xl font-extrabold">خدمت مورد نظر یافت نشد</h1>
      <Link to="/services" className="mt-4 inline-block font-bold text-primary hover:underline">
        مشاهده همه خدمات ←
      </Link>
    </div>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: (typeof SERVICES)[number] };

  return (
    <>
      <PageHero title={service.title} subtitle={service.intro} />

      <section className="container-site max-w-4xl py-14">
        {service.body.map((p) => (
          <p key={p.slice(0, 30)} className="mb-5 leading-9 text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="bg-secondary py-14">
        <div className="container-site">
          <h2 className="mb-8 text-center text-2xl font-extrabold">زیرخدمات {service.shortTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((i) => (
              <div key={i.name} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card-soft">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="mb-1 font-bold">{i.name}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-14">
        <div className="rounded-3xl bg-gradient-hero px-6 py-10 text-center text-hero-foreground">
          <h2 className="text-xl font-extrabold md:text-2xl">
            برای {service.title} به مشاوره نیاز دارید؟
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-8 text-hero-foreground/85">
            همین حالا سفارش خود را ثبت کنید یا با شماره{" "}
            <span dir="ltr" className="font-bold text-gold">{CONTACT.phones[0]}</span> تماس بگیرید.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/order"
              className="rounded-xl bg-gradient-gold px-7 py-3 font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
            >
              ثبت سفارش
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border-2 border-hero-foreground/25 px-7 py-2.5 font-bold transition-colors hover:border-gold hover:text-gold"
            >
              مشاوره رایگان
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
