
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-natural-50">
      <div className="container-custom py-20 md:py-32 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-natural-600">
            Alimentação natural para o seu bem-estar
          </h1>
          <p className="text-lg md:text-xl text-natural-500 mb-8 max-w-2xl">
            No República da Saúde, cada refeição é uma celebração do sabor e da vida saudável. 
            Pratos nutritivos, frescos e deliciosos feitos com ingredientes naturais e orgânicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#conceito">
              <Button className="btn-primary w-full sm:w-auto">
                Conheça nosso conceito
              </Button>
            </a>
            <a href="/menu">
              <Button className="btn-secondary w-full sm:w-auto">
                Ver cardápio
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=768&q=80" 
                alt="Pratos saudáveis do República da Saúde" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-natural-300 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-natural-200 -z-10"></div>
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,191.82,56.63,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
