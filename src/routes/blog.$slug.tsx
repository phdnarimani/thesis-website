import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { POSTS } from "@/data/posts";
import { SITE_NAME, SITE_URL } from "@/data/site";

function jalaliDateToIso(value: string): string | undefined {
  const parts = value.split("/").map(Number);
  if (parts.length !== 3 || parts.some((part) => !Number.isInteger(part))) return undefined;

  const [year, month, day] = parts;
  if (year < 1200 || year > 1600 || month < 1 || month > 12 || day < 1) return undefined;
  if (day > (month <= 6 ? 31 : 30)) return undefined;

  const jy = year + 1595;
  let days =
    -355668 +
    365 * jy +
    Math.floor(jy / 33) * 8 +
    Math.floor(((jy % 33) + 3) / 4) +
    day;
  days += month < 7 ? (month - 1) * 31 : (month - 7) * 30 + 186;

  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;
  if (days > 36524) {
    gy += 100 * Math.floor(--days / 36524);
    days %= 36524;
    if (days >= 365) days++;
  }
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let gregorianDay = days + 1;
  const leap = gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0);
  const monthDays = [0, 31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gregorianMonth = 1;
  while (gregorianMonth <= 12 && gregorianDay > monthDays[gregorianMonth]) {
    gregorianDay -= monthDays[gregorianMonth];
    gregorianMonth++;
  }

  if (gregorianMonth > 12) return undefined;
  return `${gy}-${String(gregorianMonth).padStart(2, "0")}-${String(gregorianDay).padStart(2, "0")}`;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "مطلب یافت نشد" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.post;
    const canonicalUrl = `${SITE_URL}/blog/${p.slug}`;
    return {
      meta: [
        { title: `${p.title} | ${SITE_NAME}` },
        { name: "description", content: p.excerpt },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:locale", content: "fa_IR" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: p.title },
        { name: "twitter:description", content: p.excerpt },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"Article", "@id":`${canonicalUrl}#article`, url:canonicalUrl, mainEntityOfPage:{"@type":"WebPage","@id":canonicalUrl}, headline:p.title, description:p.excerpt, datePublished:jalaliDateToIso(p.date), author:{"@type":"Organization",name:SITE_NAME}, publisher:{"@type":"Organization",name:SITE_NAME}, inLanguage:"fa-IR", articleSection:p.category }) },
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[ {"@type":"ListItem",position:1,name:"صفحه اصلی",item:SITE_URL}, {"@type":"ListItem",position:2,name:"وبلاگ",item:`${SITE_URL}/blog`}, {"@type":"ListItem",position:3,name:p.title,item:canonicalUrl} ] }) }
      ],
    };

  },
  notFoundComponent: PostNotFound,
  errorComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="text-2xl font-extrabold">مطلب مورد نظر یافت نشد</h1>
      <Link to="/blog" className="mt-4 inline-block font-bold text-primary hover:underline">
        بازگشت به وبلاگ ←
      </Link>
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: (typeof POSTS)[number] };

  return (
    <article className="container-site max-w-3xl py-14">
      <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
        {post.category}
      </span>
      <h1 className="text-2xl font-extrabold leading-[1.6] md:text-3xl md:leading-[1.6]">
        {post.title}
      </h1>
      <div className="mt-4 flex items-center gap-5 border-b border-border pb-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" aria-hidden="true" />
          زمان مطالعه: {post.readTime}
        </span>
      </div>
      <div className="mt-8">
        {post.content.map((para) => (
          <p key={para.slice(0, 30)} className="mb-6 leading-9 text-foreground/85">
            {para}
          </p>
        ))}
      </div>

      <nav aria-label="مقالات مرتبط" className="mt-10 rounded-2xl border border-border bg-secondary p-6">
        <h2 className="text-lg font-extrabold">مطالب مرتبط</h2>
        <div className="mt-4 grid gap-3">
          {POSTS.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => (
            <Link key={item.slug} to="/blog/$slug" params={{ slug: item.slug }} className="font-bold text-primary hover:underline">{item.title} ←</Link>
          ))}
        </div>
      </nav>
      <div className="mt-10 rounded-2xl bg-secondary p-6 text-center">
        <p className="font-bold">به کمک تخصصی نیاز دارید؟</p>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          کارشناسان ما آماده مشاوره رایگان درباره پایان‌نامه و مقاله شما هستند.
        </p>
        <Link
          to="/order"
          className="mt-4 inline-block rounded-xl bg-primary px-6 py-2.5 font-bold text-primary-foreground hover:bg-primary-glow"
        >
          ثبت سفارش
        </Link>
      </div>
    </article>
  );
}
