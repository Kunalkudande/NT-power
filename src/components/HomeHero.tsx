import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomeHero = () => {
  return (
    <section id="home" className="pt-24 pb-20 bg-black overflow-hidden relative">
      {/* Decoratieve elementen */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-nt-blue/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-nt-blue/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative z-10">
            <div className="animate-fade-in">
              <div className="inline-block bg-nt-blue px-4 py-1 rounded mb-6 text-sm font-medium">
                Gecertificeerde partner van DalyBMS
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Geavanceerde <br />
                <span className="text-nt-blue">batterijbeheersystemen</span>
              </h1>
              <p className="text-lg text-nt-medium-gray mb-10 max-w-lg">
                Ontdek hoogwaardige BMS-oplossingen voor al uw energieopslagbehoeften.
                Toonaangevende technologie met uitstekende prestaties en betrouwbaarheid.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-nt-blue hover:bg-nt-blue/90 text-white rounded-sm btn-buy-now">
                  Bekijk producten <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-nt-medium-gray/30 text-nt-white hover:bg-nt-medium-gray/10 hover:text-nt-white rounded-sm">
                  Meer informatie
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-fade-in">
              <img 
                src="public/lovable-uploads/ae0d78e8-5e8a-4ca1-ade8-56a4e7760671.png"
                alt="Geavanceerd batterijbeheersysteem" 
                className="w-full rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-black px-6 py-4 rounded shadow-lg border border-nt-medium-gray/20">
                <div className="text-xs text-nt-medium-gray uppercase tracking-wider mb-1">Nieuwste model</div>
                <div className="text-lg font-bold text-nt-white">Smart BMS Pro</div>
                <div className="text-nt-blue font-medium mt-1">€399.99</div>
              </div>
            </div>

            {/* Highlight-cirkels */}
            <div className="absolute top-1/3 -left-16 w-32 h-32 bg-nt-blue/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 right-10 w-40 h-40 bg-nt-blue/5 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Statistieken */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-nt-medium-gray/20 pt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-nt-blue mb-2">5000+</div>
            <div className="text-sm text-nt-medium-gray">Tevreden klanten</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-nt-blue mb-2">99%</div>
            <div className="text-sm text-nt-medium-gray">Klanttevredenheid</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-nt-blue mb-2">24/7</div>
            <div className="text-sm text-nt-medium-gray">Technische ondersteuning</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-nt-blue mb-2">3 Jaar</div>
            <div className="text-sm text-nt-medium-gray">Garantieperiode</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
