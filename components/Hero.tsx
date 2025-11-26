import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

// SVG Whatsapp icon for specific brand usage
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/towtrucknight/1920/1080" 
          alt="Guincho na estrada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/4 lg:w-2/3 py-12 md:py-20 text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-6 border border-green-500/50 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-500 font-bold text-sm tracking-wide uppercase">Emergência? Chegamos rápido!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Guincho 24h na <br className="hidden md:block"/>
            <span className="text-orange-500">Zona Sul de São Paulo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 font-light">
            Atendimento rápido, seguro e especializado em carros, motos e utilitários. 
            Reboque imediato na Zona Sul e regiões próximas.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-gray-200 max-w-xl mx-auto md:mx-0">
            {[
              "Guincho 24 horas – todos os dias",
              "Atendimento rápido na Zona Sul de SP",
              "Profissionais experientes e serviço seguro",
              "Reboque para oficinas ou residência"
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start">
                <CheckCircle2 className="text-orange-500 w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="whatsapp" icon={<WhatsAppIcon />}>
              Chamar no WhatsApp
            </Button>
            <Button variant="outline" icon={<Phone className="w-5 h-5" />}>
              Ligar Agora
            </Button>
          </div>

          <div className="mt-6 text-center md:text-left">
            <p className="text-gray-400 text-sm">Plantão 24h:</p>
            <a href="tel:11999999999" className="text-2xl md:text-3xl font-bold text-white hover:text-orange-400 transition-colors">
              📞 (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};