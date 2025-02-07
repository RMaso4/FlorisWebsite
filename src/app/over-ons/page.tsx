// src/app/over-ons/page.tsx
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Over Ons | Floris",
  description: "Floris is een daadkrachtige adviseur die met beide benen op de grond staat en meerwaarde biedt voor ondernemers en particulieren",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Over Floris</h1>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Onze Missie</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Floris wil een meerwaarde zijn voor de ondernemer en de particulier. 
              Door samen met de ondernemer te ondernemen en door actief te adviseren 
              over relevante zaken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">Onze Klanten</h3>
                <p>MKB + particulier</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">Ons Product</h3>
                <p>Waarde toevoegen + actieve begeleiding + advisering financieel economisch / juridisch en fiscaal</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">Onze Medewerkers</h3>
                <p>Vaktechnisch, ondernemend, met plezier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Onze Klanten</h2>
          <p className="text-lg mb-6">
            Klanten van Floris zijn MKB-ondernemers variërend in vakgebied van klussenbedrijf 
            tot glastuinbouw en van zorginstelling tot koerierbedrijf.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Onze Aanpak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Floris is een daadkrachtige adviseur die met beide benen op de grond staat. 
                Hij weet wat er speelt voor de ondernemer.
              </p>
              <p className="text-lg mb-4">
                Floris denkt mee en geeft adviezen waar je wat aan hebt, want Floris weet als 
                geen ander hoe de wereld van het geld in elkaar zit.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Onze Kernwaarden</h3>
              <ul className="space-y-3">
                {kernwaarden.map((waarde, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {waarde}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const clientTypes = [
  {
    title: "MKB Ondernemers",
    description: "Van kleine startups tot gevestigde bedrijven",
  },
  {
    title: "Agrarische Sector",
    description: "Specifieke expertise in glastuinbouw",
  },
  {
    title: "Zorginstellingen",
    description: "Complexe administratie en regelgeving",
  },
  {
    title: "Particulieren",
    description: "Persoonlijke belastingzaken en advies",
  },
];

const kernwaarden = [
  "Daadkrachtig",
  "Deskundig",
  "Betrokken",
  "Praktisch",
  "Betrouwbaar",
  "Persoonlijk",
];