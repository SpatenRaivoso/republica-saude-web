
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationMap from '@/components/LocationMap';

const LocalizacaoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-16">
          <div className="container-custom mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Nossa Localização</h1>
            <p className="text-natural-600 text-lg text-center max-w-3xl mx-auto mb-6">
              Estamos em uma região privilegiada, com fácil acesso e estacionamento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Horário de Funcionamento</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Segunda a Sexta</span>
                    <span>11:30 - 15:00 | 18:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sábados</span>
                    <span>11:30 - 16:00 | 18:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Domingos</span>
                    <span>11:30 - 16:00</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Endereço</h2>
                <p className="mb-2">Avenida Paulista, 1000</p>
                <p className="mb-2">Bela Vista, São Paulo - SP</p>
                <p className="mb-2">CEP: 01310-100</p>
                <p className="mb-4">Estacionamento com manobrista</p>
                
                <p className="font-medium">Próximo ao metrô Trianon-MASP</p>
              </div>
            </div>
          </div>
          <LocationMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalizacaoPage;
