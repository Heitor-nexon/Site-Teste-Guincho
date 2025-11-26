import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    location: '',
    destination: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Obrigado! Entraremos em contato em breve. Para urgências, ligue agora.");
  };

  return (
    <section id="contact" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Fale Conosco</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Solicite seu Guincho Agora</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Precisa de ajuda imediata? Preencha o formulário ou ligue diretamente. 
              Damos prioridade total para veículos parados em via pública.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Telefone & WhatsApp</h4>
                  <p className="text-gray-400">(11) 99999-9999</p>
                  <p className="text-sm text-orange-500 font-medium">Atendimento 24h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Base Operacional</h4>
                  <p className="text-gray-400">Zona Sul, São Paulo - SP</p>
                  <p className="text-gray-500 text-sm">Deslocamento rápido para toda região</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  <Clock className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horário de Funcionamento</h4>
                  <p className="text-gray-400">Segunda a Domingo: 24 Horas</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <Button variant="whatsapp" className="w-full sm:w-auto">
                 Chamar no WhatsApp Agora
               </Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-brand-black mb-6">Orçamento Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="(11) 99999-9999"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Onde está o veículo?</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="Bairro ou Rua"
                    value={formState.location}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Para onde vai?</label>
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="Destino"
                    value={formState.destination}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="Detalhes do problema (ex: pneu furado, bateria, colisão)"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <Button type="submit" fullWidth className="mt-4">
                Enviar Pedido de Guincho
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Ao enviar, você concorda em ser contatado via WhatsApp/Telefone.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};