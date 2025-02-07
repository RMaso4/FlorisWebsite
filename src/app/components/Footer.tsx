// src/app/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p>Minderbroederssingel 10A</p>
              <p>6041 KJ ROERMOND</p>
              <p>T: <a href="tel:0475330773" className="hover:text-blue-300">0475-330773</a></p>
              <p>E: <a href="mailto:info@floris.ac" className="hover:text-blue-300">info@floris.ac</a></p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li><Link href="/diensten#accountancy" className="hover:text-blue-300">Accountancy</Link></li>
              <li><Link href="/diensten#belastingzaken" className="hover:text-blue-300">Belastingzaken</Link></li>
              <li><Link href="/diensten#administratie" className="hover:text-blue-300">Administratie</Link></li>
              <li><Link href="/diensten#advisering" className="hover:text-blue-300">Advisering</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Nieuwsbrief</h3>
            <p className="mb-4">Blijf op de hoogte van het laatste nieuws</p>
            <Link 
              href="/nieuwsbrief" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Aanmelden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;