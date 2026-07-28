import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { POSTS } from "@/data/posts";

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
    return {
      meta: [
        { title: `${p.title} | پژوهش‌یار آکادمیک` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            author: { "@type": "Organization", name: "پژوهش‌یار آکادمیک" },
            inLanguage: "fa",
          }),
        },
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
