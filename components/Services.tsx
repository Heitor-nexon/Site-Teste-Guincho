import React from 'react';
import { Truck, Car, Wrench, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Guincho 24h",
      desc: "Atendimento 24 horas para emergências, panes e acidentes na Zona Sul de São Paulo e arredores."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Reboque Leve e Motos",
      desc: "Reboque seguro para carros de passeio, motos e utilitários, com cuidado total e equipamentos adequados."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Transporte para Oficinas",
      desc: "Levamos seu veículo até a RP Auto Mecânica, sua oficina de confiança, ou até o endereço que você preferir."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Atendimento Rápido Zona Sul",
      desc: "Equipes posicionadas estrategicamente na Zona Sul para garantir rapidez no deslocamento e menor espera."
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Nossas Soluções</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Serviços de Guincho e Reboque</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-900 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="whatsapp">
            Pedir Guincho no WhatsApp
          </Button>
          <Button variant="secondary">
            Falar com Atendimento
          </Button>
        </div>
      </div>
    </section>
  );
};