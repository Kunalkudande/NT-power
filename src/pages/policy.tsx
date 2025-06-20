import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pt-24 max-w-4xl bg-white shadow-md rounded-lg">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1> </h1>
            <h1> </h1>
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Naman Technologies B.V., we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website, webshop, services, and communication channels.
            </p>
            <p className="mb-4">
              By using our website or engaging with our services, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. What Information We Collect</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">a) Personal Identification Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Company name</li>
                <li>Address (billing and shipping)</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Payment and transaction details (processed securely)</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">b) Technical Information</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Time zone setting</li>
                <li>Operating system and platform</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">c) Usage Data</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Pages visited</li>
                <li>Duration of page visits</li>
                <li>Website interaction and browsing behavior</li>
                <li>Referring website URLs</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">d) Communication Data</h3>
              <ul className="list-disc pl-6">
                <li>Emails, inquiries, or chats you send to us</li>
                <li>Customer service communications</li>
                <li>Newsletter subscriptions and marketing preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Collect Information</h2>
            <ul className="list-disc pl-6">
              <li>Direct interactions: when you fill out forms, place an order, request information, or contact us.</li>
              <li>Automated technologies: cookies, server logs, and analytics tools.</li>
              <li>Third parties: payment processors, analytics providers (like Google Analytics), and communication platforms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Purpose of Data Collection</h2>
            <ul className="list-disc pl-6">
              <li>To process your orders and deliver products/services</li>
              <li>To respond to inquiries and offer customer support</li>
              <li>To send service-related communications (order updates, account alerts)</li>
              <li>To personalize user experience and improve website performance</li>
              <li>To send marketing emails (only if you consented)</li>
              <li>To comply with legal obligations (e.g., invoicing, financial recordkeeping)</li>
              <li>To detect and prevent fraud and security breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Legal Basis for Processing (GDPR Compliance)</h2>
            <p className="mb-4">We process your personal data based on:</p>
            <ul className="list-disc pl-6">
              <li>Contractual Necessity: To perform the contract (e.g., fulfilling an order).</li>
              <li>Legitimate Interest: To operate, maintain, and improve our services.</li>
              <li>Consent: For marketing communications and cookies requiring user consent.</li>
              <li>Legal Obligation: For compliance with Dutch and EU laws.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Sharing and Disclosure</h2>
            <p className="mb-4">We only share your data with trusted third parties when necessary:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment service providers (for secure transactions)</li>
              <li>Shipping and logistics companies (for delivery)</li>
              <li>IT service providers (for website hosting, CRM, data storage)</li>
              <li>Legal, accounting, or consulting services if required</li>
              <li>Authorities or regulators if required by law</li>
            </ul>
            <p>We do not sell, rent, or trade your personal data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
            <p className="mb-4">If we transfer your data outside the European Economic Area (EEA), we ensure an adequate level of protection through:</p>
            <ul className="list-disc pl-6">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Binding Corporate Rules (BCRs)</li>
              <li>Adequacy decisions where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="mb-4">We retain personal data only for as long as necessary:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To fulfill the purposes we collected it for</li>
              <li>To comply with legal, accounting, or reporting obligations</li>
              <li>Typically, personal data related to transactions is kept for 7 years (Dutch tax law)</li>
            </ul>
            <p>After this period, your personal information will be securely deleted or anonymized.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
            <p className="mb-4">We take the security of your data seriously by implementing:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data</li>
              <li>Secure server hosting</li>
              <li>Regular software updates and security audits</li>
              <li>Restricted access to personal data within our organization</li>
            </ul>
            <p>However, please note that no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Your Rights (Under GDPR)</h2>
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6">
              <li>Right to Access: Obtain a copy of your personal data.</li>
              <li>Right to Rectification: Request correction of inaccurate or incomplete data.</li>
              <li>Right to Erasure: Request deletion of your data ("Right to be Forgotten") under certain conditions.</li>
              <li>Right to Restrict Processing: Request to limit how your data is processed.</li>
              <li>Right to Data Portability: Receive your data in a structured, machine-readable format.</li>
              <li>Right to Object: Object to the processing of your personal data for marketing or other legitimate interests.</li>
              <li>Right to Withdraw Consent: You may withdraw consent at any time where processing is based on consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Cookies</h2>
            <p className="mb-4">We use cookies to enhance your browsing experience:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Necessary cookies (for website functionality)</li>
              <li>Analytical cookies (to improve site performance)</li>
              <li>Marketing cookies (only with consent)</li>
            </ul>
            <p className="mb-4">You can manage your cookie preferences through your browser settings or our cookie consent banner.</p>
            <p>For more detailed information, see our Cookie Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Marketing Communications</h2>
            <p className="mb-4">If you have opted-in to receive marketing emails:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You can unsubscribe at any time via the unsubscribe link at the bottom of each email.</li>
              <li>Alternatively, you can contact us directly to be removed from marketing lists.</li>
            </ul>
            <p>We respect your choice and will act promptly on all requests.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Third-Party Links</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Our website may contain links to third-party websites or services.</li>
              <li>This Privacy Policy does not apply to those third parties.</li>
              <li>We are not responsible for their privacy practices, and we encourage you to review their privacy policies.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to this Privacy Policy</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements.</li>
              <li>We encourage you to review this page periodically.</li>
              <li>Significant changes will be communicated to you directly where possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at{" "}
              <a href="mailto:Info@nt-one.com" className="text-blue-600 hover:underline">
              Info@nt-one.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;