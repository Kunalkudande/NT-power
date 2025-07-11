
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-nt-red/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-nt-red/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-nt-red px-4 py-1 rounded mb-6 text-sm font-medium">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-nt-red">NT Power</span>
            </h2>
            <p className="text-nt-medium-gray mb-6">
NT Power werd opgericht in 2015 met de missie om hoogwaardige batterijbeheersystemen te leveren voor diverse toepassingen.Als geautoriseerde verkoopspartner van DalyBMS combineren we technische expertise met uitstekende klantenservice.            </p>
            <p className="text-nt-medium-gray mb-8">
Ons team van experts is gespecialiseerd in energieopslagsystemen en werkt nauw samen met klanten om oplossingen op maat te leveren voor hun specifieke behoeften.Van energieopslag voor woningen tot industriële toepassingen, NT Power is uw betrouwbare partner voor al uw behoeften op het gebied van batterijbeheer.            </p>
            
            {/* Key company values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nt-red/10 flex items-center justify-center mr-4 shrink-0">
                  <Users className="h-6 w-6 text-nt-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Expert Team</h4>
                  <p className="text-nt-medium-gray text-sm">Specialists in BMS technology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nt-red/10 flex items-center justify-center mr-4 shrink-0">
                  <Award className="h-6 w-6 text-nt-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Quality Focus</h4>
                  <p className="text-nt-medium-gray text-sm">Only genuine products</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nt-red/10 flex items-center justify-center mr-4 shrink-0">
                  <Clock className="h-6 w-6 text-nt-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Snelle ondersteuning</h4>
                  <p className="text-nt-medium-gray text-sm">24/7 technische ondersteuning</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-nt-red/10 flex items-center justify-center mr-4 shrink-0">
                  <Globe className="h-6 w-6 text-nt-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Wereldwijde verzending</h4>
                  <p className="text-nt-medium-gray text-sm">Wereldwijde levering</p>
                </div>
              </div>
            </div>
            
            <Button variant="default" className="bg-nt-red hover:bg-nt-red/90 rounded-sm">
Lees meer over ons            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&auto=format&fit=crop"
              alt="NT Power Team" 
              className="w-full rounded-lg shadow-lg border border-nt-medium-gray/20 relative z-10"
            />
            
            {/* Stats overlay */}
            <div className="absolute -bottom-10 -right-10 bg-black p-6 rounded-lg shadow-xl border border-nt-medium-gray/20 max-w-xs">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-nt-red text-3xl font-bold mb-1">8+</div>
                  <div className="text-nt-medium-gray text-sm">Jaren aan ervaring</div>
                </div>
                <div>
                  <div className="text-nt-red text-3xl font-bold mb-1">50+</div>
                  <div className="text-nt-medium-gray text-sm">Teamleden</div>
                </div>
                <div>
                  <div className="text-nt-red text-3xl font-bold mb-1">15k+</div>
                  <div className="text-nt-medium-gray text-sm">Verkochte eenheden</div>
                </div>
                <div>
                  <div className="text-nt-red text-3xl font-bold mb-1">30+</div>
                  <div className="text-nt-medium-gray text-sm">Bediende landen</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-nt-red rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
