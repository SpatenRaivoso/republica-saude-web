
import React from 'react';

const testimonials = [
  {
    content: "O melhor lugar para quem busca uma alimentação consciente! Frequento o República da Saúde quase todos os dias e nunca me canso dos sabores incríveis que eles criam com ingredientes naturais.",
    author: "Ana Carolina",
    role: "Nutricionista"
  },
  {
    content: "Desde que descobri o República da Saúde, minha relação com a comida mudou. Os pratos são deliciosos, saudáveis e o atendimento é excepcional. Recomendo especialmente o bowl de proteínas!",
    author: "Roberto Mendes",
    role: "Professor de Educação Física"
  },
  {
    content: "Como pessoa com restrições alimentares, sempre foi difícil comer fora de casa. No República da Saúde encontrei um cardápio variado com opções sem glúten deliciosas. Um alívio!",
    author: "Camila Alves",
    role: "Designer"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-natural-500 text-lg max-w-3xl mx-auto">
            A opinião de quem já experimentou nossa comida é nossa melhor recomendação. 
            Veja o que dizem sobre a experiência República da Saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-natural-50 p-8 rounded-xl border border-natural-200 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quotation mark */}
              <div className="absolute top-4 left-4 text-natural-200 text-6xl font-serif opacity-50">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-natural-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-natural-600">{testimonial.author}</p>
                  <p className="text-natural-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
