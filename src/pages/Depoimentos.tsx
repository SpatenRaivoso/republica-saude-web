
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const DepoimentosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Depoimentos</h1>
          <p className="text-natural-600 text-lg text-center max-w-3xl mx-auto mb-12">
            Veja o que nossos clientes têm a dizer sobre suas experiências na República da Saúde.
          </p>
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DepoimentosPage;
