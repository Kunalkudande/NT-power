import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-daly-blue" />,
    title: 'Adres',
    content: 'No. 14, Gongye South Road, Songshanhu Science & Technology Park, Dongguan, Guangdong, China'
  },
  {
    icon: <Phone className="h-5 w-5 text-daly-blue" />,
    title: 'Telefoon',
    content: '+86 13215201813'
  },
  {
    icon: <Mail className="h-5 w-5 text-daly-blue" />,
    title: 'E-mail',
    content: 'dalybms@dalyelec.com'
  },
  {
    icon: <Clock className="h-5 w-5 text-daly-blue" />,
    title: 'Ondersteuningstijden',
    content: '24/7 bereikbaar, elke dag van de week'
  }
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, url: '#', label: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, url: '#', label: 'Instagram' },
  { icon: <Youtube className="h-5 w-5" />, url: '#', label: 'YouTube' },
  { icon: <Linkedin className="h-5 w-5" />, url: '#', label: 'LinkedIn' }
];

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor uw bericht. We nemen spoedig contact met u op.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute top-20 right-20 w-80 h-80 bg-daly-blue/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block text-daly-blue font-semibold text-sm mb-3">NEEM CONTACT MET ONS OP</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-daly-black">
            Neem <span className="text-daly-blue">contact op</span>
          </h2>
          <p className="text-daly-medium-gray max-w-2xl mx-auto">
            Vragen over onze producten of diensten? Neem contact op met ons team, wij helpen je graag verder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Formulier */}
          <div className="bg-white border border-daly-medium-gray/20 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-daly-black">Stuur ons een bericht</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input 
                  placeholder="Volledige naam" 
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Telefoonnummer" 
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                />
                <Input 
                  placeholder="E-mailadres" 
                  type="email"
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                  required
                />
              </div>

              <Textarea 
                placeholder="Uw bericht" 
                className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20 min-h-[150px]"
                required
              />

              <Button type="submit" className="bg-daly-blue hover:bg-daly-blue/90 text-white w-full">
                Verstuur
              </Button>
            </form>
          </div>

          {/* Contactgegevens */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-daly-medium-gray/20 rounded-xl p-6 card-hover shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-daly-blue/10 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-daly-black">{item.title}</h4>
                  <p className="text-daly-medium-gray">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Sociale media */}
            <div className="bg-white border border-daly-medium-gray/20 rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-daly-black">Volg ons</h4>
              <p className="text-daly-medium-gray mb-4">Volg ons op sociale media voor het laatste nieuws en updates.</p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    aria-label={link.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-daly-medium-gray/10 hover:bg-daly-blue/10 hover:text-daly-blue transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
