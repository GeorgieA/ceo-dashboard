import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  Search,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { DemoLink } from "@/components/DemoLink";
import { ModuleGrid } from "@/components/ModuleGrid";
import { benefits } from "@/lib/site";

const impactPoints = [
  {
    icon: TrendingUp,
    title: "Umsatz gezielt steigern",
    description:
      "Sehen Sie in Echtzeit, welche Kanäle, Produkte und Deals wirklich ziehen – und steuern Sie Ressourcen dorthin, wo Wachstum entsteht.",
  },
  {
    icon: Wallet,
    title: "Gewinn maximieren",
    description:
      "Margen, Kosten und Liquidität greifen ineinander. So erkennen Sie früh, wo Profit versickert – und wo Sie nachjustieren müssen.",
  },
  {
    icon: Search,
    title: "Schwachstellen sofort erkennen",
    description:
      "Engpässe in Operations, Fluktuation in HR oder stockende Pipelines: Probleme bleiben nicht in Tabellen versteckt, sondern werden sichtbar.",
  },
  {
    icon: Clock3,
    title: "In einem Bruchteil der Zeit",
    description:
      "Statt Reports zusammensuchen: ein Cockpit, klare Prioritäten, fertige Empfehlungen. Entscheidungen in Minuten statt in Tagen.",
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-soft)_0%,_transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Für CEOs & Führungsteams
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            CEO Dashboard
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">
            Alle Unternehmenskennzahlen, Module und KI-Empfehlungen in einer klaren
            Oberfläche – der Funnel zur Live-Demo beginnt hier.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DemoLink className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark">
              Demo starten
              <ArrowRight className="h-4 w-4" aria-hidden />
            </DemoLink>
            <a
              href="#wirkung"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft/50"
            >
              Mehr erfahren
            </a>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden />
              CRM, HR, Finanzen, Operations & Governance
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden />
              Sofort testen unter demo.ceo-dashboard.io
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/15 to-amber-400/10 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <Image
              src="/images/uebersicht.jpg"
              alt="CEO Dashboard Übersicht mit KPIs und Charts"
              width={1024}
              height={762}
              className="h-auto w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 hidden w-[55%] overflow-hidden rounded-xl border border-border bg-surface shadow-lg sm:block lg:-right-4">
            <Image
              src="/images/crm-sales.jpg"
              alt="CRM & Sales Ausschnitt"
              width={769}
              height={1024}
              className="h-auto w-full"
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section
      id="wirkung"
      aria-labelledby="impact-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-wider text-brand uppercase">
            Mehr Wirkung, weniger Aufwand
          </p>
          <h2
            id="impact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Ein Dashboard, das Ihr Unternehmen spürbar effektiver macht
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Wenn alle Bereiche in einer Oberfläche zusammenlaufen, hören Sie auf zu raten.
            Sie sehen, wo Umsatz wächst, wo Gewinn liegen bleibt und wo Prozesse haken –
            und handeln, bevor aus Trends Probleme werden.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {impactPoints.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section
      id="vorteile"
      aria-labelledby="benefits-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-wider text-brand uppercase">
          Vorteile
        </p>
        <h2
          id="benefits-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-foreground"
        >
          Entscheiden mit dem kompletten Bild
        </h2>
        <p className="mt-3 text-muted">
          Statt isolierter Reports: ein Cockpit, das Module, Trends und nächste Schritte
          verbindet.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {benefits.map((item, i) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
              {i === 2 ? (
                <Sparkles className="h-5 w-5" aria-hidden />
              ) : (
                <LayoutDashboard className="h-5 w-5" aria-hidden />
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Modules() {
  return (
    <section
      id="module"
      aria-labelledby="modules-heading"
      className="border-y border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-brand uppercase">
            Module
          </p>
          <h2
            id="modules-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-foreground"
          >
            Alles, was CEOs steuern müssen
          </h2>
          <p className="mt-3 text-muted">
            Jedes Modul folgt dem gleichen klaren Design – KPIs, Charts und Tabellen,
            die Sie aus der Demo kennen.
          </p>
        </div>

        <ModuleGrid />

        <div className="mt-10 text-center">
          <DemoLink className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Module in der Demo öffnen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </DemoLink>
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <>
      <Hero />
      <Impact />
      <Benefits />
      <Modules />
      <CtaBanner />
    </>
  );
}
