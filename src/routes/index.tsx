import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  FileText,
  BarChart3,
  ClipboardList,
  Languages,
  PenTool,
  GraduationCap,
  Database,
  ShieldCheck,
  Clock,
  Users,
  Award,
  Phone,
  ArrowLeft,
} from "lucide-react";
import heroImg from "@/assets/hero-academic.jpg";
import analysisImg from "@/assets/analysis.jpg";
import thesisImg from "@/assets/thesis-stack.jpg";
import { SERVICES, FIELDS } from "@/data/services";
import { FAQS } from "@/data/faqs";
import { SITE_NAME, SITE_URL, CONTACT } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "پایان‌نامه نویسی و آموزش پایان‌نامه | پژوهش‌یار آکادمیک" },
      { name: "description", content: "آموزش گام‌به‌گام پایان‌نامه نویسی، انتخاب موضوع، پروپوزال، نگارش فصل‌های پایان‌نامه، تحلیل آماری و آمادگی دفاع برای دانشجویان ارشد و دکتری." },
      { property: "og:title", content: "پایان‌نامه نویسی و آموزش پایان‌نامه | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "راهنمای آموزش پایان‌نامه نویسی از انتخاب موضوع و پروپوزال تا نگارش فصل‌ها، تحلیل آماری و دفاع." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "پایان‌نامه نویسی و آموزش پایان‌نامه | پژوهش‌یار آکادمیک" },
      { name: "twitter:description", content: "آموزش گام‌به‌گام پایان‌نامه نویسی و خدمات تخصصی پژوهشی برای دانشجویان ارشد و دکتری." },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"ProfessionalService", "@id":`${SITE_URL}/#service`, name:SITE_NAME, url:SITE_URL, description:"آموزش و خدمات تخصصی پایان‌نامه، پروپوزال، مقاله و تحلیل آماری.", telephone:CONTACT.phones[0], areaServed:"IR", provider:{"@id":`${SITE_URL}/#organization`} }) }],
  }),
  component: Index,
});

const SERVICE_ICONS: Record<string, typeof BookOpen> = {
  thesis: BookOpen,
  article: FileText,
  proposal: ClipboardList,
  chapters: PenTool,
  analysis: BarChart3,
  questionnaire: ClipboardList,
  dataset: Database,
  translation: Languages,
  editing: PenTool,
  training: GraduationCap,
};

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "تضمین کیفیت",
    desc: "بررسی همانندجویی، اصلاحات رایگان تا تأیید نهایی و ضمانت بازگشت وجه",
  },
  {
    icon: Clock,
    title: "تحویل به‌موقع",
    desc: "زمان‌بندی مرحله‌ای شفاف و تحویل پروژه دقیقاً در موعد توافق‌شده",
  },
  {
    icon: Users,
    title: "پژوهشگران متخصص",
    desc: "تیمی از فارغ‌التحصیلان دکتری در بیش از ۳۰ رشته دانشگاهی",
  },
  {
    icon: Award,
    title: "محرمانگی کامل",
    desc: "حفظ کامل حریم خصوصی و اطلاعات پروژه شما در تمام مراحل",
  },
];

const STATS = [
  { value: "+۲۵۰۰", label: "پروژه موفق" },
  { value: "+۳۰", label: "رشته تحت پوشش" },
  { value: "+۱۰", label: "سال تجربه" },
  { value: "٪۹۸", label: "رضایت مشتریان" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-hero-foreground">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-hero-foreground/10 px-4 py-1.5 text-sm font-medium text-gold">
              مرکز تخصصی خدمات پژوهشی و دانشگاهی
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.4] md:text-5xl md:leading-[1.35]">
              پایان‌نامه نویسی و آموزش پایان‌نامه از <span className="text-gold">صفر تا دفاع</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-hero-foreground/85">
              اگر می‌پرسید برای نوشتن پایان‌نامه از کجا شروع کنیم، مسیر پژوهش را از انتخاب موضوع و نگارش پروپوزال تا تدوین فصل‌ها، تحلیل آماری و آماده‌سازی دفاع به‌صورت مرحله‌به‌مرحله دنبال کنید. خدمات تخصصی پایان‌نامه، مقاله و تحلیل داده نیز متناسب با نیاز پژوهش ارائه می‌شود.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/order"
                className="rounded-xl bg-gradient-gold px-7 py-3.5 text-base font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
              >
                سفارش پروژه
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border-2 border-hero-foreground/25 px-7 py-3 text-base font-bold text-hero-foreground transition-colors hover:border-gold hover:text-gold"
              >
                مشاوره رایگان
              </Link>
            </div>
            <a
              href={`tel:${CONTACT.phones[0]}`}
              className="mt-6 flex w-fit items-center gap-2 text-sm text-hero-foreground/80 hover:text-gold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              تماس مستقیم: <span dir="ltr" className="font-bold">{CONTACT.phones[0]}</span>
            </a>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="میز کار پژوهشی با کتاب‌ها، لپ‌تاپ و یادداشت‌های تحقیقاتی"
              width={1920}
              height={960}
              className="rounded-2xl shadow-card-soft"
            />
            <div className="absolute -bottom-5 right-6 rounded-xl bg-card px-5 py-3 text-sm font-bold text-primary shadow-card-soft">
              +۲۵۰۰ پروژه موفق دانشگاهی
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="container-site -mt-2 grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((t) => (
          <div key={t.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <t.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mb-2 text-base font-bold">{t.title}</h2>
            <p className="text-sm leading-7 text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="bg-secondary py-16">
        <div className="container-site">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">خدمات پژوهشی ما</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
              مجموعه کاملی از خدمات دانشگاهی برای دانشجویان کارشناسی، ارشد و دکتری در تمامی رشته‌ها
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] ?? BookOpen;
              return (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <Icon className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
                  <h3 className="mb-2 text-lg font-bold group-hover:text-primary">{s.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{s.intro.slice(0, 110)}…</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-bold text-primary">
                    مشاهده جزئیات
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-hero py-14 text-hero-foreground">
        <div className="container-site grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-gold">{s.value}</p>
              <p className="mt-2 text-sm text-hero-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analysis highlight */}
      <section className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
        <img
          src={analysisImg}
          alt="تحلیل آماری داده‌های پژوهشی با نمودارها روی لپ‌تاپ"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-2xl shadow-card-soft"
        />
        <div>
          <h2 className="text-2xl font-extrabold md:text-3xl">
            تحلیل آماری فصل چهارم با تمام نرم‌افزارها
          </h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            تحلیلگران ما به SPSS، SmartPLS، AMOS، LISREL، EViews، Stata، R، Python، MATLAB و
            نرم‌افزارهای کیفی MAXQDA و NVivo مسلط هستند. خروجی تحلیل همراه با تفسیر فارسی روان و
            آماده ارائه در جلسه دفاع تحویل داده می‌شود.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium sm:grid-cols-3">
            {["SPSS", "SmartPLS", "AMOS", "EViews", "Python", "R"].map((sw) => (
              <li key={sw} className="rounded-lg bg-accent px-3 py-2 text-center text-accent-foreground" dir="ltr">
                {sw}
              </li>
            ))}
          </ul>
          <Link
            to="/services/$slug"
            params={{ slug: "analysis" }}
            className="mt-7 inline-block rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            جزئیات خدمات تحلیل آماری
          </Link>
        </div>
      </section>

      {/* Fields */}
      <section className="bg-secondary py-16">
        <div className="container-site">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">رشته‌های تحت پوشش</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-8 text-muted-foreground">
              بیش از ۳۰ رشته دانشگاهی در گروه‌های علوم انسانی، فنی‌مهندسی، پزشکی و هنر
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {FIELDS.slice(0, 18).map((f) => (
              <span key={f} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {f}
              </span>
            ))}
            <Link
              to="/fields"
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary-glow"
            >
              مشاهده همه رشته‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* Samples CTA */}
      <section className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl font-extrabold md:text-3xl">نمونه کارهای واقعی، اعتماد واقعی</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            پیش از ثبت سفارش می‌توانید نمونه پایان‌نامه، مقاله، پروپوزال و تحلیل آماری انجام‌شده
            توسط تیم ما را بررسی کنید تا با سطح کیفیت خدمات آشنا شوید.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/samples"
              className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              مشاهده نمونه کارها
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border-2 border-primary px-6 py-2.5 font-bold text-primary transition-colors hover:bg-accent"
            >
              تعرفه خدمات
            </Link>
          </div>
        </div>
        <img
          src={thesisImg}
          alt="نسخه‌های صحافی‌شده پایان‌نامه روی میز کار دانشگاهی"
          width={1200}
          height={900}
          loading="lazy"
          className="order-1 rounded-2xl shadow-card-soft lg:order-2"
        />
      </section>

      {/* FAQ preview */}
      <section className="bg-secondary py-16">
        <div className="container-site max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-extrabold md:text-3xl">سوالات متداول</h2>
          <div className="flex flex-col gap-4">
            {FAQS.slice(0, 4).map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none text-base font-bold marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-8 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="font-bold text-primary hover:underline">
              مشاهده همه سوالات متداول ←
            </Link>
          </div>
        </div>
      </section>

      {/* Thesis learning hub */}
      <section className="bg-secondary py-16">
        <div className="container-site">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">آموزش پایان‌نامه نویسی؛ از انتخاب موضوع تا دفاع</h2>
            <p className="mx-auto mt-3 max-w-3xl leading-8 text-muted-foreground">اگر تازه می‌خواهید پایان‌نامه را شروع کنید، راهنماهای آموزشی ما مراحل انتخاب موضوع، پروپوزال، روش تحقیق، فصل چهارم، تحلیل آماری و دفاع را توضیح می‌دهند.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Link to="/blog/thesis-writing-guide" className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"><h3 className="text-lg font-bold">راهنمای جامع پایان‌نامه نویسی</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">مراحل نوشتن پایان‌نامه از انتخاب موضوع تا پروپوزال، فصل‌ها و جلسه دفاع.</p><span className="mt-4 inline-block font-bold text-primary">مطالعه راهنما ←</span></Link>
            <Link to="/blog/research-methodology-basics" className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"><h3 className="text-lg font-bold">روش تحقیق پایان‌نامه</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">انتخاب روش کمی، کیفی یا آمیخته و نکات مهم طراحی پژوهش.</p><span className="mt-4 inline-block font-bold text-primary">مطالعه مقاله ←</span></Link>
            <Link to="/blog/spss-vs-smartpls" className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:border-primary/40"><h3 className="text-lg font-bold">تحلیل آماری پایان‌نامه</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">راهنمای انتخاب SPSS، SmartPLS و روش مناسب برای تحلیل فصل چهارم.</p><span className="mt-4 inline-block font-bold text-primary">مطالعه مقاله ←</span></Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-site py-16">
        <div className="rounded-3xl bg-gradient-hero px-6 py-12 text-center text-hero-foreground">
          <h2 className="text-2xl font-extrabold md:text-3xl">پروژه پژوهشی خود را همین امروز شروع کنید</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-hero-foreground/85">
            مشاوره اولیه کاملاً رایگان است. فرم سفارش را تکمیل کنید تا کارشناسان ما در کمتر از چند
            ساعت با شما تماس بگیرند.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/order"
              className="rounded-xl bg-gradient-gold px-8 py-3.5 font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
            >
              ثبت سفارش آنلاین
            </Link>
            <a
              href={`tel:${CONTACT.phones[0]}`}
              className="rounded-xl border-2 border-hero-foreground/25 px-8 py-3 font-bold transition-colors hover:border-gold hover:text-gold"
            >
              تماس تلفنی مستقیم
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
