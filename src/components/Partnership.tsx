import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Partnership = () => {
  return (
    <section id="partnership" className="py-24 bg-secondary overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-nt-red/10 rounded-full blur-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nt-red/10 rounded-full blur-lg"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop"
                alt="Samenwerking NT Power en DalyBMS" 
                className="w-full rounded-lg shadow-xl border border-nt-medium-gray/20"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-black p-6 rounded-lg shadow-lg border border-nt-medium-gray/20 max-w-[240px]">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-1 bg-nt-red mr-3"></div>
                  <div className="text-lg font-bold text-nt-white">Officiële partner</div>
                </div>
                <p className="text-sm text-nt-medium-gray">
                  Erkende distributeur met volledige technische ondersteuning en garantieservice.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block bg-nt-red px-4 py-1 rounded mb-6 text-sm font-medium">
              Vertrouwde samenwerking
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Samenwerking <span className="text-nt-red">NT Power & DalyBMS</span>
            </h2>
            <p className="text-nt-medium-gray mb-8">
              Als erkende verkoopspartner van DalyBMS biedt NT Power toonaangevende batterijbeheersystemen met lokale ondersteuning en expertise. Onze samenwerking garandeert echte producten met volledige garantie en technische bijstand.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-nt-red mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Gecertificeerde originele producten</h4>
                  <p className="text-nt-medium-gray text-sm">Alle producten komen rechtstreeks van DalyBMS met authenticatieverificatie.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-nt-red mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Lokale technische ondersteuning</h4>
                  <p className="text-nt-medium-gray text-sm">Onze opgeleide specialisten bieden tijdige ondersteuning voor al uw BMS-behoeften.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-nt-red mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Verlengde garantie</h4>
                  <p className="text-nt-medium-gray text-sm">Exclusieve garantie-uitbreidingen alleen beschikbaar via erkende partners.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-nt-red mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Snel levernetwerk</h4>
                  <p className="text-nt-medium-gray text-sm">Lokale opslag betekent snellere leveringstijden en lagere verzendkosten.</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="rounded-sm group bg-nt-red hover:bg-nt-red/90">
              Meer over onze samenwerking
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
