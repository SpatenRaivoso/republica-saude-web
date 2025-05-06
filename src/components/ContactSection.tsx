
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReservationForm from './ReservationForm';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-natural-400 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-natural-100 text-lg max-w-3xl mx-auto">
            Estamos sempre à disposição para atender você. Faça sua reserva, 
            tire dúvidas ou nos siga nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-natural-100 mb-2">Para reservas ou informações:</p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white hover:text-natural-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.59 2.112q.636-.789 1.71-.789 1.018 0 1.65.827.068.09.215.293.148.205.273.387.126.183.264.39.137.208.165.255.12.2.12.402 0 .306-.273.58-.16.16-.382.334-.223.175-.408.336-.184.16-.279.33-.094.17-.094.37 0 .147.082.334.082.187.178.35.095.165.26.386.165.22.224.306.838 1.041 2.001 1.787 1.015.669 1.757.702.092 0 .138-.003.046-.003.098-.01.052-.006.134-.019.082-.013.147-.025.065-.013.15-.035.085-.023.123-.042.038-.019.123-.068.085-.049.101-.06.16-.12.264-.291.104-.17.24-.374.138-.205.29-.418.154-.213.32-.384.09-.094.25-.094.232 0 .455.082.223.082.456.195.232.112.498.288.265.175.417.306 1.09.9 1.09 1.77 0 .236-.11.495-.11.259-.248.465-.138.207-.405.46-.266.254-.504.404l-.13.08q-.66.4-1.793.4-.995 0-2.05-.434-1.056-.435-2.164-1.145-1.108-.711-2.25-1.717-1.14-1.006-2.2-2.27-1.013-1.211-1.88-2.498-.865-1.287-1.313-2.38-.447-1.094-.447-1.962 0-1.125.52-1.914z"/>
                  </svg>
                  <span>(11) 99999-9999</span>
                </a>
              </div>
              
              <div>
                <p className="text-natural-100 mb-2">Para eventos ou parcerias:</p>
                <a 
                  href="mailto:contato@republicadasaude.com.br" 
                  className="flex items-center gap-3 text-white hover:text-natural-100 transition-colors"
                >
                  <Mail size={20} />
                  <span>contato@republicadasaude.com.br</span>
                </a>
              </div>
              
              <div>
                <p className="text-natural-100 mb-4">Nos siga nas redes sociais:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/republicadasaude" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-natural-400 p-3 rounded-full hover:bg-natural-100 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://facebook.com/republicadasaude" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-natural-400 p-3 rounded-full hover:bg-natural-100 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-natural-400 p-3 rounded-full hover:bg-natural-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.59 2.112q.636-.789 1.71-.789 1.018 0 1.65.827.068.09.215.293.148.205.273.387.126.183.264.39.137.208.165.255.12.2.12.402 0 .306-.273.58-.16.16-.382.334-.223.175-.408.336-.184.16-.279.33-.094.17-.094.37 0 .147.082.334.082.187.178.35.095.165.26.386.165.22.224.306.838 1.041 2.001 1.787 1.015.669 1.757.702.092 0 .138-.003.046-.003.098-.01.052-.006.134-.019.082-.013.147-.025.065-.013.15-.035.085-.023.123-.042.038-.019.123-.068.085-.049.101-.06.16-.12.264-.291.104-.17.24-.374.138-.205.29-.418.154-.213.32-.384.09-.094.25-.094.232 0 .455.082.223.082.456.195.232.112.498.288.265.175.417.306 1.09.9 1.09 1.77 0 .236-.11.495-.11.259-.248.465-.138.207-.405.46-.266.254-.504.404l-.13.08q-.66.4-1.793.4-.995 0-2.05-.434-1.056-.435-2.164-1.145-1.108-.711-2.25-1.717-1.14-1.006-2.2-2.27-1.013-1.211-1.88-2.498-.865-1.287-1.313-2.38-.447-1.094-.447-1.962 0-1.125.52-1.914z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-natural-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Faça sua Reserva</h3>
            <p className="text-natural-500 mb-6">
              Reserve sua mesa diretamente através do nosso formulário. Atendemos com todo cuidado e atenção.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M3.59 2.112q.636-.789 1.71-.789 1.018 0 1.65.827.068.09.215.293.148.205.273.387.126.183.264.39.137.208.165.255.12.2.12.402 0 .306-.273.58-.16.16-.382.334-.223.175-.408.336-.184.16-.279.33-.094.17-.094.37 0 .147.082.334.082.187.178.35.095.165.26.386.165.22.224.306.838 1.041 2.001 1.787 1.015.669 1.757.702.092 0 .138-.003.046-.003.098-.01.052-.006.134-.019.082-.013.147-.025.065-.013.15-.035.085-.023.123-.042.038-.019.123-.068.085-.049.101-.06.16-.12.264-.291.104-.17.24-.374.138-.205.29-.418.154-.213.32-.384.09-.094.25-.094.232 0 .455.082.223.082.456.195.232.112.498.288.265.175.417.306 1.09.9 1.09 1.77 0 .236-.11.495-.11.259-.248.465-.138.207-.405.46-.266.254-.504.404l-.13.08q-.66.4-1.793.4-.995 0-2.05-.434-1.056-.435-2.164-1.145-1.108-.711-2.25-1.717-1.14-1.006-2.2-2.27-1.013-1.211-1.88-2.498-.865-1.287-1.313-2.38-.447-1.094-.447-1.962 0-1.125.52-1.914z"/>
                  </svg>
                  Reservar Mesa
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Reserva de Mesa</DialogTitle>
                </DialogHeader>
                <ReservationForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
