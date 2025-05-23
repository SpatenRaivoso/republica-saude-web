
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const ContatoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Contato</h1>
          <p className="text-natural-600 text-lg text-center max-w-3xl mx-auto mb-12">
            Entre em contato conosco ou faça sua reserva. Estamos sempre à disposição para atendê-lo.
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
