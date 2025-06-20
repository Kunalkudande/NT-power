
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TopProducts from '@/components/TopProducts';
import ProductSlider from '@/components/ProductSlider';
import Accessories from '@/components/Accessories';
import CompanyInfo from '@/components/CompanyInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <TopProducts />
      <ProductSlider />
      <CompanyInfo />
      <Accessories />
      <Footer />
    </div>
  );
};

export default Index;
