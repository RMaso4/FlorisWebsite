// src/app/contact/page.tsx
import { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import GoogleMap from "@/app/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact | Floris",
  description: "Neem contact op met Floris voor al uw vragen over accountancy, belastingzaken en financieel advies",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bezoekadres</h2>
            <address className="not-italic text-gray-600">
              <p>Minderbroederssingel 10A</p>
              <p>6041 KJ ROERMOND</p>
            </address>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Postadres</h2>
            <address className="not-italic text-gray-600">
              <p>Postbus 1042</p>
              <p>6040 KA ROERMOND</p>
            </address>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact gegevens</h2>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Telefoon:</strong>{" "}
                <a href="tel:0475330773" className="text-blue-600 hover:underline">
                  0475-330773
                </a>
              </p>
              <p>
                <strong>Fax:</strong> 0475-350699
              </p>
              <p>
                <strong>E-mail algemeen:</strong>{" "}
                <a href="mailto:info@floris.ac" className="text-blue-600 hover:underline">
                  info@floris.ac
                </a>
              </p>
              <p>
                <strong>E-mail salarisadministratie:</strong>{" "}
                <a href="mailto:salarisadministratie@floris.ac" className="text-blue-600 hover:underline">
                  salarisadministratie@floris.ac
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ContactForm />
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}