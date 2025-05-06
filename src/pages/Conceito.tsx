
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Concept from '@/components/Concept';

const ConceitoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Nosso Conceito</h1>
          <Concept />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConceitoPage;
