import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "پیگیری سفارش و وضعیت پروژه | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "مشاهده وضعیت پروژه پژوهشی و ارسال پیام مستقیم به کارشناس اختصاصی؛ پیگیری سفارش پایان‌نامه، مقاله و تحلیل آماری.",
      },
      { property: "og:title", content: "پیگیری سفارش | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "پیگیری وضعیت پروژه و ارتباط با کارشناس." },
      { property: "og:url", content: "/tracking" },
    ],
    links: [{ rel: "canonical", href: "/tracking" }],
  }),
  component: TrackingPage,
});

function TrackingPage() {
  const [searched, setSearched] = useState(false);

  return (
    <>
      <PageHero
        title="پیگیری سفارش"
        subtitle="با کد پیگیری که هنگام ثبت سفارش دریافت کرده‌اید، وضعیت لحظه‌ای پروژه خود را مشاهده کنید"
      />
      <section className="container-site max-w-2xl py-14">
        <form
          className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-card-soft sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSearched(true);
          }}
        >
          <input
            required
            maxLength={20}
            dir="ltr"
            className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-right outline-none transition-colors focus:border-ring"
            placeholder="کد پیگیری سفارش (مثال: RP-1234)"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary-glow"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            مشاهده وضعیت
          </button>
        </form>

        {searched && (
          <div className="mt-6 rounded-2xl border border-border bg-secondary p-6 text-center text-sm leading-8 text-muted-foreground">
            برای دریافت وضعیت دقیق پروژه، لطفاً از طریق تلگرام یا واتساپ با کارشناس اختصاصی خود در
            ارتباط باشید یا با شماره‌های پشتیبانی تماس بگیرید.
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${CONTACT.phones[0]}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card-soft transition-colors hover:border-primary/40"
          >
            <Phone className="h-8 w-8 text-primary" aria-hidden="true" />
            <div>
              <p className="font-bold">تماس با پشتیبانی</p>
              <p className="mt-1 text-sm text-muted-foreground" dir="ltr">
                {CONTACT.phones[0]}
              </p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card-soft">
            <MessageSquare className="h-8 w-8 text-primary" aria-hidden="true" />
            <div>
              <p className="font-bold">پیام به کارشناس</p>
              <p className="mt-1 text-sm text-muted-foreground">
                تلگرام / واتساپ: <span dir="ltr">{CONTACT.whatsapp}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
