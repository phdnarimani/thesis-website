import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { NAV_LINKS, SITE_NAME, CONTACT } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label={SITE_NAME}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-base font-extrabold text-primary">{SITE_NAME}</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              خدمات تخصصی پایان‌نامه و پژوهش
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="منوی اصلی">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-foreground/80" }}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${CONTACT.phones[0]}`}
            className="flex items-center gap-1.5 text-sm font-bold text-primary"
            dir="ltr"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phones[0]}
          </a>
          <Link
            to="/order"
            className="rounded-xl bg-gradient-gold px-4 py-2 text-sm font-bold text-gold-foreground shadow-gold-glow transition-transform hover:scale-105"
          >
            ثبت سفارش
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden" aria-label="منوی موبایل">
          <div className="container-site flex flex-col gap-1 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-gold px-4 py-2.5 text-center text-sm font-bold text-gold-foreground"
            >
              ثبت سفارش
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
