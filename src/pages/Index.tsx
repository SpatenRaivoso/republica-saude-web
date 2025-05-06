
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import FeaturedMenu from '@/components/FeaturedMenu';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Concept />
      <FeaturedMenu />
      <Testimonials />
      <LocationMap />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
