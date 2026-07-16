import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BOOKING_URL, DEMO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Vereinbaren Sie ein Gespräch zum CEO Dashboard – Termin online buchen.",
  alternates: { canonical: "/termin" },
};

export default function TerminPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Zurück zur Startseite
      </Link>

      <div className="mt-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <Calendar className="h-6 w-6" aria-hidden />
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Termin vereinbaren
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Wählen Sie einen passenden Slot für ein Gespräch zum CEO Dashboard. Alternativ
          können Sie die{" "}
          <a href={DEMO_URL} className="font-medium text-brand hover:underline">
            Live-Demo
          </a>{" "}
          jederzeit selbst testen.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
        <iframe
          src={`${BOOKING_URL}?embed=true`}
          title="Termin für CEO Dashboard buchen"
          className="min-h-[720px] w-full border-0"
          loading="lazy"
        />
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Kalender lädt nicht?{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand hover:underline"
        >
          Termin direkt auf Cal.com öffnen
        </a>
      </p>
    </section>
  );
}
