import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Send, MessageCircle, CheckCircle2, Upload } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با ما و مشاوره رایگان | پژوهش‌یار آکادمیک" },
      {
        name: "description",
        content:
          "مشاوره رایگان پایان‌نامه و مقاله؛ تماس تلفنی مستقیم، تلگرام، واتساپ، ایتا، بله و فرم تماس آنلاین. پاسخگویی سریع کارشناسان.",
      },
      { property: "og:title", content: "تماس با ما | پژوهش‌یار آکادمیک" },
      { property: "og:description", content: "مشاوره رایگان از طریق تلفن، تلگرام و واتساپ." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "تماس با پژوهش‌یار آکادمیک",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: Phone, label: "تماس تلفنی مستقیم", values: CONTACT.phones, href: (v: string) => `tel:${v}` },
  { icon: Send, label: "ارتباط در تلگرام", values: CONTACT.telegram },
  { icon: MessageCircle, label: "ارتباط در واتساپ", values: [CONTACT.whatsapp] },
  { icon: MessageCircle, label: "ارتباط در ایتا", values: [CONTACT.eitaa] },
  { icon: MessageCircle, label: "ارتباط در بله", values: [CONTACT.bale] },
  { icon: Mail, label: "ایمیل", values: [CONTACT.email], href: (v: string) => `mailto:${v}` },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  return (
    <>
      <PageHero
        title="تماس با ما"
        subtitle="مشاوره اولیه کاملاً رایگان است؛ از هر کانالی که راحت‌ترید با ما در ارتباط باشید"
      />
      <section className="container-site grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-extrabold">راه‌های ارتباطی</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-5 shadow-card-soft">
                <c.icon className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
                <p className="mb-2 text-sm font-bold">{c.label}</p>
                {c.values.map((v) =>
                  c.href ? (
                    <a
                      key={v}
                      href={c.href(v)}
                      dir="ltr"
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      {v}
                    </a>
                  ) : (
                    <p key={v} dir="ltr" className="text-sm font-medium text-muted-foreground">
                      {v}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-secondary p-5 text-sm leading-8 text-muted-foreground">
            ساعات پاسخگویی تلفنی: همه‌روزه از ۹ صبح تا ۹ شب — پیام‌های تلگرام و واتساپ در تمام
            ساعات شبانه‌روز دریافت و در اولین فرصت پاسخ داده می‌شود.
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-xl font-extrabold">فرم تماس</h2>
          {sent ? (
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-card-soft">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <p className="text-lg font-bold">پیام شما دریافت شد</p>
              <p className="mt-2 leading-8 text-muted-foreground">
                کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-card-soft"
              onSubmit={async (e) => {
                e.preventDefault();
                if (loading) return;
                setError(null);
                setLoading(true);
                const fd = new FormData(e.currentTarget);
                const { error: err } = await supabase.from("contact_messages").insert({
                  full_name: String(fd.get("full_name") || ""),
                  phone: String(fd.get("phone") || ""),
                  email: String(fd.get("email") || "") || null,
                  subject: String(fd.get("subject") || ""),
                  message: String(fd.get("message") || ""),
                });
                setLoading(false);
                if (err) {
                  setError("ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
                  return;
                }
                setSent(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="full_name"
                  maxLength={100}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  placeholder="نام *"
                />
                <input
                  required
                  name="phone"
                  type="tel"
                  maxLength={15}
                  dir="ltr"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-right text-sm outline-none transition-colors focus:border-ring"
                  placeholder="شماره تماس *"
                />
              </div>
              <input
                name="email"
                type="email"
                maxLength={255}
                dir="ltr"
                className="rounded-xl border border-input bg-background px-4 py-3 text-right text-sm outline-none transition-colors focus:border-ring"
                placeholder="ایمیل (اختیاری)"
              />
              <input
                required
                name="subject"
                maxLength={150}
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                placeholder="موضوع *"
              />
              <textarea
                required
                name="message"
                rows={5}
                maxLength={2000}
                className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm leading-7 outline-none transition-colors focus:border-ring"
                placeholder="متن پیام *"
              />
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-secondary/50 px-4 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/50">
                <Upload className="h-5 w-5 text-primary" aria-hidden="true" />
                ارسال فایل (اختیاری)
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
                className="rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "در حال ارسال…" : "ارسال پیام"}
              </button>
            </form>

          )}
        </div>
      </section>
    </>
  );
}
