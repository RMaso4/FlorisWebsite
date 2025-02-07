// src/app/nieuwsbrief/page.tsx
import { Metadata } from "next";
import NewsletterForm from "@/app/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Nieuwsbrief | Floris",
  description: "Meld u aan voor onze nieuwsbrief en blijf op de hoogte van het laatste nieuws",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Aanmelden Nieuwsbrief
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Blijf op de hoogte van het laatste nieuws en ontwikkelingen. 
          Kies hieronder voor welke nieuwsbrief u zich wilt aanmelden.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}