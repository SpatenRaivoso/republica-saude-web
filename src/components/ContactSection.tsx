
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Whatsapp, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-natural-400 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-natural-100 text-lg max-w-3xl mx-auto">
            Estamos sempre à disposição para atender você. Faça seu pedido, 
            tire dúvidas ou nos siga nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-natural-100 mb-2">Para pedidos ou informações:</p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white hover:text-natural-100 transition-colors"
                >
                  <Whatsapp size={20} />
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
                    <Whatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-natural-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Faça seu Pedido</h3>
            <p className="text-natural-500 mb-6">
              Peça seu delivery ou reserve sua mesa diretamente pelo nosso WhatsApp. 
              Atendemos com rapidez e segurança.
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá%20República%20da%20Saúde!%20Gostaria%20de%20fazer%20um%20pedido." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Whatsapp className="mr-2" size={20} />
                Pedir via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
