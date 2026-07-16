"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ceo-dashboard-cookie-consent";

type Consent = "all" | "necessary" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "all" || stored === "necessary") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function save(value: "all" | "necessary") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!ready || consent) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface p-4 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <h2 id="cookie-title" className="text-base font-semibold text-foreground">
            Cookie-Einstellungen
          </h2>
          <p id="cookie-desc" className="mt-1 text-sm leading-relaxed text-muted">
            Wir verwenden nur technisch notwendige Cookies für den Betrieb dieser Website.
            Details finden Sie in unserer{" "}
            <Link href="/datenschutz" className="font-medium text-brand hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => save("necessary")}
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
