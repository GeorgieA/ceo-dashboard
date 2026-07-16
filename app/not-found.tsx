import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutDashboard } from "lucide-react";
import { DemoLink } from "@/components/DemoLink";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand-soft)_0%,_transparent_60%)]"
        aria-hidden
      />

      <div className="relative w-full max-w-lg text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand shadow-[var(--shadow-card)]">
          <LayoutDashboard className="h-7 w-7" aria-hidden />
        </div>

        <p className="mt-8 text-7xl font-bold tracking-tight text-brand sm:text-8xl">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Diese Seite gibt es nicht oder sie wurde verschoben. Zurück zur Startseite
          oder direkt in die Live-Demo.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-colors hover:border-brand/40 hover:bg-brand-soft/50"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Zur Startseite
          </Link>
          <DemoLink className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">
            Demo starten
            <ArrowRight className="h-4 w-4" aria-hidden />
          </DemoLink>
        </div>

        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted"
          aria-label="Schnelle Links"
        >
          <Link href="/#module" className="hover:text-brand">
            Module
          </Link>
          <Link href="/impressum" className="hover:text-brand">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-brand">
            Datenschutz
          </Link>
        </nav>
      </div>
    </section>
  );
}
