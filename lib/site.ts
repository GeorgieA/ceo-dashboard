export const SITE_URL = "https://ceo-dashboard.io";
export const DEMO_URL = "https://demo.ceo-dashboard.io/";
export const BOOKING_URL = "https://cal.com/finity-in-t2b6cj/ceo-dashboard";

export const company = {
  name: "Finity In UG (haftungsbeschränkt)",
  street: "Astrid-Lindgren-Straße 121",
  zip: "81829",
  city: "München",
  country: "Deutschland",
  phone: "+49 89 90 422 62 90",
  email: "info@finity-in.com",
  productName: "CEO Dashboard",
} as const;

export const navLinks = [
  { href: "/#vorteile", label: "Vorteile" },
  { href: "/#module", label: "Module" },
  { href: "/termin", label: "Termin buchen" },
  { href: DEMO_URL, label: "Demo", external: true },
] as const;

export const modules = [
  {
    id: "uebersicht",
    title: "Übersicht",
    description:
      "Alle wichtigen KPIs auf einen Blick – Trends, Ziele und Modul-Status in Echtzeit.",
    image: "/images/uebersicht.jpg",
    alt: "CEO Dashboard Übersicht mit KPI-Karten und Wochen-Trend",
  },
  {
    id: "crm",
    title: "CRM & Sales",
    description:
      "Pipeline, Win-Rate und Umsatzverlauf – Vertrieb steuerbar statt bauchgefühlbasiert.",
    image: "/images/crm-sales.jpg",
    alt: "CRM & Sales Modul mit Pipeline und Umsatzcharts",
  },
  {
    id: "auftraege",
    title: "Aufträge",
    description:
      "Auftragseingang, Auslastung und Zahlungstatus – Operations transparent im Blick.",
    image: "/images/auftraege.jpg",
    alt: "Aufträge Modul mit Charts und Fortschrittsanzeigen",
  },
  {
    id: "produkte",
    title: "Produkte",
    description:
      "SKU-Portfolio, Margen und Lifecycle – Produktleistung und Pipeline im Griff.",
    image: "/images/produkte.jpg",
    alt: "Produkte Modul mit Margen, Kategorien und Entwicklungspipeline",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Traffic, CAC, ROAS und Funnel – Kanäle und Kampagnen datenbasiert steuern.",
    image: "/images/marketing.jpg",
    alt: "Marketing Modul mit Funnel, ROAS und Kanal-Performance",
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    description:
      "Umsatz, EBITDA, Liquidität und Assets – Finanzen und Cashflow klar sichtbar.",
    image: "/images/finance.jpg",
    alt: "Finance & Accounting Modul mit Umsatz-KPIs und Liquiditätsvorschau",
  },
  {
    id: "erp",
    title: "ERP / Operations",
    description:
      "Auslastung, Lieferzeiten und Engpässe – Produktion und Lieferkette unter Kontrolle.",
    image: "/images/erp.jpg",
    alt: "ERP Operations Modul mit Maschinenauslastung und Engpass-Warnungen",
  },
  {
    id: "einkauf",
    title: "Einkauf",
    description:
      "Lieferanten, Einsparungen und Bestellvolumen – Beschaffung messbar optimieren.",
    image: "/images/einkauf.jpg",
    alt: "Einkauf Modul mit Lieferantenperformance und Bestellvolumen",
  },
  {
    id: "legal",
    title: "Legal & Verträge",
    description:
      "Vertragswerte, Fristen und Risiken – Compliance und Vertragsstatus zentral.",
    image: "/images/legal.jpg",
    alt: "Legal & Verträge Modul mit Vertragswerten und Compliance-Kalender",
  },
  {
    id: "hr",
    title: "HR & Personal",
    description:
      "Headcount, Fluktuation und Onboarding – People-Daten für fundierte Entscheidungen.",
    image: "/images/hr.jpg",
    alt: "HR & Personal Modul mit Headcount und Auslastung",
  },
  {
    id: "unternehmen",
    title: "Unternehmen",
    description:
      "Governance, Compliance und Struktur – Gesellschafter, Risiken und Fristen zentral.",
    image: "/images/unternehmen.jpg",
    alt: "Unternehmen Modul mit Gesellschafterstruktur und Compliance",
  },
  {
    id: "ki",
    title: "KI-Assistent",
    description:
      "Priorisierte Empfehlungen aus Ihren Moduldaten – handeln statt nur beobachten.",
    image: "/images/ki-assistent.jpg",
    alt: "KI-Assistent mit priorisierten Handlungsempfehlungen",
  },
] as const;

export const benefits = [
  {
    title: "Alle Kennzahlen an einem Ort",
    description:
      "CRM, Finanzen, HR, Operations und Governance – ein Dashboard statt Dutzender Tools.",
  },
  {
    title: "Module für jeden Bereich",
    description:
      "Vom Vertrieb bis zur Nachfolge: strukturierte Views für CEOs und Führungsteams.",
  },
  {
    title: "KI-gestützte Empfehlungen",
    description:
      "Der Assistent priorisiert Maßnahmen aus Ihren Live-Daten – mit klarem Nutzen.",
  },
  {
    title: "Sofort in der Demo starten",
    description:
      "Ohne Setup: anmelden, Demo-Daten erkunden und das Produkt live erleben.",
  },
] as const;
