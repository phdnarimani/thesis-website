import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "نظرات و رضایت مشتریان | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "تجربیات واقعی دانشجویان از خدمات پایان‌نامه، مقاله و تحلیل آماری پژوهش‌یار آکادمیک؛ نرخ رضایت ۹۸ درصدی مشتریان.",
      },
      { property: "og:title", content: "نظرات مشتریان | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "تجربیات کاربران از خدمات پژوهشی ما." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const TESTIMONIALS = [
  {
    name: "سارا م.",
    field: "کارشناسی ارشد مدیریت بازرگانی",
    text: "تحلیل SmartPLS فصل چهارم پایان‌نامه‌ام را انجام دادند و تک‌تک خروجی‌ها را برایم توضیح دادند. در جلسه دفاع به همه سوالات آماری داوران با اطمینان پاسخ دادم و نمره ۱۹/۵ گرفتم.",
    stars: 5,
  },
  {
    name: "محمد ر.",
    field: "دکتری مهندسی صنایع",
    text: "مقاله‌ای که از رساله‌ام استخراج کردند، بعد از یک راند داوری در یک مجله Q2 اسکوپوس پذیرش شد. پاسخ به داوران را هم خودشان به‌صورت کاملاً حرفه‌ای تنظیم کردند.",
    stars: 5,
  },
  {
    name: "فاطمه ک.",
    field: "کارشناسی ارشد روانشناسی",
    text: "پروپوزالم دو بار در گروه رد شده بود. بیان مسئله را بازنویسی و مدل مفهومی را اصلاح کردند و در جلسه بعدی بدون هیچ ایرادی تصویب شد. واقعاً ممنونم.",
    stars: 5,
  },
  {
    name: "امیر ح.",
    field: "کارشناسی ارشد حسابداری",
    text: "داده‌های ۱۱۰ شرکت بورسی را استخراج و با EViews تحلیل کردند. فایل‌ها منظم و تفسیرها روان بود. زمان‌بندی هم دقیقاً طبق قرارداد پیش رفت.",
    stars: 5,
  },
  {
    name: "نرگس ط.",
    field: "دکتری علوم تربیتی",
    text: "مصاحبه‌های پژوهش کیفی‌ام را با MAXQDA کدگذاری کردند و شبکه مضامین بسیار حرفه‌ای ارائه شد. استاد راهنمایم از کیفیت کار تعجب کرده بود.",
    stars: 5,
  },
  {
    name: "رضا ع.",
    field: "کارشناسی ارشد مهندسی کامپیوتر",
    text: "ویرایش نیتیو مقاله‌ام باعث شد ایراد زبانی که دلیل ریجکت قبلی بود کاملاً برطرف شود. گواهی ویرایش هم برای مجله ارسال شد و مقاله پذیرش گرفت.",
    stars: 4,
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="نظرات مشتریان"
        subtitle="رضایت ۹۸ درصدی مشتریان، معتبرترین سند کیفیت خدمات ماست"
      />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <div className="mb-3 flex gap-1" aria-label={`${t.stars} ستاره از ۵`}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="flex-1 text-sm leading-8 text-muted-foreground">
              «{t.text}»
            </blockquote>
            <figcaption className="mt-4 border-t border-border pt-4">
              <p className="font-bold">{t.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.field}</p>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="container-site pb-16 text-center">
        <Link
          to="/order"
          className="inline-block rounded-xl bg-gradient-gold px-8 py-3.5 font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
        >
          شما هم پروژه خود را به ما بسپارید
        </Link>
      </section>
    </>
  );
}
