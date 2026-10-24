import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { serviceGroups } from "@/lib/agency";
import { siteConfig } from "@/lib/site-config";

const companyLinks = [
  ["Who We Help", "/who-we-help"],
  ["Our Work", "/portfolio"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const active = useRouterState({
    select: (state) => state.location.pathname.startsWith("/services"),
  });
  return (
    <details className="group relative">
      <summary
        aria-current={active ? "page" : undefined}
        className={`nav-link flex cursor-pointer list-none items-center gap-1 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${active ? "font-semibold text-deep-navy" : "text-muted-foreground"}`}
      >
        Services <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute left-0 top-full z-50 mt-4 grid w-[min(44rem,calc(100vw-2rem))] gap-6 border border-border bg-background p-6 shadow-xl md:grid-cols-3">
        {serviceGroups.map((group) => (
          <div key={group.title}>
            <h2 className="eyebrow">{group.title}</h2>
            <ul className="mt-3 grid gap-2">
              {group.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: service.slug }}
                    onClick={onNavigate}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${siteConfig.name} - ${siteConfig.tagline} - Home`}
    >
      {siteConfig.logoUrl ? (
        <img
          src={siteConfig.logoUrl}
          alt={`${siteConfig.name} - ${siteConfig.tagline}`}
          className="h-10 w-auto max-w-[220px] object-contain"
        />
      ) : (
        <span className="flex min-w-0 flex-col">
          <span
            className={`font-display font-bold text-deep-navy ${compact ? "text-lg" : "text-xl"}`}
          >
            {siteConfig.name}
          </span>
          <span className="truncate text-[10px] font-medium text-muted-foreground">
            {siteConfig.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const servicesActive = useRouterState({
    select: (state) => state.location.pathname.startsWith("/services"),
  });
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <Brand compact />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          <Link
            to="/"
            activeProps={{ className: "font-semibold text-deep-navy" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="nav-link text-sm font-medium"
          >
            Home
          </Link>
          <ServicesMenu />
          {companyLinks.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="nav-link text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 xl:block">
          <Button asChild variant="dark">
            <Link to="/contact">
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
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 sm:px-8 xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-3 text-lg font-semibold hover:bg-secondary"
            >
              Home
            </Link>
            <details className="group px-3 py-3">
              <summary
                aria-current={servicesActive ? "page" : undefined}
                className={`flex cursor-pointer list-none items-center justify-between text-lg font-semibold ${servicesActive ? "text-deep-navy" : ""}`}
              >
                Services{" "}
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="grid gap-4 pb-2 pt-4 sm:grid-cols-3">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="eyebrow">{group.title}</h2>
                    <ul className="mt-3 grid gap-2">
                      {group.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to="/services/$service"
                            params={{ service: service.slug }}
                            onClick={() => setOpen(false)}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
            {companyLinks.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-lg font-semibold hover:bg-secondary"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-between bg-primary px-4 py-3 font-semibold text-primary-foreground"
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
  const whatsapp = siteConfig.whatsapp.replace(/\D/g, "");
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
              {siteConfig.description}
            </p>
          </div>
          <FooterColumn title="Services">
            {serviceGroups
              .flatMap((group) => group.services.slice(0, group.title === "Design & Build" ? 3 : 1))
              .map((service) => (
                <Link
                  key={service.slug}
                  to="/services/$service"
                  params={{ service: service.slug }}
                  className="footer-link"
                >
                  {service.title}
                </Link>
              ))}
            <Link to="/services" className="footer-link">
              All services
            </Link>
          </FooterColumn>
          <FooterColumn title="Company">
            {companyLinks.slice(0, 3).map(([label, to]) => (
              <Link key={to} to={to} className="footer-link">
                {label}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Resources">
            <Link to="/blog" className="footer-link">
              Blog
            </Link>
            <Link to="/faq" className="footer-link">
              FAQs
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms
            </Link>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}
          </FooterColumn>
          <FooterColumn title="Contact">
            <Link to="/contact" className="footer-link">
              Get a Free Quote
            </Link>
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="footer-link">
                {siteConfig.email}
              </a>
            )}
            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`} className="footer-link">
                {siteConfig.phone}
              </a>
            )}
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                className="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            )}
            {siteConfig.address && <p className="text-sm text-ink-muted">{siteConfig.address}</p>}
            {siteConfig.businessHours && (
              <p className="text-sm text-ink-muted">{siteConfig.businessHours}</p>
            )}
          </FooterColumn>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid content-start gap-3 text-sm">
      <h2 className="mb-1 text-xs font-semibold uppercase text-ink-foreground">{title}</h2>
      {children}
    </div>
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
  const whatsapp = siteConfig.whatsapp.replace(/\D/g, "");
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:py-24">
        <div>
          <p className="eyebrow text-primary-foreground/75">Start with a conversation</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">
            Have an idea? Let&apos;s make it real.
          </h2>
          <p className="mt-5 max-w-xl text-primary-foreground/85">
            Tell us what you are planning. We will help you work out what to build first and what it
            will take.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light" size="lg">
            <Link to="/contact">
              Get a Free Quote <ArrowUpRight />
            </Link>
          </Button>
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-primary-foreground/50 px-4 py-2 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
