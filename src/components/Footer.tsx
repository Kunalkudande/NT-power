import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'Home' : location.pathname.substring(1);

  return (
    <footer className="bg-blue-50 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/BMS__1_-removebg-preview.png"
                alt="Company 1 Logo"
                className="h-8 mr-2"
              />
              <img
                src="/lovable-uploads/collab-removebg-preview.png"
                alt="Collaboration Icon"
                className="h-10 mx-2"
              />
              <img
                src="/lovable-uploads/images-removebg-preview.png"
                alt="Company 2 Logo"
                className="h-10 ml-2"
              />
            </div>
            <p className="text-gray-600 mb-4">
            NT-BMS (owned and operated by Naman Technologies BV) is an authorized reseller for Daly BMS products for the Netherlands.
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

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Active Balance BMS</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Standard BMS</a></li>
              <li><a href="/products" className="text-gray-600 hover:text-blue-600">Accessories</a></li>
              {/* <li><a href="#" className="text-gray-600 hover:text-blue-600">Customized Battery Packs</a></li> */}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link to="/about#partnership" className="text-gray-600 hover:text-blue-600">Partnership</Link></li>
              <li><Link to="/about#support" className="text-gray-600 hover:text-blue-600">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter / Page Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Current page: <span className="font-medium">{currentPath}</span>
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 NT-BMS. All rights reserved.
          </p>
          <div className="flex space-x-6">
          <a href="https://www.nt-one.com/refunds-and-returns" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
  Return Policy
</a>
<a href="https://www.nt-one.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">
  Privacy Policy
</a>

            {/* <a href="/terms-and-conditions" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
