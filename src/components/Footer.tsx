import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'Startpagina' : location.pathname.substring(1);

  return (
    <footer className="bg-blue-50 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo en Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/BMS__1_-removebg-preview.png"
                alt="Bedrijfslogo 1"
                className="h-8 mr-2"
              />
              <img
                src="/lovable-uploads/collab-removebg-preview.png"
                alt="Samenwerking"
                className="h-10 mx-2"
              />
              <img
                src="/lovable-uploads/images-removebg-preview.png"
                alt="Bedrijfslogo 2"
                className="h-10 ml-2"
              />
            </div>
            <p className="text-gray-600 mb-4">
              NT-BMS (eigendom van en beheerd door Naman Technologies BV) is een geautoriseerde reseller van Daly BMS-producten voor Nederland.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                    {icon === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                    {icon === 'instagram' && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    )}
                    {icon === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Producten */}
          <div>
            <h3 className="text-lg font-bold mb-4">Producten</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Actieve Balans BMS</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Standaard BMS</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Accessoires</a></li>
            </ul>
          </div>

          {/* Bedrijf Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Startpagina</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">Over ons</Link></li>
            </ul>
          </div>

          {/* Nieuwsbrief / Pagina Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Blijf op de hoogte</h3>
            <p className="text-gray-600 mb-4">
              Huidige pagina: <span className="font-medium">{currentPath}</span>
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-mailadres"
                className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Onderin */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 NT-BMS. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.nt-one.com/refunds-and-returns" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
              Retourbeleid
            </a>
            <a href="https://www.nt-one.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
              Privacybeleid
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
