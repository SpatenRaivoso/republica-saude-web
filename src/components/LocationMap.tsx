
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="localizacao" className="bg-natural-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Estamos</h2>
          <p className="text-natural-500 text-lg max-w-3xl mx-auto">
            Venha nos visitar! Estamos localizados em um espaço aconchegante e acessível no coração da cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.567602534592!2d-49.26935932491795!3d-16.709962250059723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19c5556555f%3A0x88538ce050868c80!2sR.%2089%2C%20655%20-%20St.%20Sul%2C%20Goi%C3%A2nia%20-%20GO%2C%2074093-140!5e0!3m2!1spt-BR!2sbr!4v1715688180563!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização República da Saúde"
            ></iframe>
          </div>
          <div className="bg-white p-8 rounded-xl border border-natural-200 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Informações</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-natural-100 p-3 rounded-full">
                  <MapPin className="text-natural-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-600 mb-1">Endereço</h4>
                  <p className="text-natural-500">R. 89, 655</p>
                  <p className="text-natural-500">St. Sul, Goiânia - GO</p>
                  <p className="text-natural-500">CEP: 74093-140</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-natural-100 p-3 rounded-full">
                  <Clock className="text-natural-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-600 mb-1">Horário de Funcionamento</h4>
                  <p className="text-natural-500">Segunda a Sexta: 11h às 22h</p>
                  <p className="text-natural-500">Sábados e Domingos: 11h às 16h</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-natural-100 p-3 rounded-full">
                  <Phone className="text-natural-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-natural-600 mb-1">Contato</h4>
                  <p className="text-natural-500">(62) 99999-9999</p>
                  <p className="text-natural-500">contato@republicadasaude.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
