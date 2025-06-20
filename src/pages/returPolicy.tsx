import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pt-24 max-w-4xl bg-white shadow-md rounded-lg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Return & Refund Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Our refund and returns policy lasts 15 days from the date of delivery. If 15 days have passed since your purchase, 
              unfortunately, we cannot offer you a full refund or exchange under standard circumstances.
            </p>
            <p className="mb-4">
              To be eligible for a return, your item must be unused and in the same condition that you received it. 
              It must also be in the original packaging. Any damage, tampering, or misuse of the product will 
              disqualify it from being eligible for return or refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Gift cards</li>
              <li>Lease or rental amounts for completed months or billing cycles</li>
            </ul>
            <p className="mb-4">
              To process your return, a valid receipt or proof of purchase/lease/rental is mandatory.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Partial Refunds</h2>
            <p className="mb-4">Partial refunds may be granted in situations such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The customer voluntarily cancels a lease/rental mid-term</li>
              <li>The product is returned without any verified defect or malfunction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <p className="mb-4">
              Once your return is received and inspected, we will send you an email to notify you that we have 
              received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p className="mb-4">
              If approved, your refund will be processed, and a credit will automatically be applied to your 
              original method of payment within 7–10 business days.
            </p>
            <p className="mb-4">
              Please note: The cost of return shipping will be borne by the customer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Late or Missing Refunds</h2>
            <p className="mb-4">If you haven't received your refund, please follow these steps:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>First, check your bank account again</li>
              <li>Contact your credit card company—refunds may take time to reflect</li>
              <li>Contact your bank—there is often some processing time before a refund is posted</li>
              <li>If you've done all of this and still haven't received your refund, please contact us at Info@nt-one.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sale Items</h2>
            <p className="mb-4">
              Only regular priced items are eligible for refunds. Sale or discounted items cannot be refunded.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p className="mb-4">
              We only replace items that are defective or damaged due to manufacturing or delivery issues.
            </p>
            <p className="mb-4">
              To request an exchange, please email us at Info@nt-one.com with your order details. Our customer service team will provide you with further instructions and the return shipping address upon approval of your exchange request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gift Returns</h2>
            <p className="mb-4">
              If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift 
              credit for the value of your return. Once the returned item is received, a gift certificate will be 
              mailed to you.
            </p>
            <p className="mb-4">
              If the item wasn't marked as a gift when purchased, or the gift giver had the order shipped to 
              themselves to give to you later, we will send a refund to the gift giver and they will be notified 
              about your return.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Returns</h2>
            <p className="mb-4">
              To return your product, you will receive detailed return instructions and shipping address after contacting our customer service team.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You are responsible for paying the return shipping costs</li>
              <li>Shipping costs are non-refundable</li>
              <li>If you receive a refund, the return shipping charge will be deducted from your refund amount</li>
              <li>For high-value returns, we recommend using a trackable shipping service or purchasing shipping insurance</li>
              <li>We cannot guarantee receipt of your returned item without tracking information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">
              For any questions or concerns about returns, refunds, or exchanges, please contact our customer 
              service team at Info@nt-one.com or call us at +91 80878 88666.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
