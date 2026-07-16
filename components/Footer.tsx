import Image from "next/image";
import Link from "next/link";
import { DemoLink } from "@/components/DemoLink";
import { company } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              unoptimized
            />
            <span className="text-sm tracking-wide uppercase">
              <span className="font-bold">CEO</span>{" "}
              <span className="font-normal">Dashboard</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Das operative Cockpit für CEOs – Kennzahlen, Module und KI-Empfehlungen
            in einer Oberfläche.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Produkt</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/#vorteile" className="hover:text-brand">
                Vorteile
              </Link>
            </li>
            <li>
              <Link href="/#module" className="hover:text-brand">
                Module
              </Link>
            </li>
            <li>
              <DemoLink className="hover:text-brand">Live-Demo</DemoLink>
            </li>
            <li>
              <Link href="/termin" className="hover:text-brand">
                Termin vereinbaren
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Rechtliches</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/impressum" className="hover:text-brand">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-brand">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/agb" className="hover:text-brand">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
          </p>
          <DemoLink className="font-medium text-brand hover:text-brand-dark">
            Zur Demo →
          </DemoLink>
        </div>
      </div>
    </footer>
  );
}
