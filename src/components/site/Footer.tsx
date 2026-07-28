import { Link } from "@tanstack/react-router";
import { Phone, Mail, Send, MessageCircle, ShieldCheck, GraduationCap } from "lucide-react";
import { SITE_NAME, CONTACT } from "@/data/site";
import { SERVICES } from "@/data/services";

const FOOTER_LINKS = [
  { to: "/about", label: "درباره ما" },
  { to: "/services", label: "خدمات" },
  { to: "/blog", label: "وبلاگ" },
  { to: "/pricing", label: "تعرفه‌ها" },
  { to: "/order", label: "ثبت سفارش" },
  { to: "/contact", label: "تماس با ما" },
  { to: "/terms", label: "قوانین و مقررات" },
  { to: "/faq", label: "سوالات متداول" },
  { to: "/careers", label: "همکاری با ما" },
  { to: "/testimonials", label: "نظرات مشتریان" },
  { to: "/tracking", label: "پیگیری سفارش" },
  { to: "/downloads", label: "دانلودها" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-hero text-hero-foreground">
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-gold" aria-hidden="true" />
            <span className="text-lg font-extrabold">{SITE_NAME}</span>
          </div>
          <p className="text-sm leading-7 text-hero-foreground/80">
            مرکز تخصصی مشاوره پایان‌نامه، نگارش مقاله، تحلیل آماری و خدمات پژوهشی با بیش از یک دهه
            تجربه در همراهی دانشجویان مقاطع کارشناسی تا دکتری.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-hero-foreground/10 p-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            ضمانت کیفیت، محرمانگی کامل اطلاعات و پشتیبانی تا تأیید نهایی
          </div>
        </div>

        <nav aria-label="دسترسی سریع">
          <h2 className="mb-4 text-sm font-bold text-gold">دسترسی سریع</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-hero-foreground/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="خدمات">
          <h2 className="mb-4 text-sm font-bold text-gold">خدمات پژوهشی</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-hero-foreground/80 transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold text-gold">راه‌های ارتباطی</h2>
          <ul className="flex flex-col gap-3 text-sm text-hero-foreground/85">
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  <span dir="ltr">{p}</span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Send className="h-4 w-4 text-gold" aria-hidden="true" />
              تلگرام: <span dir="ltr">{CONTACT.telegram[0]}</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              واتساپ / ایتا / بله: <span dir="ltr">{CONTACT.whatsapp}</span>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                <span dir="ltr">{CONTACT.email}</span>
              </a>
            </li>
          </ul>
          <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-lg border border-hero-foreground/20 bg-hero-foreground/5 text-[10px] text-hero-foreground/60">
            نماد اعتماد
          </div>
        </div>
      </div>
      <div className="border-t border-hero-foreground/10 py-4">
        <p className="container-site text-center text-xs text-hero-foreground/60">
          © {new Date().getFullYear()} {SITE_NAME} — کلیه حقوق مادی و معنوی این وب‌سایت محفوظ است.
        </p>
      </div>
    </footer>
  );
}
