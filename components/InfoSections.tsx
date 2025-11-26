import React from 'react';
import { Clock, MapPin, BadgeCheck, PhoneCall, FileText, Truck } from 'lucide-react';

export const About: React.FC = () => (
  <section id="about" className="py-16 md:py-24 bg-brand-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <img 
            src="https://picsum.photos/seed/mechanicshop/800/600" 
            alt="Oficina e Guincho" 
            className="rounded-2xl shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-2">Quem Somos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">RP Auto Mecânica: Segurança e Confiança</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A RP Auto Mecânica é referência em serviços de guincho e reboque na Zona Sul de São Paulo. 
            Com anos de experiência no segmento automotivo, entendemos que precisar de um reboque 
            geralmente acontece em momentos de estresse. Por isso, nosso foco é oferecer um atendimento 
            humanizado, ágil e extremamente profissional.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Prezamos pela pontualidade, pela integridade do seu veículo durante o transporte e pela 
            total transparência nos valores. Seja para uma pane elétrica, pneu furado ou acidente, 
            estamos prontos para ajudar.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-black p-4 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-sm text-gray-500">Disponibilidade</div>
            </div>
            <div className="bg-brand-black p-4 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-500">Segurança</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall className="w-10 h-10 text-orange-500" />,
      title: "1. Você entra em contato",
      description: "Clique em chamar no WhatsApp ou ligue diretamente para nossa equipe de plantão."
    },
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "2. Orçamento e Prazo",
      description: "Informamos o tempo estimado de chegada e o valor do serviço com total transparência."
    },
    {
      icon: <Truck className="w-10 h-10 text-orange-500" />,
      title: "3. Guincho até você",
      description: "Vamos até o local rapidamente, fazemos o reboque e levamos seu veículo com segurança."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona o atendimento</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Processo simples e sem burocracia para resolver seu problema o mais rápido possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-brand-dark p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-black border border-gray-800 mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5511999999999" 
            className="inline-flex items-center text-orange-500 font-bold hover:text-white transition-colors border-b-2 border-orange-500 hover:border-white pb-1"
          >
            📲 Clique aqui e solicite o guincho agora mesmo
          </a>
        </div>
      </div>
    </section>
  );
};

export const ServiceArea: React.FC = () => {
  const neighborhoods = [
    "Santo Amaro", "Interlagos", "Brooklin", "Campo Belo", 
    "Vila Mariana", "Jabaquara", "Socorro", "Cidade Dutra",
    "Moema", "Itaim Bibi", "Morumbi", "Vila Olímpia"
  ];

  return (
    <section className="py-16 bg-brand-dark border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Atendimento focado na <span className="text-orange-500">Zona Sul de São Paulo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com foco na Zona Sul de SP para oferecer atendimento mais rápido e eficiente, 
            reduzindo o tempo de espera nas principais avenidas e bairros.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {neighborhoods.map((bairro, idx) => (
            <span key={idx} className="px-4 py-2 bg-brand-black border border-gray-800 rounded-full text-gray-300 hover:text-orange-500 hover:border-orange-500 transition-colors text-sm font-medium cursor-default">
              📍 {bairro}
            </span>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 italic">
          *Atendemos também regiões próximas e Grande SP mediante consulta prévia.
        </p>
      </div>
    </section>
  );
};