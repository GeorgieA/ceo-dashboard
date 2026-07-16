import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${company.name} für CEO Dashboard.`,
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {company.name}
        <br />
        {company.street}
        <br />
        {company.zip} {company.city}
        <br />
        {company.country}
      </p>

      <h2>Vertreten durch</h2>
      <p>die Geschäftsführung</p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{" "}
        <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {company.name}
        <br />
        {company.street}
        <br />
        {company.zip} {company.city}
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
        (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
