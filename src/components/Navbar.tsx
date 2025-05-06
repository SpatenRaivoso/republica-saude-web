
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-natural-200">
      <nav className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-natural-400 text-white flex items-center justify-center font-bold text-xl">R</div>
          <span className="text-natural-600 font-medium text-xl tracking-tight">República da Saúde</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className="text-natural-500 hover:text-natural-600 transition-colors">
            Home
          </NavLink>
          <NavLink to="/menu" className="text-natural-500 hover:text-natural-600 transition-colors">
            Cardápio
          </NavLink>
          <NavLink to="/#conceito" className="text-natural-500 hover:text-natural-600 transition-colors">
            Conceito
          </NavLink>
          <NavLink to="/#depoimentos" className="text-natural-500 hover:text-natural-600 transition-colors">
            Depoimentos
          </NavLink>
          <NavLink to="/#localizacao" className="text-natural-500 hover:text-natural-600 transition-colors">
            Localização
          </NavLink>
          <NavLink to="/#contato" className="text-natural-500 hover:text-natural-600 transition-colors">
            Contato
          </NavLink>
        </div>

        {/* Contact Button */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <Button className="btn-primary">
            Faça seu pedido
          </Button>
        </a>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-natural-500 hover:text-natural-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 border-b border-natural-200">
          <div className="flex flex-col gap-4">
            <NavLink 
              to="/" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/menu" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </NavLink>
            <NavLink 
              to="/#conceito" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Conceito
            </NavLink>
            <NavLink 
              to="/#depoimentos" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </NavLink>
            <NavLink 
              to="/#localizacao" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </NavLink>
            <NavLink 
              to="/#contato" 
              className="text-natural-500 hover:text-natural-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </NavLink>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="btn-primary w-full">
                Faça seu pedido
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
