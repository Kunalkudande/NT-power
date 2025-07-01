import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-12 pb-8 min-h-[100vh] flex flex-col justify-center items-center overflow-hidden relative">
      {/* Volledig witte achtergrond */}
      <div className="absolute inset-0 bg-white z-0"></div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="w-full max-w-4xl mx-auto bg-white">
          <video 
            className="w-full h-auto object-contain bg-white"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="lovable-uploads/video.mp4" type="video/mp4" />
            Uw browser ondersteunt het video-element niet.
            <img 
              src="public/lovable-uploads/cb8f4d3a-5504-4847-85ec-bd12464dbc22.png"
              alt="NT BMS-product" 
              className="w-full h-auto object-contain bg-white"
            />
          </video>
        </div>
      </div>

      {/* Optionele decoratieve vervagingen */}
      <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-nt-white to-transparent"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-nt-white/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-nt-white/10 filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
