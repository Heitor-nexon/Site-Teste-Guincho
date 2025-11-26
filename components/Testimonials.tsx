import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carlos S.",
      text: "Precisei de guincho à noite na Zona Sul e o atendimento foi muito rápido. Cuidaram muito bem do meu carro. Recomendo demais!",
      role: "Motorista de App"
    },
    {
      name: "Mariana L.",
      text: "Serviço honesto, transparente e seguro. O motorista foi super educado e me explicou tudo. Salvou meu dia em Interlagos.",
      role: "Cliente Particular"
    },
    {
      name: "Roberto F.",
      text: "Chegaram no horário combinado e fizeram todo o processo com muito profissionalismo. Preço justo pelo serviço prestado.",
      role: "Proprietário de Oficina"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          O que dizem nossos clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-brand-black p-8 rounded-2xl relative">
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};