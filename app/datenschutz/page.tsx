import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { DEMO_URL, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${company.name} für CEO Dashboard.`,
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
        <br />
        {company.name}
        <br />
        {company.street}, {company.zip} {company.city}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h2>2. Zweck der Verarbeitung</h2>
      <p>
        Wir betreiben diese Marketing-Website (ceo-dashboard.io), um über das Produkt{" "}
        {company.productName} zu informieren und Interessenten zur Live-Demo unter{" "}
        <a href={DEMO_URL}>{DEMO_URL}</a> weiterzuleiten. Auf der Demo-Plattform
        verarbeiten wir personenbezogene Daten zur Bereitstellung des CEO Dashboards,
        zur Authentifizierung von Nutzern, zur Verwaltung von Profil- und
        Onboarding-Daten sowie zur Verbesserung unseres Demo-Angebots.
      </p>

      <h2>3. Verarbeitete Daten</h2>
      <p>
        <strong>Marketing-Website:</strong>
      </p>
      <ul>
        <li>
          Technische Nutzungsdaten (IP-Adresse, Browser, Zugriffszeit) in Server- bzw.
          Hosting-Logs
        </li>
        <li>
          Cookie-Einwilligungsstatus (lokal im Browser gespeichert, siehe Cookie-Banner)
        </li>
      </ul>
      <p>
        <strong>Demo-Plattform (nach Weiterleitung):</strong>
      </p>
      <ul>
        <li>Registrierungs- und Login-Daten (E-Mail, Passwort-Hash, OAuth-Provider)</li>
        <li>Profildaten (Name, Position, Firma, Telefon)</li>
        <li>Modul-Präferenzen und Onboarding-Status</li>
        <li>Technische Nutzungsdaten (Session-Cookies, IP-Adresse, Browser)</li>
      </ul>

      <h2>4. Rechtsgrundlagen</h2>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung / vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. a DSGVO
        (Einwilligung, z.&nbsp;B. Cookie-Banner) sowie Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an sicherem Betrieb und Bereitstellung der Website).
      </p>

      <h2>5. Cookies</h2>
      <p>
        Diese Marketing-Website setzt nur technisch notwendige Cookies bzw. speichert
        Ihre Einwilligungsentscheidung lokal im Browser (localStorage). Es werden keine
        Tracking- oder Analyse-Cookies ohne Ihre ausdrückliche Einwilligung eingesetzt.
        Details zur Demo finden Sie auch nach der Anmeldung unter dem dortigen
        Datenschutzhinweis.
      </p>

      <h2>6. Auftragsverarbeiter</h2>
      <p>
        Hosting dieser Website kann über einen Cloud-Anbieter (z.&nbsp;B. Vercel)
        erfolgen. Zur Authentifizierung und Datenspeicherung der Demo nutzen wir
        Supabase (Supabase Inc.). Daten können in der EU verarbeitet werden, abhängig
        von der Projektkonfiguration.
      </p>

      <h2>7. Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden gelöscht, sobald der Zweck entfällt und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen. Der Cookie-Consent bleibt
        bis zur Löschung der lokalen Browserdaten gespeichert.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei
        einer Aufsichtsbehörde einreichen.
      </p>

      <h2>9. Kontakt Datenschutz</h2>
      <p>
        Für datenschutzrechtliche Anfragen wenden Sie sich an:{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <p>
        Siehe auch: <Link href="/impressum">Impressum</Link> ·{" "}
        <Link href="/agb">AGB</Link>
      </p>
    </LegalPage>
  );
}
