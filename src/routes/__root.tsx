import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE_NAME, CONTACT } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">صفحه پیدا نشد</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          مشکلی در بارگذاری صفحه پیش آمد
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          لطفاً صفحه را دوباره بارگذاری کنید یا به صفحه اصلی بازگردید.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            تلاش مجدد
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} | مشاوره پایان‌نامه، مقاله و تحلیل آماری` },
      {
        name: "description",
        content:
          "مشاوره تخصصی پایان‌نامه ارشد و دکتری، نگارش مقاله ISI و Scopus، تحلیل آماری SPSS و SmartPLS با تضمین کیفیت و تحویل به‌موقع. مشاوره رایگان.",
      },
      { name: "author", content: SITE_NAME },
      { property: "og:title", content: `${SITE_NAME} | خدمات تخصصی پایان‌نامه و پژوهش` },
      {
        property: "og:description",
        content:
          "مشاوره تخصصی پایان‌نامه ارشد و دکتری، نگارش مقاله ISI و Scopus، تحلیل آماری SPSS و SmartPLS با تضمین کیفیت و تحویل به‌موقع. مشاوره رایگان.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "fa_IR" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "مشاوره پایان‌نامه و انجام مقاله ISI | پژوهش‌یار آکادمیک" },
      { property: "og:title", content: "مشاوره پایان‌نامه و انجام مقاله ISI | پژوهش‌یار آکادمیک" },
      { name: "twitter:title", content: "مشاوره پایان‌نامه و انجام مقاله ISI | پژوهش‌یار آکادمیک" },
      { name: "twitter:description", content: "مشاوره تخصصی پایان‌نامه ارشد و دکتری، نگارش مقاله ISI و Scopus، تحلیل آماری SPSS و SmartPLS با تضمین کیفیت و تحویل به‌موقع. مشاوره رایگان." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15c89e97-4ee0-45ec-a3ee-8957919a7143/id-preview-a773664a--ce3a9779-d46c-4b1e-bd6f-f5efb6bdaba8.lovable.app-1783575109649.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15c89e97-4ee0-45ec-a3ee-8957919a7143/id-preview-a773664a--ce3a9779-d46c-4b1e-bd6f-f5efb6bdaba8.lovable.app-1783575109649.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          description: "مرکز تخصصی مشاوره پایان‌نامه، مقاله و تحلیل آماری",
          email: CONTACT.email,
          telephone: CONTACT.phones[0],
          areaServed: "IR",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
