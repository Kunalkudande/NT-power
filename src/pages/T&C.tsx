import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pt-24 max-w-4xl bg-white shadow-md rounded-lg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">I. General</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Access to this website is subject to these "Terms and Conditions" (hereinafter referred to as "the Terms"). Please read these Terms carefully before using this website. By using this website, you declare that you have read and accepted the Terms. If you do not accept one or more of the Terms, you should not use this website.
              </li>
              <li>
                This website is operated by NT-One, a private limited liability company located in the Netherlands (hereinafter referred to as "Naman Technologies").
              </li>
              {/* <li>
                "Content" of this website includes, but is not limited to: text, graphics, audio and underlying source/object code (such as, but not limited to, HTML code or JavaScript code) of this website and any part thereof.
              </li> */}
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">II. Permitted Uses</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                The user's behavior must align with what is expected of a responsible and careful website user. Users may not use the website or its Content for acts contrary to law or morality, including but not limited to:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Infringing on intellectual property rights</li>
                  <li>Making offensive or misleading statements</li>
                  <li>Distributing prohibited material</li>
                  <li>Violating applicable laws</li>
                  <li>Circumventing website security</li>
                </ul>
              </li>
              <li>
                Users may use the Content for non-commercial or personal use only. Distribution, modification, reproduction, transmission, or commercial exploitation of the Content is prohibited.
              </li>
              <li>
                The Content may not be modified, copied, or reverse engineered.
              </li>
              <li>
                Any copy of the Content must contain Naman Technologies' copyright notice.
              </li>
              <li>
                Distribution or modification of graphics from this website is prohibited without express written permission.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">III. Intellectual Property Rights</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                All intellectual property rights relating to the website content belong exclusively to Naman Technologies. Product names, logos, trademarks, or the Naman Technologies name designated with ® or ™ are trademarks owned or licensed by Naman Technologies.
              </li>
              <li>
                The use or misuse of such trademarks or copyrighted materials is strictly prohibited except as noted above.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">IV. Liability and Indemnification</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                The Content is provided to the best of our knowledge and belief.
              </li>
              <li>
                Naman Technologies believes that links to third-party web pages are legal and consistent with usual Internet expectations. Upon written request, we will remove links to third-party websites.
              </li>
              <li>
                Naman Technologies is not liable for consequential damages related to or arising from the use of the website content or linked content.
              </li>
              <li>
                We do not warrant that the material is free of errors, defects, or viruses, nor do we guarantee such errors will be corrected.
              </li>
              <li>
                Users shall indemnify Naman Technologies against third-party claims for breach of these Terms or claims related to website use.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">V. Product Information</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                All BMS (Battery Management System) products and related accessories are described with the utmost accuracy. However, specifications, features, and appearances may vary slightly from the descriptions provided.
              </li>
              <li>
                Technical specifications and performance metrics of BMS products are provided for informational purposes and may be updated without prior notice.
              </li>
              <li>
                Installation and usage of BMS products must comply with provided documentation and safety guidelines.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VI. Warranty and Returns</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                BMS products come with a standard warranty against manufacturing defects. Specific warranty terms are provided with each product.
              </li>
              <li>
                Warranty claims must be submitted with proof of purchase and a detailed description of the issue.
              </li>
              <li>
                Returns are accepted within 14 days of delivery, subject to our return policy conditions.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">VII. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by Dutch law. All disputes between Naman Technologies and users will be submitted to the competent court in the Netherlands.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
