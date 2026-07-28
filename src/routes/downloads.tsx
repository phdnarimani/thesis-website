import { createFileRoute, Link } from "@tanstack/react-router";
import { FileDown, FileText, Table2, ClipboardList, Database, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "دانلود قالب پروپوزال، پایان‌نامه و پرسشنامه | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "دانلود رایگان فایل‌های آموزشی، قالب پروپوزال و پایان‌نامه، قالب مقاله، فایل‌های SPSS، پرسشنامه‌های استاندارد و دیتاست پژوهشی.",
      },
      { property: "og:title", content: "دانلودهای پژوهشی | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "قالب پروپوزال، پایان‌نامه، مقاله، پرسشنامه و دیتاست رایگان.",
      },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const DOWNLOAD_GROUPS = [
  {
    icon: BookOpen,
    title: "فایل‌های آموزشی",
    items: ["جزوه روش تحقیق کاربردی", "راهنمای گام‌به‌گام نگارش فصل دوم", "چک‌لیست آمادگی جلسه دفاع"],
  },
  {
    icon: FileText,
    title: "قالب پروپوزال",
    items: ["فرم پروپوزال ارشد وزارت علوم", "فرم پروپوزال دانشگاه آزاد", "نمونه پروپوزال تکمیل‌شده"],
  },
  {
    icon: FileText,
    title: "قالب پایان‌نامه",
    items: ["قالب Word پایان‌نامه ارشد", "قالب رساله دکتری", "شیوه‌نامه رفرنس‌دهی APA"],
  },
  {
    icon: Table2,
    title: "قالب مقاله",
    items: ["تمپلیت مقاله ISI (Elsevier)", "قالب مقاله علمی پژوهشی", "قالب مقاله کنفرانسی"],
  },
  {
    icon: Database,
    title: "فایل‌های SPSS و دیتاست",
    items: ["فایل تمرینی SPSS با داده واقعی", "دیتاست نمونه داده پانل", "دیتاست سری زمانی اقتصادی"],
  },
  {
    icon: ClipboardList,
    title: "پرسشنامه‌های استاندارد",
    items: ["پرسشنامه رضایت شغلی مینه‌سوتا", "پرسشنامه سلامت عمومی GHQ", "پرسشنامه رفتار شهروندی سازمانی"],
  },
];

function DownloadsPage() {
  return (
    <>
      <PageHero
        title="دانلودهای پژوهشی"
        subtitle="مجموعه‌ای از قالب‌ها، پرسشنامه‌ها و فایل‌های آموزشی که مسیر پژوهش شما را هموارتر می‌کند"
      />
      <section className="container-site grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {DOWNLOAD_GROUPS.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <g.icon className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mb-4 text-lg font-bold">{g.title}</h2>
            <ul className="flex flex-col gap-3">
              {g.items.map((i) => (
                <li key={i} className="flex items-center justify-between gap-2 rounded-lg bg-secondary px-3 py-2.5 text-sm">
                  <span>{i}</span>
                  <FileDown className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="container-site pb-16">
        <div className="rounded-3xl bg-secondary p-8 text-center">
          <p className="leading-8 text-muted-foreground">
            برای دریافت هر یک از فایل‌ها، از طریق{" "}
            <Link to="/contact" className="font-bold text-primary hover:underline">
              صفحه تماس با ما
            </Link>{" "}
            درخواست خود را ثبت کنید تا فایل بلافاصله برای شما ارسال شود.
          </p>
        </div>
      </section>
    </>
  );
}
