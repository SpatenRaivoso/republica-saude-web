
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-natural-600 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-natural-600 flex items-center justify-center font-bold text-xl">R</div>
              <span className="font-medium text-xl tracking-tight">República da Saúde</span>
            </div>
            <p className="text-natural-200 mb-6">
              Alimentação saudável, saborosa e sustentável para todos os momentos da sua vida.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-natural-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-natural-200 hover:text-white transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/#conceito" className="text-natural-200 hover:text-white transition-colors">
                  Conceito
                </Link>
              </li>
              <li>
                <Link to="/#localizacao" className="text-natural-200 hover:text-white transition-colors">
                  Localização
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Horário</h4>
            <ul className="space-y-3">
              <li className="text-natural-200">
                <span className="font-medium">Segunda a Sexta:</span> 11h às 22h
              </li>
              <li className="text-natural-200">
                <span className="font-medium">Sábado e Domingo:</span> 11h às 16h
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="text-natural-200">
                <span className="font-medium">Endereço:</span> Av. Paulista, 1000, São Paulo - SP
              </li>
              <li className="text-natural-200">
                <span className="font-medium">Telefone:</span> (11) 99999-9999
              </li>
              <li className="text-natural-200">
                <span className="font-medium">Email:</span> contato@republicadasaude.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-natural-500 mt-12 pt-8 text-center">
          <p className="text-natural-300">
            © {new Date().getFullYear()} República da Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
