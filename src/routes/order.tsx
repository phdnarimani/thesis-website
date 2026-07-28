import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Upload, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES, FIELDS } from "@/data/services";
import { CONTACT } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";


export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "ثبت سفارش آنلاین پروژه پژوهشی | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "فرم سفارش آنلاین پایان‌نامه، مقاله و تحلیل آماری؛ انتخاب رشته و مقطع، بارگذاری فایل و دریافت پیش‌فاکتور رایگان در کمتر از چند ساعت.",
      },
      { property: "og:title", content: "ثبت سفارش آنلاین | پژوهش‌یار آکادمیک" },
      {
        property: "og:description",
        content: "سفارش پایان‌نامه، مقاله و تحلیل آماری با پیش‌فاکتور رایگان.",
      },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

const DEGREES = ["کارشناسی", "کارشناسی ارشد", "دکتری"];

function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  if (submitted) {
    return (
      <div className="container-site flex min-h-[50vh] items-center justify-center py-16">
        <div className="max-w-md rounded-3xl border border-border bg-card p-10 text-center shadow-card-soft">
          <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-primary" aria-hidden="true" />
          <h1 className="text-xl font-extrabold">سفارش شما ثبت شد</h1>
          <p className="mt-3 leading-8 text-muted-foreground">
            کارشناسان ما در کمتر از چند ساعت با شما تماس می‌گیرند. برای پیگیری فوری می‌توانید با
            شماره <span dir="ltr" className="font-bold text-primary">{CONTACT.phones[0]}</span> تماس
            بگیرید.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title="ثبت سفارش آنلاین"
        subtitle="فرم زیر را تکمیل کنید؛ کارشناس اختصاصی پروژه در کمتر از چند ساعت با شما تماس می‌گیرد و پیش‌فاکتور رایگان ارائه می‌شود"
      />
      <section className="container-site max-w-3xl py-14">
        <form
          className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-card-soft md:p-9"
          onSubmit={async (e) => {
            e.preventDefault();
            if (loading) return;
            setError(null);
            setLoading(true);
            const fd = new FormData(e.currentTarget);
            const { error: err } = await supabase.from("orders").insert({
              full_name: String(fd.get("full_name") || ""),
              phone: String(fd.get("phone") || ""),
              service_slug: String(fd.get("service_slug") || ""),
              degree: String(fd.get("degree") || ""),
              field: String(fd.get("field") || ""),
              description: String(fd.get("description") || ""),
            });
            setLoading(false);
            if (err) {
              setError("ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.");
              return;
            }
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-bold">
              نام و نام خانوادگی *
              <input
                required
                name="full_name"
                maxLength={100}
                className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-ring"
                placeholder="مثال: علی محمدی"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold">
              شماره تماس *
              <input
                required
                name="phone"
                type="tel"
                maxLength={15}
                dir="ltr"
                className="rounded-xl border border-input bg-background px-4 py-3 text-right font-normal outline-none transition-colors focus:border-ring"
                placeholder="09xxxxxxxxx"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-bold">
              نوع خدمت *
              <select
                required
                name="service_slug"
                className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-ring"
              >
                <option value="">انتخاب کنید…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold">
              مقطع تحصیلی *
              <select
                required
                name="degree"
                className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-ring"
              >
                <option value="">انتخاب کنید…</option>
                {DEGREES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-bold">
            رشته تحصیلی *
            <select
              required
              name="field"
              className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-ring"
            >
              <option value="">انتخاب کنید…</option>
              {FIELDS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
              <option value="other">سایر رشته‌ها</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-bold">
            توضیحات پروژه *
            <textarea
              required
              name="description"
              rows={5}
              maxLength={2000}
              className="resize-none rounded-xl border border-input bg-background px-4 py-3 font-normal leading-7 outline-none transition-colors focus:border-ring"
              placeholder="موضوع، مهلت تحویل و هر توضیحی که به بررسی دقیق‌تر پروژه کمک می‌کند…"
            />
          </label>

          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/50 px-4 py-7 text-sm text-muted-foreground transition-colors hover:border-primary/50">
            <Upload className="h-7 w-7 text-primary" aria-hidden="true" />
            بارگذاری فایل (پروپوزال، پرسشنامه، دیتا و…)
            <input type="file" className="hidden" multiple />
          </label>

          {error && (
            <p className="rounded-xl bg-destructive/10 px-4 py-3 text-center text-sm font-bold text-destructive">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-base font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            {loading ? "در حال ارسال…" : "ثبت سفارش و دریافت پیش‌فاکتور"}
          </button>
          <p className="text-center text-xs leading-6 text-muted-foreground">
            پرداخت پس از توافق نهایی و به‌صورت مرحله‌ای انجام می‌شود. اطلاعات شما کاملاً محرمانه
            می‌ماند.
          </p>
        </form>

      </section>
    </>
  );
}
