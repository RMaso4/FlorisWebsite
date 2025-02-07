// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Floris, aangenaam
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Floris is een daadkrachtige adviseur die met beide benen op de grond staat. 
              Hij weet wat er speelt voor de ondernemer.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="button-primary">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Onze Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link} className="text-blue-600 hover:text-blue-800">
                  Lees meer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Accountancy",
    description: "Samenstellen en beoordelen van jaarrekeningen",
    link: "/diensten#accountancy",
  },
  {
    title: "Belastingzaken",
    description: "Aangiften voor verschillende belastingsoorten",
    link: "/diensten#belastingzaken",
  },
  {
    title: "Administratie",
    description: "Complete administratieve dienstverlening",
    link: "/diensten#administratie",
  },
  {
    title: "Advisering",
    description: "Strategisch advies voor uw onderneming",
    link: "/diensten#advisering",
  },
];