import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pt-24 max-w-4xl bg-white shadow-md rounded-lg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Retour- en Terugbetalingsbeleid</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overzicht</h2>
            <p className="mb-4">
              Ons retour- en terugbetalingsbeleid is 15 dagen geldig vanaf de leverdatum. Als er 15 dagen zijn verstreken sinds uw aankoop, kunnen wij helaas geen volledige terugbetaling of omruiling aanbieden onder normale omstandigheden.
            </p>
            <p className="mb-4">
              Om in aanmerking te komen voor een retourzending, moet het artikel ongebruikt zijn en zich in dezelfde staat bevinden als waarin u het heeft ontvangen. Het moet ook in de originele verpakking zitten. Beschadiging, misbruik of knoeien met het product diskwalificeert het voor retournering of terugbetaling.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Niet-retourneerbare Artikelen</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Cadeaubonnen</li>
              <li>Lease- of huurbedragen voor voltooide maanden of facturatiecycli</li>
            </ul>
            <p className="mb-4">
              Een geldig ontvangstbewijs of aankoop-/lease-/huurbewijs is vereist om uw retourzending te verwerken.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gedeeltelijke Terugbetalingen</h2>
            <p className="mb-4">Gedeeltelijke terugbetalingen kunnen worden verleend in situaties zoals:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>De klant annuleert vrijwillig een lease-/huurcontract halverwege</li>
              <li>Het product wordt geretourneerd zonder een geverifieerd defect of storing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Terugbetalingsproces</h2>
            <p className="mb-4">
              Zodra uw retourzending is ontvangen en geïnspecteerd, sturen wij u een e-mail om u te informeren dat wij uw geretourneerde artikel hebben ontvangen. We laten u ook weten of uw terugbetaling is goedgekeurd of afgewezen.
            </p>
            <p className="mb-4">
              Als deze is goedgekeurd, wordt uw terugbetaling verwerkt en wordt er automatisch een tegoed toegepast op uw oorspronkelijke betaalmethode binnen 7–10 werkdagen.
            </p>
            <p className="mb-4">
              Let op: De kosten voor retourzending zijn voor rekening van de klant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Late of Ontbrekende Terugbetalingen</h2>
            <p className="mb-4">Als u uw terugbetaling nog niet heeft ontvangen, volg dan deze stappen:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Controleer eerst nogmaals uw bankrekening</li>
              <li>Neem contact op met uw creditcardmaatschappij — terugbetalingen kunnen tijd kosten om te verschijnen</li>
              <li>Neem contact op met uw bank — het kan enige verwerkingstijd kosten voordat een terugbetaling wordt geboekt</li>
              <li>Als u dit allemaal heeft gedaan en uw terugbetaling nog steeds niet heeft ontvangen, neem dan contact met ons op via Info@nt-one.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Uitverkoopartikelen</h2>
            <p className="mb-4">
              Alleen artikelen met een reguliere prijs komen in aanmerking voor terugbetaling. Uitverkoop- of afgeprijsde artikelen kunnen niet worden terugbetaald.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Omruilingen</h2>
            <p className="mb-4">
              We vervangen alleen artikelen die defect zijn of beschadigd zijn door fabricage- of leveringsproblemen.
            </p>
            <p className="mb-4">
              Om een omruiling aan te vragen, stuur ons een e-mail naar Info@nt-one.com met uw bestelgegevens. Ons klantenserviceteam zal u verdere instructies en het retouradres geven zodra uw verzoek is goedgekeurd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cadeaus Retourneren</h2>
            <p className="mb-4">
              Als het artikel als cadeau was gemarkeerd bij aankoop en rechtstreeks naar u is verzonden, ontvangt u een cadeaubon ter waarde van uw retourzending. Zodra het geretourneerde artikel is ontvangen, wordt de cadeaubon naar u toegestuurd.
            </p>
            <p className="mb-4">
              Als het artikel niet als cadeau was gemarkeerd bij aankoop, of de gever het naar zichzelf heeft laten sturen om later te overhandigen, sturen wij de terugbetaling naar de gever en brengen we hem op de hoogte van uw retourzending.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Producten Retourneren</h2>
            <p className="mb-4">
              Om uw product te retourneren, ontvangt u gedetailleerde retourinstructies en het verzendadres nadat u contact hebt opgenomen met ons klantenserviceteam.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>U bent verantwoordelijk voor de verzendkosten van de retourzending</li>
              <li>Verzendkosten worden niet terugbetaald</li>
              <li>Als u een terugbetaling ontvangt, worden de verzendkosten van het teruggestuurde artikel afgetrokken</li>
              <li>Voor dure producten raden we aan een traceerbare verzendservice te gebruiken of een verzendverzekering af te sluiten</li>
              <li>We kunnen ontvangst van uw retourzending niet garanderen zonder trackinginformatie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hulp Nodig?</h2>
            <p className="mb-4">
              Voor vragen of opmerkingen over retourzendingen, terugbetalingen of omruilingen kunt u contact opnemen met ons klantenserviceteam via Info@nt-one.com of bel ons op +91 80878 88666.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
