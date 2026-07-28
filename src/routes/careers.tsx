import { createFileRoute, Link } from "@tanstack/react-router";
import { PenTool, Languages, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "همکاری با ما؛ استخدام پژوهشگر، مترجم و تحلیلگر | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "فرصت همکاری برای پژوهشگران، مترجمان تخصصی و تحلیلگران آماری؛ همکاری دورکاری با پرداخت منظم و پروژه‌های مستمر.",
      },
      { property: "og:title", content: "همکاری با ما | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "استخدام پژوهشگر، مترجم و تحلیلگر آماری." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const ROLES = [
  {
    icon: PenTool,
    title: "استخدام پژوهشگر",
    desc: "اگر دانشجوی دکتری یا فارغ‌التحصیل تحصیلات تکمیلی هستید و در نگارش پروپوزال، پایان‌نامه یا مقاله تجربه دارید، به تیم پژوهشی ما بپیوندید.",
    reqs: ["مدرک ارشد یا دکتری", "تسلط بر روش تحقیق", "نمونه کار قابل ارائه", "تعهد به زمان‌بندی"],
  },
  {
    icon: Languages,
    title: "همکاری مترجم",
    desc: "مترجمان مسلط به متون علمی و آشنا با ساختار مقالات ISI برای ترجمه فارسی به انگلیسی و بالعکس در رشته‌های مختلف.",
    reqs: ["تسلط کامل به زبان انگلیسی", "آشنایی با اصطلاحات تخصصی", "توانایی ترجمه روان علمی", "دقت و وسواس زبانی"],
  },
  {
    icon: BarChart3,
    title: "همکاری تحلیلگر آماری",
    desc: "تحلیلگران مسلط به SPSS، SmartPLS، AMOS، EViews، R یا Python برای انجام تحلیل‌های کمی و کیفی پروژه‌های پژوهشی.",
    reqs: ["تسلط بر حداقل دو نرم‌افزار آماری", "توانایی تفسیر علمی خروجی‌ها", "آشنایی با مدل‌سازی معادلات ساختاری", "پاسخگویی سریع"],
  },
];

function CareersPage() {
  return (
    <>
      <PageHero
        title="همکاری با ما"
        subtitle="به شبکه‌ای از پژوهشگران، مترجمان و تحلیلگران حرفه‌ای بپیوندید؛ دورکاری کامل، پروژه‌های مستمر و پرداخت منظم"
      />
      <section className="container-site grid gap-6 py-16 lg:grid-cols-3">
        {ROLES.map((r) => (
          <div key={r.title} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft">
            <r.icon className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
            <h2 className="mb-3 text-lg font-bold">{r.title}</h2>
            <p className="text-sm leading-8 text-muted-foreground">{r.desc}</p>
            <h3 className="mb-2 mt-5 text-sm font-bold">شرایط همکاری:</h3>
            <ul className="flex flex-col gap-2">
              {r.reqs.map((q) => (
                <li key={q} className="rounded-lg bg-secondary px-3 py-2 text-sm">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="container-site pb-16">
        <div className="rounded-3xl bg-gradient-hero p-8 text-center text-hero-foreground">
          <h2 className="text-xl font-extrabold">ارسال رزومه</h2>
          <p className="mx-auto mt-3 max-w-xl leading-8 text-hero-foreground/85">
            رزومه و نمونه کار خود را از طریق فرم تماس یا تلگرام برای ما ارسال کنید؛ نتیجه بررسی
            حداکثر ظرف یک هفته اعلام می‌شود.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-xl bg-gradient-gold px-7 py-3 font-bold text-gold-foreground"
          >
            ارسال رزومه از طریق فرم تماس
          </Link>
        </div>
      </section>
    </>
  );
}
