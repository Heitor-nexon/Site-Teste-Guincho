import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-black text-white italic">
              RP<span className="text-orange-500">AUTO</span>
            </span>
            <p className="text-gray-500 mt-2 text-sm max-w-xs">
              Serviço especializado de Guincho e Reboque na Zona Sul de São Paulo.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <a href="tel:11999999999" className="text-white font-bold text-lg hover:text-orange-500 transition-colors">
              (11) 99999-9999
            </a>
            <p className="text-gray-500 text-sm mt-1">
              São Paulo - SP
            </p>
            <p className="text-orange-500 font-medium text-sm mt-2">
              Guincho 24h – Conte com a RP Auto Mecânica quando mais precisar.
            </p>
          </div>

        </div>
        
        <div className="border-t border-gray-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} RP Auto Mecânica. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-gray-400">Privacidade</a>
            <a href="#" className="hover:text-gray-400">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};