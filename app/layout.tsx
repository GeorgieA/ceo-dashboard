import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL, company } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CEO Dashboard – Kennzahlen & KI für Führungsteams",
    template: "%s | CEO Dashboard",
  },
  description:
    "CEO Dashboard bündelt CRM, HR, Finanzen, Operations und Governance in einem Cockpit. Jetzt Live-Demo unter demo.ceo-dashboard.io starten.",
  keywords: [
    "CEO Dashboard",
    "Unternehmenskennzahlen",
    "KPI Dashboard",
    "CRM",
    "HR Analytics",
    "KI Assistent",
    "Finity In",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "CEO Dashboard",
    title: "CEO Dashboard – Kennzahlen & KI für Führungsteams",
    description:
      "Alle Module, KPIs und KI-Empfehlungen in einer Oberfläche. Funnel zur Live-Demo.",
    images: [
      {
        url: "/images/uebersicht.jpg",
        width: 1024,
        height: 762,
        alt: "CEO Dashboard Übersicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEO Dashboard",
    description:
      "Operatives Cockpit für CEOs – Demo unter demo.ceo-dashboard.io.",
    images: ["/images/uebersicht.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.zip,
        addressLocality: company.city,
        addressCountry: "DE",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: company.productName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description:
        "Webbasiertes CEO Dashboard mit Modulen für CRM, HR, Finanzen, Operations und KI-Empfehlungen.",
      offers: {
        "@type": "Offer",
        url: "https://demo.ceo-dashboard.io/",
        price: "0",
        priceCurrency: "EUR",
        description: "Live-Demo mit Registrierung",
      },
      publisher: {
        "@type": "Organization",
        name: company.name,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
