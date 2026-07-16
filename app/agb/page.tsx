import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "AGB",
  description: `Allgemeine Geschäftsbedingungen der ${company.name} für CEO Dashboard.`,
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <LegalPage title="AGB">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese AGB gelten für die Nutzung des CEO Dashboard Demo-Angebots der{" "}
        {company.name}. Mit der Registrierung akzeptieren Sie diese Bedingungen. Die
        Marketing-Website unter ceo-dashboard.io dient der Information und Weiterleitung
        zur Demo.
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <p>
        Das CEO Dashboard stellt eine webbasierte Übersicht über Unternehmenskennzahlen
        und Module bereit. Der Demo-Charakter kann zu Änderungen, Demo-Daten und
        eingeschränkter Verfügbarkeit führen.
      </p>

      <h2>3. Registrierung und Zugang</h2>
      <p>
        Für die Nutzung der Demo ist eine Registrierung mit bestätigter E-Mail-Adresse
        erforderlich. Sie sind verpflichtet, Zugangsdaten vertraulich zu behandeln und
        unverzüglich Mitteilung über missbräuchliche Nutzung zu machen.
      </p>

      <h2>4. Nutzungsrechte</h2>
      <p>
        Wir gewähren ein einfaches, nicht übertragbares Nutzungsrecht für die Dauer des
        Nutzungsverhältnisses. Eine Weitergabe von Zugängen an Dritte ist untersagt.
      </p>

      <h2>5. Haftung</h2>
      <p>
        Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher
        Vertragspflichten und begrenzt auf den vorhersehbaren Schaden. Die Haftung für
        Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt
        unberührt.
      </p>

      <h2>6. Kündigung</h2>
      <p>
        Beide Parteien können das Nutzungsverhältnis jederzeit ohne Einhaltung einer
        Frist beenden. Mit Löschung des Kontos endet der Zugang.
      </p>

      <h2>7. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht. Gerichtsstand ist München, sofern gesetzlich zulässig.
        Bei Fragen kontaktieren Sie uns unter{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <p>
        Siehe auch: <Link href="/impressum">Impressum</Link> ·{" "}
        <Link href="/datenschutz">Datenschutz</Link>
      </p>
    </LegalPage>
  );
}
