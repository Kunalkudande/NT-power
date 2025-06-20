
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-daly-blue" />,
    title: 'Address',
    content: 'No. 14, Gongye South Road, Songshanhu Science & Technology Park, Dongguan, Guangdong, China'
  },
  {
    icon: <Phone className="h-5 w-5 text-daly-blue" />,
    title: 'Phone',
    content: '+86 13215201813'
  },
  {
    icon: <Mail className="h-5 w-5 text-daly-blue" />,
    title: 'Email',
    content: 'dalybms@dalyelec.com'
  },
  {
    icon: <Clock className="h-5 w-5 text-daly-blue" />,
    title: 'Support Hours',
    content: 'Available 24/7, every day of the week'
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
    
    // Here you would normally send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-daly-blue/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block text-daly-blue font-semibold text-sm mb-3">CONTACT US</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-daly-black">
            Get in <span className="text-daly-blue">Touch</span>
          </h2>
          <p className="text-daly-medium-gray max-w-2xl mx-auto">
            Have questions about our products or services? Reach out to our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white border border-daly-medium-gray/20 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-daly-black">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input 
                  placeholder="Full Name" 
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Phone Number" 
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                />
                <Input 
                  placeholder="Email Address" 
                  type="email"
                  className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20"
                  required
                />
              </div>
              
              <Textarea 
                placeholder="Your Message" 
                className="bg-daly-medium-gray/10 border-daly-medium-gray/20 focus:border-daly-blue focus-visible:ring-daly-blue/20 min-h-[150px]"
                required
              />
              
              <Button type="submit" className="bg-daly-blue hover:bg-daly-blue/90 text-white w-full">
                Send Now
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
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
            
            {/* Social Media Links */}
            <div className="bg-white border border-daly-medium-gray/20 rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-daly-black">Follow Us</h4>
              <p className="text-daly-medium-gray mb-4">Connect with us on social media to stay updated with our latest news and developments.</p>
              
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
