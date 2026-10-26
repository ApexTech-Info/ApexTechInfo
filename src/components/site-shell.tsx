import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { serviceGroups } from "@/lib/services";

const companyLinks = [
  ["Who We Help", "/who-we-help"],
  ["Our Work", "/portfolio"],
  ["About", "/about"],
  ["Blog", "/blog"],
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${brand.name} home`}
    >
      <img
        src="/favicon.svg"
        alt=""
        className="size-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
        width={40}
        height={40}
      />
      <span className="grid gap-0.5">
        <span
          className={`font-display text-xl font-bold leading-tight tracking-tight ${inverse ? "text-ink-foreground" : "text-foreground"}`}
        >
          <span>{brand.wordmark.prefix}</span>
          <span className={inverse ? "text-blue-300" : "text-primary"}>
            {brand.wordmark.accent}
          </span>
        </span>
        <span
          className={`hidden text-xs sm:block ${inverse ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          {brand.tagline}
        </span>
      </span>
    </Link>
  );
}

function ServiceLinks({ onClick }: { onClick?: () => void }) {
  return serviceGroups.map((group) => (
    <div key={group.name} className="grid content-start gap-1">
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {group.name}
      </p>
      {group.services.map((service) => (
        <Link
          key={service.slug}
          to="/services/$slug"
          params={{ slug: service.slug }}
          onClick={onClick}
          className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary"
        >
          {service.title}
        </Link>
      ))}
    </div>
  ));
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          <Link to="/" activeOptions={{ exact: true }} className="nav-link text-sm font-medium">
            Home
          </Link>
          <details className="group relative">
            <summary className="nav-link flex cursor-pointer list-none items-center gap-1 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
              Services <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute left-1/2 top-full z-50 mt-3 grid w-[38rem] -translate-x-1/2 gap-4 rounded-lg border border-border bg-background p-4 shadow-xl">
              <Link
                to="/services"
                className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary"
              >
                All services
              </Link>
              <div className="grid grid-cols-3 gap-3">
                <ServiceLinks />
              </div>
            </div>
          </details>
          {companyLinks.map(([label, to]) => (
            <Link key={to} to={to} className="nav-link text-sm font-medium">
              {label}
            </Link>
          ))}
          <Link to="/contact" search={{ package: "" }} className="nav-link text-sm font-medium">
            Contact
          </Link>
        </nav>
        <div className="hidden xl:block">
          <Button asChild>
            <Link to="/contact" search={{ package: "" }}>
              Get a Free Quote <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <Button
          className="xl:hidden"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary"
            >
              Home
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary [&::-webkit-details-marker]:hidden">
                Services{" "}
                <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="grid gap-4 py-3 pl-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary"
                >
                  All services
                </Link>
                <ServiceLinks onClick={() => setOpen(false)} />
              </div>
            </details>
            {companyLinks.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              search={{ package: "" }}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              search={{ package: "" }}
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-between rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get a Free Quote <ArrowUpRight />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer-background text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
              Websites, mobile apps and custom software, designed, built and supported by one
              dedicated team.
            </p>
            {brand.email && (
              <a
                className="mt-4 inline-block text-sm underline underline-offset-4"
                href={`mailto:${brand.email}`}
              >
                {brand.email}
              </a>
            )}
          </div>
          <div className="grid content-start gap-3 text-sm">
            <h2 className="font-semibold">Services</h2>
            {serviceGroups.map((group) => (
              <Link key={group.name} to="/services" className="text-ink-muted hover:text-white">
                {group.name}
              </Link>
            ))}
          </div>
          <div className="grid content-start gap-3 text-sm">
            <h2 className="font-semibold">Company</h2>
            {companyLinks.map(([label, to]) => (
              <Link key={to} to={to} className="text-ink-muted hover:text-white">
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              search={{ package: "" }}
              className="text-ink-muted hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="grid content-start gap-3 text-sm">
            <h2 className="font-semibold">Resources</h2>
            <Link to="/blog" className="text-ink-muted hover:text-white">
              Insights
            </Link>
            <Link to="/faq" className="text-ink-muted hover:text-white">
              FAQs
            </Link>
            <Link to="/privacy" className="text-ink-muted hover:text-white">
              Privacy information (draft)
            </Link>
            <Link to="/terms" className="text-ink-muted hover:text-white">
              Terms (draft)
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.tagline}
          </p>
          {brand.phone && <a href={`tel:${brand.phone}`}>{brand.phone}</a>}
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
      <p className="eyebrow animate-fade-in">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">
        {title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{text}</p>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:py-24">
        <div>
          <p className="eyebrow text-blue-300">{brand.name}</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">
            Have an idea? Let&apos;s make it real.
          </h2>
        </div>
        <Button asChild size="lg">
          <Link to="/contact" search={{ package: "" }}>
            Get a Free Quote <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
