// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Startpagina", path: "/" },
  { name: "Producten", path: "/products" },
  { name: "Over ons", path: "/about" },
];

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-nav border-b border-gray-200/20 shadow-sm"
          : "bg-white shadow"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/BMS__1_-removebg-preview.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-primary text-white rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Menu openen"
                className="md:hidden p-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="py-6">
                <nav className="flex flex-col space-y-6 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link to="/cart" className="flex items-center space-x-2 text-gray-700">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Winkelwagen ({cartCount})</span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
