"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DEMO_URL, navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt="CEO Dashboard Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
            unoptimized
          />
          <span className="text-sm tracking-wide text-foreground uppercase sm:text-base">
            <span className="font-bold">CEO</span>{" "}
            <span className="font-normal">Dashboard</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DEMO_URL}
            className="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Demo starten
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-brand-soft hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={DEMO_URL}
              className="mt-1 rounded-xl bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Demo starten
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
