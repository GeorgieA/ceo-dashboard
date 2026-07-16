import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-brand-soft via-white to-white p-8 shadow-[var(--shadow-card)] sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
        <div className="absolute top-0 left-0 h-full w-1.5 bg-brand" aria-hidden />
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-wider text-brand uppercase">
            Persönliches Gespräch
          </p>
          <h2
            id="cta-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Eigenes CEO Dashboard für Ihr Unternehmen?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Vereinbaren Sie einen Termin – wir zeigen Ihnen das Dashboard und besprechen,
            wie es zu Ihrem Unternehmen passt.
          </p>
        </div>
        <Link
          href="/termin"
          className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark md:mt-0"
        >
          Termin vereinbaren
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
