import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const preventRightClick = (e) => {
    e.preventDefault(); // Disable right-click
  };

  return (
    <div
      className="min-h-screen bg-white text-foreground"
      onContextMenu={preventRightClick}
      style={{ userSelect: "none" }}
    >
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Industry Partners</h1>

          {/* First Row: NT Power Systems & Daly BMS Partnership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://www.ntpower.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src="lovable-uploads/NT Logo_Blauw3.png"
                alt="NT Power System"
                className="w-43 h-43 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-2">NT Power Systems</h2>
              <p className="text-base text-gray-700">Tailored E-Mobility solutions</p>
            </a>

            <a
              href="https://www.dalyelec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src="lovable-uploads/images.png"
                alt="Daly BMS Partnership"
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-2">🤝 Official Daly Partner</h2>
              <p className="text-base text-gray-700">
                NT-BMS (owned and operated by Naman Technologies BV) is an authorized reseller for Daly BMS products for the Netherlands.
              </p>
            </a>
          </div>

          {/* Second Row: Hemank Auto Parts & Northway Motors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://hemankautoparts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src="lovable-uploads/HAK-Logo.png"
                alt="Hemank Auto Parts"
                className="w-41 h-41 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Hemank Auto Parts</h2>
              <p className="text-base text-gray-700">
                Cost-effective production services for the EV ecosystem with reliable and precision manufacturing.
              </p>
            </a>

            <a
              href="https://www.northwaymotors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer"
            >
              <img
                src="lovable-uploads/Northway-EV-Store-Europe.png"
                alt="Northway Europe"
                className="w-43 h-43 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-800 mb-2">Northway EV Store</h2>
              <p className="text-base text-gray-700">
                A One-stop EV enthusiast store for offering innovative conversion kits and EV accessories.
              </p>
            </a>
          </div>

          {/* Certification */}
          <section className="mb-16 bg-blue-50 p-8 rounded-xl shadow-md text-center">
            <h2 className="text-3xl font-semibold text-green-900 mb-4">📄Certification</h2>
            <p className="text-lg mb-4">
              NT-BMS provides its customers in Europe the ease of buying genuine Daly products with an assured European partner presence.
            </p>
            <div className="flex flex-col items-center">
              <a
                href="lovable-uploads/05 Certificate of Distribution.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                View Certificate
              </a>
            </div>
          </section>

          {/* Address and Support */}
          <section className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-4">📍 Address</h2>
            <p className="mb-4">
              Jupiterweg 21, G13.<br />
               8938AD Leeuwarden,<br />
              Netherlands</p>

            <h2 className="text-2xl font-bold mb-4 mt-8">📞 Support</h2>
            <p className="mb-4">
              Have questions about our products or need technical support? Our team is here to help.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@epgroup.nl"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Email Us
              </a>
              <Link
                to="/products"
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                View Products
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
