interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-hero py-14 text-hero-foreground">
      <div className="container-site text-center">
        <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-hero-foreground/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
