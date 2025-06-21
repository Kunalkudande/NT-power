import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8 pt-24 max-w-4xl bg-white shadow-md rounded-lg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Algemene Voorwaarden</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">I. Algemeen</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Toegang tot deze website is onderworpen aan deze "Algemene Voorwaarden" (hierna te noemen "de Voorwaarden"). Lees deze Voorwaarden zorgvuldig door voordat u deze website gebruikt. Door deze website te gebruiken, verklaart u dat u de Voorwaarden hebt gelezen en geaccepteerd. Indien u één of meer Voorwaarden niet accepteert, dient u deze website niet te gebruiken.
              </li>
              <li>
                Deze website wordt beheerd door NT-One, een besloten vennootschap met beperkte aansprakelijkheid gevestigd in Nederland (hierna te noemen "Naman Technologies").
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">II. Toegestaan Gebruik</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Het gedrag van de gebruiker moet overeenkomen met wat wordt verwacht van een verantwoordelijke en zorgvuldige websitegebruiker. Gebruikers mogen de website of de Inhoud niet gebruiken voor handelingen die in strijd zijn met de wet of de goede zeden, waaronder maar niet beperkt tot:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Schending van intellectuele eigendomsrechten</li>
                  <li>Het maken van beledigende of misleidende uitspraken</li>
                  <li>Verspreiden van verboden materiaal</li>
                  <li>Schending van toepasselijke wetgeving</li>
                  <li>Omzeilen van websitebeveiliging</li>
                </ul>
              </li>
              <li>
                Gebruikers mogen de Inhoud uitsluitend gebruiken voor niet-commerciële of persoonlijke doeleinden. Verspreiding, wijziging, reproductie, overdracht of commerciële exploitatie van de Inhoud is verboden.
              </li>
              <li>
                De Inhoud mag niet worden aangepast, gekopieerd of reverse-engineered.
              </li>
              <li>
                Elke kopie van de Inhoud moet het copyright-bericht van Naman Technologies bevatten.
              </li>
              <li>
                Het verspreiden of aanpassen van grafisch materiaal van deze website is verboden zonder uitdrukkelijke schriftelijke toestemming.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">III. Intellectuele Eigendomsrechten</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Alle intellectuele eigendomsrechten met betrekking tot de inhoud van de website behoren exclusief toe aan Naman Technologies. Productnamen, logo’s, handelsmerken of de naam van Naman Technologies aangeduid met ® of ™ zijn handelsmerken die eigendom zijn van of in licentie zijn gegeven aan Naman Technologies.
              </li>
              <li>
                Het gebruik of misbruik van dergelijke handelsmerken of auteursrechtelijk beschermd materiaal is strikt verboden, behalve zoals hierboven vermeld.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">IV. Aansprakelijkheid en Vrijwaring</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                De Inhoud wordt verstrekt naar beste weten en overtuiging.
              </li>
              <li>
                Naman Technologies is van mening dat links naar webpagina’s van derden legaal zijn en in overeenstemming zijn met de gebruikelijke internetverwachtingen. Op schriftelijk verzoek zullen wij links naar websites van derden verwijderen.
              </li>
              <li>
                Naman Technologies is niet aansprakelijk voor gevolgschade met betrekking tot of voortvloeiend uit het gebruik van de website-inhoud of gekoppelde inhoud.
              </li>
              <li>
                Wij garanderen niet dat het materiaal vrij is van fouten, gebreken of virussen, noch dat dergelijke fouten zullen worden gecorrigeerd.
              </li>
              <li>
                Gebruikers vrijwaren Naman Technologies tegen claims van derden wegens schending van deze Voorwaarden of claims met betrekking tot het gebruik van de website.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">V. Productinformatie</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                Alle BMS (Battery Management System)-producten en gerelateerde accessoires worden zo nauwkeurig mogelijk beschreven. Specificaties, kenmerken en uiterlijk kunnen echter enigszins afwijken van de verstrekte beschrijvingen.
              </li>
              <li>
                Technische specificaties en prestatiegegevens van BMS-producten zijn uitsluitend ter informatie en kunnen zonder voorafgaande kennisgeving worden bijgewerkt.
              </li>
              <li>
                Installatie en gebruik van BMS-producten dienen in overeenstemming te zijn met de meegeleverde documentatie en veiligheidsrichtlijnen.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">VI. Garantie en Retourneren</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                BMS-producten worden geleverd met een standaardgarantie tegen fabricagefouten. Specifieke garantiebepalingen worden bij elk product meegeleverd.
              </li>
              <li>
                Garantieclaims moeten worden ingediend met bewijs van aankoop en een gedetailleerde beschrijving van het probleem.
              </li>
              <li>
                Retourneren is toegestaan binnen 14 dagen na levering, onder voorbehoud van de voorwaarden van ons retourbeleid.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">VII. Toepasselijk Recht</h2>
            <p className="mb-4">
              Deze Voorwaarden zijn onderworpen aan het Nederlandse recht. Alle geschillen tussen Naman Technologies en gebruikers worden voorgelegd aan de bevoegde rechtbank in Nederland.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
