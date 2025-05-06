
import React from 'react';

const Concept = () => {
  const conceptPoints = [
    {
      title: "Ingredientes Naturais",
      description: "Utilizamos apenas ingredientes frescos, orgânicos e locais sempre que possível, apoiando produtores da região."
    },
    {
      title: "Opções para Todos",
      description: "Oferecemos pratos veganos, vegetarianos, sem glúten e low carb para atender a diversas necessidades alimentares."
    },
    {
      title: "Sabor & Nutrição",
      description: "Nossos chefs especialistas combinam sabor excepcional com valor nutricional em cada prato que preparamos."
    },
    {
      title: "Sustentabilidade",
      description: "Comprometidos com práticas ecológicas, desde o cultivo dos alimentos até embalagens biodegradáveis."
    }
  ];

  return (
    <section id="conceito" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Conceito</h2>
          <p className="text-natural-500 text-lg max-w-3xl mx-auto">
            República da Saúde nasceu da paixão por uma alimentação que nutre o corpo e respeita o meio ambiente. 
            Nossa filosofia é simples: comida de verdade para uma vida melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-natural-600">Bem-Estar em Cada Prato</h3>
            <p className="text-natural-500 mb-8">
              Acreditamos que a alimentação é a base para uma vida saudável e plena. Por isso, cada refeição 
              no República da Saúde é cuidadosamente preparada para proporcionar não apenas um momento de prazer, 
              mas também de nutrição consciente.
            </p>
            <p className="text-natural-500">
              Nossa equipe é formada por profissionais apaixonados por gastronomia saudável, sempre em busca de 
              inovação e qualidade. Todos os nossos pratos são desenvolvidos com o auxílio de nutricionistas para 
              garantir o equilíbrio perfeito entre sabor e valor nutricional.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&h=768&q=80" 
              alt="Ingredientes frescos e naturais" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {conceptPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-natural-50 p-8 rounded-xl border border-natural-200 hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-4 text-natural-600">{point.title}</h4>
              <p className="text-natural-500">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;
