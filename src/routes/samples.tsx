import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, BarChart3, ClipboardList, BookOpen, Table2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "نمونه کارها؛ پایان‌نامه، مقاله و تحلیل آماری | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "نمونه پایان‌نامه، نمونه مقاله ISI، نمونه پروپوزال، نمونه تحلیل آماری SPSS و SmartPLS و نمونه پرسشنامه انجام‌شده توسط تیم ما.",
      },
      { property: "og:title", content: "نمونه کارها | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "نمونه پایان‌نامه، مقاله، پروپوزال و تحلیل آماری واقعی.",
      },
      { property: "og:url", content: "/samples" },
    ],
    links: [{ rel: "canonical", href: "/samples" }],
  }),
  component: SamplesPage,
});

const SAMPLES = [
  {
    icon: BookOpen,
    title: "نمونه پایان‌نامه",
    items: [
      "پایان‌نامه ارشد مدیریت: تأثیر رهبری تحول‌آفرین بر نوآوری سازمانی",
      "پایان‌نامه ارشد حسابداری: رابطه کیفیت سود و هزینه سرمایه",
      "رساله دکتری روانشناسی: مدل ساختاری تاب‌آوری تحصیلی",
    ],
  },
  {
    icon: FileText,
    title: "نمونه مقاله",
    items: [
      "مقاله ISI (Q1) حوزه زنجیره تأمین سبز — چاپ‌شده در Journal of Cleaner Production",
      "مقاله Scopus حوزه هوش مصنوعی در آموزش",
      "مقاله علمی پژوهشی مدیریت منابع انسانی",
    ],
  },
  {
    icon: ClipboardList,
    title: "نمونه پروپوزال",
    items: [
      "پروپوزال ارشد مهندسی صنایع با مدل مفهومی سه‌سطحی",
      "پروپوزال دکتری اقتصاد با رویکرد اقتصادسنجی پانل",
      "پروپوزال ارشد علوم تربیتی با روش آمیخته",
    ],
  },
  {
    icon: BarChart3,
    title: "نمونه تحلیل آماری",
    items: [
      "فصل چهارم با SmartPLS: مدل معادلات ساختاری با متغیر میانجی",
      "تحلیل EViews: داده پانل ۱۲۰ شرکت بورسی",
      "تحلیل کیفی MAXQDA: کدگذاری سه‌مرحله‌ای مصاحبه",
    ],
  },
  {
    icon: Table2,
    title: "نمونه پرسشنامه",
    items: [
      "پرسشنامه محقق‌ساخته سنجش تجربه مشتری با روایی CVR",
      "پرسشنامه استاندارد بومی‌سازی‌شده تعهد سازمانی آلن و می‌یر",
      "پرسشنامه ترکیبی با تحلیل عاملی تأییدی",
    ],
  },
];

function SamplesPage() {
  return (
    <>
      <PageHero
        title="نمونه کارها"
        subtitle="گوشه‌ای از پروژه‌های موفق انجام‌شده توسط تیم پژوهش‌یار آکادمیک — با حفظ محرمانگی اطلاعات مشتریان"
      />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {SAMPLES.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <s.icon className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mb-4 text-lg font-bold">{s.title}</h2>
            <ul className="flex flex-col gap-3">
              {s.items.map((i) => (
                <li key={i} className="rounded-lg bg-secondary px-3 py-2.5 text-sm leading-7">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-hero p-8 text-center text-hero-foreground">
          <h2 className="text-lg font-extrabold">نمونه رشته خود را می‌خواهید؟</h2>
          <p className="mt-3 text-sm leading-7 text-hero-foreground/85">
            برای دریافت نمونه کار مرتبط با رشته و موضوع خودتان با ما در تماس باشید.
          </p>
          <Link
            to="/contact"
            className="mt-5 rounded-xl bg-gradient-gold px-6 py-2.5 font-bold text-gold-foreground"
          >
            درخواست نمونه کار
          </Link>
        </div>
      </section>
    </>
  );
}
