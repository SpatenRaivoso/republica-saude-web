
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Vegan } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const dietLabels = {
  vegan: { label: "Vegano", bgColor: "bg-green-100 text-green-800" },
  vegetarian: { label: "Vegetariano", bgColor: "bg-emerald-100 text-emerald-800" },
  glutenFree: { label: "Sem Glúten", bgColor: "bg-amber-100 text-amber-800" },
  lowCarb: { label: "Low Carb", bgColor: "bg-blue-100 text-blue-800" }
};

const menuCategories = [
  {
    name: "Entradas",
    items: [
      {
        name: "Guacamole Fresco",
        description: "Abacate amassado na hora com limão, tomate, cebola roxa e coentro, servido com chips de batata doce",
        price: "R$ 24,90",
        dietaryInfo: ["vegan", "glutenFree"]
      },
      {
        name: "Homus de Beterraba",
        description: "Homus tradicional com toque de beterraba orgânica e pão pita integral tostado",
        price: "R$ 22,90",
        dietaryInfo: ["vegan"]
      },
      {
        name: "Bruschetta de Cogumelos",
        description: "Pão de fermentação natural com cogumelos salteados, alho e ervas frescas",
        price: "R$ 26,90",
        dietaryInfo: ["vegetarian"]
      }
    ]
  },
  {
    name: "Saladas",
    items: [
      {
        name: "Salada Power",
        description: "Mix de folhas, abacate, quinoa, amêndoas torradas e vinagrete de limão siciliano",
        price: "R$ 36,90",
        dietaryInfo: ["vegan", "glutenFree", "lowCarb"]
      },
      {
        name: "Salada Buddha",
        description: "Bowl com grão-de-bico, beterraba, abóbora assada, brócolis e molho tahine",
        price: "R$ 34,90",
        dietaryInfo: ["vegan", "glutenFree"]
      },
      {
        name: "Salada Protein",
        description: "Folhas verdes, ovo cozido, frango grelhado, quinoa e abacate com molho de iogurte e ervas",
        price: "R$ 38,90",
        dietaryInfo: ["glutenFree", "lowCarb"]
      }
    ]
  },
  {
    name: "Pratos Principais",
    items: [
      {
        name: "Bowl de Cogumelos",
        description: "Arroz integral, cogumelos salteados, espinafre, abóbora assada e molho de tahine",
        price: "R$ 42,90",
        dietaryInfo: ["vegan", "glutenFree"]
      },
      {
        name: "Wrap de Falafel",
        description: "Wrap integral com falafel caseiro, hummus, vegetais frescos e molho tahine",
        price: "R$ 32,90",
        dietaryInfo: ["vegan"]
      },
      {
        name: "Risoto de Quinoa",
        description: "Quinoa cremosa ao estilo risoto com aspargos, ervilhas e cogumelos",
        price: "R$ 46,90",
        dietaryInfo: ["vegetarian", "glutenFree"]
      },
      {
        name: "Salmão ao Pesto",
        description: "Filé de salmão grelhado com crosta de castanhas, pesto de manjericão e legumes da estação",
        price: "R$ 58,90",
        dietaryInfo: ["glutenFree", "lowCarb"]
      }
    ]
  },
  {
    name: "Bowls e Açaís",
    items: [
      {
        name: "Bowl de Açaí Premium",
        description: "Açaí cremoso com granola caseira, banana, morango e mel de florada",
        price: "R$ 28,90",
        dietaryInfo: ["vegetarian", "glutenFree"]
      },
      {
        name: "Smoothie Bowl Verde",
        description: "Base de abacate, espinafre e banana com toppings de coco, granola e sementes",
        price: "R$ 32,90",
        dietaryInfo: ["vegan"]
      },
      {
        name: "Pitaya Bowl",
        description: "Pitaya batida com banana, coberta com frutas frescas, coco ralado e granola sem glúten",
        price: "R$ 30,90",
        dietaryInfo: ["vegan", "glutenFree"]
      }
    ]
  },
  {
    name: "Bebidas",
    items: [
      {
        name: "Suco Verde Detox",
        description: "Couve, maçã verde, gengibre, limão e hortelã",
        price: "R$ 16,90",
        dietaryInfo: ["vegan", "glutenFree", "lowCarb"]
      },
      {
        name: "Golden Latte",
        description: "Leite de amêndoas com cúrcuma, canela, pimenta preta e mel",
        price: "R$ 14,90",
        dietaryInfo: ["vegetarian", "glutenFree"]
      },
      {
        name: "Kombucha Artesanal",
        description: "Bebida probiótica fermentada com sabores do dia (pergunte ao atendente)",
        price: "R$ 18,90",
        dietaryInfo: ["vegan", "glutenFree"]
      },
      {
        name: "Água de Coco Natural",
        description: "Coco verde gelado servido na hora",
        price: "R$ 12,90",
        dietaryInfo: ["vegan", "glutenFree", "lowCarb"]
      }
    ]
  },
  {
    name: "Sobremesas",
    items: [
      {
        name: "Brownie Proteico",
        description: "Brownie de chocolate com farinha de amêndoas, sem açúcar refinado",
        price: "R$ 18,90",
        dietaryInfo: ["vegetarian", "glutenFree", "lowCarb"]
      },
      {
        name: "Mousse de Abacate com Cacau",
        description: "Mousse cremoso de abacate com cacau 70%, adoçado com tâmaras",
        price: "R$ 22,90",
        dietaryInfo: ["vegan", "glutenFree"]
      },
      {
        name: "Cheesecake Raw",
        description: "Base de nozes e tâmaras com recheio de castanhas de caju e frutas vermelhas",
        price: "R$ 24,90",
        dietaryInfo: ["vegan", "glutenFree"]
      }
    ]
  }
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-natural-50 py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nosso Cardápio</h1>
          <p className="text-natural-500 text-lg text-center max-w-3xl mx-auto mb-8">
            Criações deliciosas que combinam sabor e nutrição para todos os momentos do seu dia
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(dietLabels).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <Badge variant="outline" className={`${value.bgColor} border-none`}>
                  {key === 'vegan' && <Vegan size={14} className="mr-1" />}
                  {value.label}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-custom">
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold mb-8 text-natural-600">{category.name}</h2>
              
              <div className="space-y-8">
                {category.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-natural-600">{item.name}</h3>
                        <div className="flex flex-wrap gap-2 my-2">
                          {item.dietaryInfo.map((diet) => (
                            <Badge key={diet} variant="outline" className={`${dietLabels[diet].bgColor} border-none`}>
                              {diet === 'vegan' && <Vegan size={14} className="mr-1" />}
                              {dietLabels[diet].label}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-natural-500">{item.description}</p>
                      </div>
                      <div className="font-semibold text-natural-600 whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                    {i < category.items.length - 1 && (
                      <Separator className="my-6 bg-natural-200" />
                    )}
                  </div>
                ))}
              </div>
              
              {index < menuCategories.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-24 h-1 bg-natural-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
