import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FAQS } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "سوالات متداول خدمات پایان‌نامه و مقاله | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "پاسخ به پرتکرارترین سوالات درباره هزینه پایان‌نامه، زمان تحویل، محرمانگی اطلاعات، اصلاحات رایگان و گزارش همانندجویی.",
      },
      { property: "og:title", content: "سوالات متداول | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "پاسخ سوالات رایج درباره خدمات پژوهشی ما." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        title="سوالات متداول"
        subtitle="پاسخ سوالات پرتکرار شما درباره فرآیند سفارش، هزینه‌ها، زمان‌بندی و ضمانت‌ها"
      />
      <section className="container-site max-w-3xl py-16">
        <div className="flex flex-col gap-4">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-card-soft">
              <summary className="cursor-pointer list-none text-base font-bold">{f.q}</summary>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-8 text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
