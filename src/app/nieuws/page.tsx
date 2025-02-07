// src/app/nieuws/page.tsx
import { Metadata } from "next";
import NewsSection from "@/app/components/NewsSection";

export const metadata: Metadata = {
  title: "Nieuws | Floris",
  description: "Blijf op de hoogte van het laatste nieuws en ontwikkelingen in de financiële wereld",
};

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Nieuws & Updates</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <NewsSection />
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Nieuwsbrief</h2>
            <p className="text-gray-600 mb-4">
              Blijf op de hoogte van het laatste nieuws en belangrijke updates.
            </p>
            <a 
              href="/nieuwsbrief"
              className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
            >
              Aanmelden voor nieuwsbrief
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Over Ons Nieuws</h2>
            <p className="text-gray-600">
              We brengen u het laatste nieuws over:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Financieel nieuws
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Belastingzaken
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Ondernemerschap
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}