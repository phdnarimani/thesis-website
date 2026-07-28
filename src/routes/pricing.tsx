import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "تعرفه خدمات؛ قیمت پایان‌نامه، مقاله و تحلیل آماری | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "تعرفه شفاف خدمات پژوهشی: قیمت پایان‌نامه ارشد و دکتری، قیمت مقاله ISI، قیمت تحلیل آماری SPSS و SmartPLS، ترجمه و ویراستاری.",
      },
      { property: "og:title", content: "تعرفه خدمات | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "قیمت‌گذاری شفاف خدمات پایان‌نامه، مقاله و تحلیل آماری.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PRICE_GROUPS = [
  {
    title: "قیمت پایان‌نامه",
    rows: [
      ["پروپوزال ارشد", "از ۲ میلیون تومان", "۷ تا ۱۰ روز"],
      ["پایان‌نامه کارشناسی", "از ۳ میلیون تومان", "۲۰ تا ۳۰ روز"],
      ["پایان‌نامه ارشد (کامل)", "از ۸ میلیون تومان", "۴۵ تا ۶۰ روز"],
      ["رساله دکتری", "توافقی (بر اساس موضوع)", "۳ تا ۶ ماه"],
    ],
  },
  {
    title: "قیمت مقاله",
    rows: [
      ["مقاله کنفرانسی", "از ۲/۵ میلیون تومان", "۱۰ تا ۱۵ روز"],
      ["مقاله علمی پژوهشی", "از ۴ میلیون تومان", "۱۵ تا ۲۵ روز"],
      ["مقاله Scopus", "از ۷ میلیون تومان", "۲۰ تا ۳۰ روز"],
      ["مقاله ISI (JCR)", "از ۱۲ میلیون تومان", "۳۰ تا ۴۵ روز"],
    ],
  },
  {
    title: "قیمت تحلیل آماری",
    rows: [
      ["تحلیل SPSS", "از ۱/۵ میلیون تومان", "۵ تا ۷ روز"],
      ["تحلیل SmartPLS / AMOS", "از ۲/۵ میلیون تومان", "۷ تا ۱۰ روز"],
      ["تحلیل EViews / Stata", "از ۳ میلیون تومان", "۷ تا ۱۲ روز"],
      ["تحلیل کیفی (MAXQDA / NVivo)", "از ۳ میلیون تومان", "۱۰ تا ۱۵ روز"],
    ],
  },
  {
    title: "قیمت ترجمه و ویراستاری",
    rows: [
      ["ترجمه تخصصی (هر صفحه)", "از ۹۰ هزار تومان", "بسته به حجم"],
      ["ویرایش نیتیو مقاله", "از ۳ میلیون تومان", "۵ تا ۷ روز"],
      ["ویراستاری فارسی (هر صفحه)", "از ۳۰ هزار تومان", "بسته به حجم"],
      ["فرمت‌بندی دانشگاهی", "از ۸۰۰ هزار تومان", "۲ تا ۴ روز"],
    ],
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        title="تعرفه خدمات"
        subtitle="قیمت‌گذاری شفاف و مرحله‌ای؛ هزینه دقیق هر پروژه پس از بررسی کارشناسی و بر اساس حجم و پیچیدگی اعلام می‌شود"
      />
      <section className="container-site grid gap-8 py-16 lg:grid-cols-2">
        {PRICE_GROUPS.map((g) => (
          <div key={g.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft">
            <h2 className="bg-gradient-hero px-6 py-4 text-lg font-bold text-hero-foreground">{g.title}</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary text-right text-muted-foreground">
                  <th className="px-5 py-3 font-medium">خدمت</th>
                  <th className="px-5 py-3 font-medium">قیمت پایه</th>
                  <th className="px-5 py-3 font-medium">زمان تحویل</th>
                </tr>
              </thead>
              <tbody>
                {g.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-0">
                    <td className="px-5 py-3.5 font-bold">{r[0]}</td>
                    <td className="px-5 py-3.5 text-primary">{r[1]}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
      <section className="container-site pb-16">
        <div className="rounded-3xl bg-secondary p-8 text-center">
          <h2 className="text-xl font-extrabold">استعلام قیمت دقیق پروژه شما</h2>
          <p className="mx-auto mt-3 max-w-xl leading-8 text-muted-foreground">
            قیمت نهایی به رشته، موضوع، حجم و زمان تحویل بستگی دارد. سفارش خود را ثبت کنید تا
            پیش‌فاکتور دقیق و رایگان دریافت کنید.
          </p>
          <Link
            to="/order"
            className="mt-5 inline-block rounded-xl bg-primary px-7 py-3 font-bold text-primary-foreground hover:bg-primary-glow"
          >
            دریافت پیش‌فاکتور رایگان
          </Link>
        </div>
      </section>
    </>
  );
}
