// src/app/diensten/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten | Floris",
  description: "Ontdek onze complete dienstverlening op het gebied van accountancy, belastingzaken, administratie en advisering",
};

const services = [
  {
    id: "accountancy",
    title: "Accountancy",
    items: [
      "Samenstellen van jaarrekeningen",
      "Beoordelen van jaarrekeningen",
      "Deponeerstukken Kamer van Koophandel",
      "Verklaring verzekerd belang",
    ],
  },
  {
    id: "belastingzaken",
    title: "Belastingzaken",
    items: [
      "Aangiften vennootschapsbelasting",
      "Aangiften inkomstenbelasting",
      "Aangiften dividendbelasting",
      "Aangiften schenkingsrecht",
    ],
  },
  {
    id: "administratie",
    title: "Administratieve dienstverlening",
    items: [
      "Voeren van administraties",
      "Verzorgen loon- en salarisadministratie",
      "Aangifte loonheffingen",
      "Aangifte omzetbelasting",
      "Aangifte intracommunautaire leveringen",
      "Online boekhouden",
    ],
  },
  {
    id: "advisering",
    title: "Advisering",
    items: [
      "Ondernemingsplan",
      "Financieringen",
      "Begrotingen",
      "Bedrijfsopvolging",
      "Start nieuwe onderneming",
      "Keuze rechtsvorm fiscaal",
      "Oprichting besloten vennootschap",
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Onze Diensten</h1>
      
      <div className="space-y-16">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="scroll-mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              {service.title}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 mb-8">
          Voor particulieren verzorgen wij de aangifte inkomstenbelasting.
        </p>
        <a
          href="/contact"
          className="button-primary inline-block"
        >
          Neem contact op voor meer informatie
        </a>
      </div>
    </div>
  );
}