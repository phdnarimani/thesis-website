import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { FIELDS } from "@/data/services";

export const Route = createFileRoute("/fields")({
  head: () => ({
    meta: [
      { title: "رشته‌های تحت پوشش | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "خدمات پایان‌نامه و مقاله در بیش از ۳۰ رشته: مدیریت، حسابداری، روانشناسی، مهندسی کامپیوتر، هوش مصنوعی، پزشکی، حقوق و سایر رشته‌ها.",
      },
      { property: "og:title", content: "رشته‌های تحت پوشش | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "بیش از ۳۰ رشته دانشگاهی تحت پوشش خدمات پژوهشی ما.",
      },
      { property: "og:url", content: "/fields" },
    ],
    links: [{ rel: "canonical", href: "/fields" }],
  }),
  component: FieldsPage,
});

function FieldsPage() {
  return (
    <>
      <PageHero
        title="رشته‌های تحت پوشش"
        subtitle="تیم پژوهشی ما متشکل از متخصصان هم‌رشته در گروه‌های علوم انسانی، فنی‌مهندسی، علوم پزشکی و هنر است"
      />
      <section className="container-site py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {FIELDS.map((f) => (
            <div
              key={f}
              className="rounded-2xl border border-border bg-card p-5 text-center font-bold shadow-card-soft transition-colors hover:border-primary/40 hover:text-primary"
            >
              {f}
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-secondary p-8 text-center">
          <h2 className="text-xl font-extrabold">رشته شما در فهرست نیست؟</h2>
          <p className="mx-auto mt-3 max-w-xl leading-8 text-muted-foreground">
            با ما تماس بگیرید؛ در بسیاری از گرایش‌های میان‌رشته‌ای نیز امکان ارائه خدمات وجود دارد.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary-glow"
          >
            مشاوره رایگان
          </Link>
        </div>
      </section>
    </>
  );
}
