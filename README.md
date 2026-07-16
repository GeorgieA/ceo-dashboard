# CEO Dashboard – Marketing Website

Landingpage und Funnel für [CEO Dashboard](https://ceo-dashboard.io). Alle CTAs führen zur Live-Demo unter [demo.ceo-dashboard.io](https://demo.ceo-dashboard.io/).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- lucide-react

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Seiten

| Route | Inhalt |
|-------|--------|
| `/` | Landingpage |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutz |
| `/agb` | AGB |

## Hinweise

- Domain/Canonical: `https://ceo-dashboard.io`
- Demo-URL: `https://demo.ceo-dashboard.io/` (in `lib/site.ts`)
- Cookie-Banner speichert die Auswahl in `localStorage`
