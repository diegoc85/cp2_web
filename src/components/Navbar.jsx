import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">DC Solutions</div>

        {/* Links para telas médias e grandes */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#sobre" className="hover:text-gray-400">Sobre Mim</a>
          <a href="#habilidades" className="hover:text-gray-400">Habilidades</a>
          <a href="#projetos" className="hover:text-gray-400">Projetos</a>
          <a href="#contatos" className="hover:text-gray-400">Contato</a>
        </div>

        {/* Botão de conexão para telas médias */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Conecte-se a Mim
        </button>

        {/* Menu Hamburger para telas pequenas */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu Dropdown para telas pequenas */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 py-4 bg-black">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#sobre" className="hover:text-gray-400">Sobre Mim</a>
          <a href="#habilidades" className="hover:text-gray-400">Habilidades</a>
          <a href="#projetos" className="hover:text-gray-400">Projetos</a>
          <a href="#contatos" className="hover:text-gray-400">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

