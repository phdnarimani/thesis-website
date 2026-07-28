import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Handshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about-library.jpg";
import { SITE_NAME } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره ما | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "آشنایی با مجموعه پژوهش‌یار آکادمیک؛ اهداف، چشم‌انداز، ارزش‌های کاری، قوانین همکاری و تعهدات ما در ارائه خدمات پایان‌نامه و پژوهش.",
      },
      { property: "og:title", content: "درباره ما | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "اهداف، چشم‌انداز و تعهدات مجموعه پژوهش‌یار آکادمیک.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "اهداف ما",
    desc: "ارتقای کیفیت پژوهش‌های دانشگاهی کشور، کاهش دغدغه دانشجویان در مسیر تحصیلات تکمیلی و انتقال دانش روش تحقیق به نسل جدید پژوهشگران.",
  },
  {
    icon: Eye,
    title: "چشم‌انداز",
    desc: "تبدیل شدن به معتبرترین مرجع خدمات پژوهشی فارسی‌زبان با استانداردهای بین‌المللی و پوشش کامل نیازهای علمی دانشجویان در همه مقاطع.",
  },
  {
    icon: Heart,
    title: "ارزش‌های کاری",
    desc: "صداقت در مشاوره، شفافیت در قیمت‌گذاری، امانت‌داری در اطلاعات، تعهد به زمان‌بندی و احترام به اخلاق پژوهش در تمامی پروژه‌ها.",
  },
  {
    icon: Handshake,
    title: "قوانین همکاری",
    desc: "قرارداد شفاف با مراحل و زمان‌بندی مشخص، پرداخت مرحله‌ای پس از تأیید هر بخش، و ارتباط مستقیم با کارشناس اختصاصی پروژه.",
  },
];

const COMMITMENTS = [
  "بررسی همانندجویی تمامی پروژه‌ها پیش از تحویل و ارائه گزارش مشابهت‌یابی",
  "اصلاحات رایگان بر اساس نظرات استاد راهنما و داوران تا تأیید نهایی",
  "محرمانگی کامل اطلاعات شخصی و فایل‌های پروژه",
  "تحویل مرحله‌ای پروژه دقیقاً مطابق زمان‌بندی توافق‌شده",
  "استفاده از منابع علمی معتبر و به‌روز در تمامی پروژه‌ها",
  "بازگشت وجه در صورت عدم رضایت مطابق سیاست‌های اعلام‌شده",
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="درباره پژوهش‌یار آکادمیک"
        subtitle="بیش از یک دهه همراهی صادقانه با دانشجویان و پژوهشگران در مسیر موفقیت علمی"
      />

      <section className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">معرفی مجموعه</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            {SITE_NAME} با گردهم‌آوردن تیمی از فارغ‌التحصیلان دکتری دانشگاه‌های برتر کشور، از سال‌ها
            پیش فعالیت خود را در حوزه مشاوره و خدمات پژوهشی آغاز کرد. امروز این مجموعه با پوشش بیش
            از ۳۰ رشته دانشگاهی و انجام موفق بیش از ۲۵۰۰ پروژه، یکی از مراجع شناخته‌شده خدمات
            دانشگاهی در کشور است.
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            ما باور داریم که مشاوره پژوهشی حرفه‌ای باید علاوه بر تحویل یک فایل باکیفیت، دانش و
            توانمندی پژوهشگر را نیز ارتقا دهد؛ به همین دلیل در تمامی پروژه‌ها، توضیحات و آموزش‌های
            لازم برای دفاع موفق در اختیار دانشجو قرار می‌گیرد.
          </p>
        </div>
        <img
          src={aboutImg}
          alt="کتابخانه دانشگاهی و پژوهشگر در حال مطالعه"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-2xl shadow-card-soft"
        />
      </section>

      <section className="bg-secondary py-16">
        <div className="container-site grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
              <v.icon className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
              <h2 className="mb-3 text-lg font-bold">{v.title}</h2>
              <p className="text-sm leading-8 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold">تعهدات مجموعه</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
            این تعهدات بخشی از قرارداد رسمی ما با هر مشتری است
          </p>
        </div>
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {COMMITMENTS.map((c) => (
            <li key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-7">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
