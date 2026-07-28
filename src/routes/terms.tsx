import { createFileRoute } from "@tanstack/react-router";
import { FileCheck, Lock, ShieldCheck, RotateCcw } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "قوانین و مقررات؛ شرایط استفاده و ضمانت کیفیت | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "شرایط استفاده از خدمات، سیاست محرمانگی اطلاعات، ضمانت کیفیت و سیاست بازگشت وجه مجموعه پژوهش‌یار آکادمیک.",
      },
      { property: "og:title", content: "قوانین و مقررات | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "شرایط استفاده، محرمانگی و ضمانت کیفیت." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    icon: FileCheck,
    title: "شرایط استفاده",
    items: [
      "خدمات مجموعه صرفاً با هدف مشاوره، آموزش و ارتقای توان علمی دانشجویان ارائه می‌شود.",
      "پس از توافق بر سر جزئیات پروژه، زمان‌بندی و مبلغ، قرارداد کتبی میان طرفین منعقد می‌گردد.",
      "هرگونه تغییر در دامنه پروژه (موضوع، حجم، روش) پس از شروع کار، مستلزم توافق مجدد است.",
      "مسئولیت ارائه اطلاعات صحیح (فرمت دانشگاه، نظرات استاد و ددلاین‌ها) بر عهده سفارش‌دهنده است.",
    ],
  },
  {
    icon: Lock,
    title: "محرمانگی اطلاعات",
    items: [
      "تمامی اطلاعات شخصی، فایل‌ها و جزئیات پروژه نزد مجموعه محرمانه است.",
      "اطلاعات مشتریان تحت هیچ شرایطی در اختیار اشخاص ثالث قرار نمی‌گیرد.",
      "در صورت درخواست مشتری، فایل‌های پروژه پس از تحویل نهایی از سرورها حذف می‌شود.",
      "نمونه کارهای منتشرشده در سایت، بدون ذکر نام و با رضایت مشتریان است.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "ضمانت کیفیت",
    items: [
      "همه پروژه‌ها پیش از تحویل از نظر همانندجویی بررسی و گزارش مشابهت ارائه می‌شود.",
      "اصلاحات مرتبط با نظرات استاد راهنما و داوران تا تأیید نهایی رایگان است.",
      "پروژه‌ها توسط کارشناس ارشد کنترل کیفیت بازبینی و سپس تحویل می‌شوند.",
      "در صورت تأخیر غیرموجه از سمت مجموعه، بخشی از هزینه به‌عنوان جریمه کسر می‌گردد.",
    ],
  },
  {
    icon: RotateCcw,
    title: "سیاست بازگشت وجه",
    items: [
      "در صورت انصراف پیش از شروع کار، کل مبلغ پرداختی عودت داده می‌شود.",
      "در صورت انصراف در میانه پروژه، هزینه بخش‌های انجام‌شده کسر و مابقی عودت می‌گردد.",
      "اگر پروژه با استانداردهای توافق‌شده مطابقت نداشته باشد و اصلاح نیز ممکن نباشد، وجه مربوط به آن بخش بازگردانده می‌شود.",
      "فرآیند بازگشت وجه حداکثر ظرف ۷ روز کاری انجام می‌شود.",
    ],
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        title="قوانین و مقررات"
        subtitle="شفافیت، پایه اعتماد است؛ لطفاً پیش از ثبت سفارش این قوانین را مطالعه کنید"
      />
      <section className="container-site grid gap-6 py-16 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft">
            <s.icon className="mb-4 h-9 w-9 text-primary" aria-hidden="true" />
            <h2 className="mb-4 text-lg font-bold">{s.title}</h2>
            <ul className="flex flex-col gap-3">
              {s.items.map((i) => (
                <li key={i} className="border-r-2 border-primary/40 pr-3 text-sm leading-8 text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
