import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-orange-500' : 'text-white'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O guincho funciona 24 horas?",
      answer: "Sim! Nossa equipe está de plantão 24 horas por dia, 7 dias por semana, inclusive feriados, para atender emergências na Zona Sul."
    },
    {
      question: "Quais tipos de veículos vocês atendem?",
      answer: "Atendemos carros de passeio (leves e blindados), motocicletas, vans e utilitários leves."
    },
    {
      question: "Vocês atendem apenas na Zona Sul?",
      answer: "Nosso foco principal é a Zona Sul de SP para garantir rapidez, mas atendemos regiões vizinhas e viagens intermunicipais sob consulta."
    },
    {
      question: "Posso pagar no cartão?",
      answer: "Sim, aceitamos cartões de crédito, débito e PIX para facilitar o pagamento no momento do atendimento."
    },
    {
      question: "Em quanto tempo o guincho chega?",
      answer: "O tempo varia conforme o trânsito e sua localização exata, mas nossa média na Zona Sul é de 30 a 45 minutos."
    }
  ];

  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};