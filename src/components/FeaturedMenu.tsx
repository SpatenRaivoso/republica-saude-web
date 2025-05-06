
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Vegan } from 'lucide-react';

const dietLabels = {
  vegan: { label: "Vegano", bgColor: "bg-green-100 text-green-800" },
  vegetarian: { label: "Vegetariano", bgColor: "bg-emerald-100 text-emerald-800" },
  glutenFree: { label: "Sem Glúten", bgColor: "bg-amber-100 text-amber-800" },
  lowCarb: { label: "Low Carb", bgColor: "bg-blue-100 text-blue-800" }
};

const featuredDishes = [
  {
    name: "Bowl de Açaí Premium",
    description: "Açaí cremoso com granola caseira, banana, morango e mel de florada",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    price: "R$ 28,90",
    dietaryInfo: ["vegetarian", "glutenFree"]
  },
  {
    name: "Wrap de Falafel",
    description: "Wrap integral com falafel caseiro, hummus, vegetais frescos e molho tahine",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    price: "R$ 32,90",
    dietaryInfo: ["vegan"]
  },
  {
    name: "Salada Power",
    description: "Mix de folhas, abacate, quinoa, amêndoas torradas e vinagrete de limão siciliano",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
    price: "R$ 36,90",
    dietaryInfo: ["vegan", "glutenFree", "lowCarb"]
  }
];

const FeaturedMenu = () => {
  return (
    <section className="bg-natural-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente Nossos Destaques</h2>
          <p className="text-natural-500 text-lg max-w-3xl mx-auto">
            Conheça algumas das criações favoritas dos nossos clientes e descubra 
            por que somos referência em alimentação natural e saborosa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden border border-natural-200 hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {dish.dietaryInfo.map((diet) => (
                    <Badge key={diet} variant="outline" className={`${dietLabels[diet].bgColor} border-none`}>
                      {diet === 'vegan' && <Vegan size={14} className="mr-1" />}
                      {dietLabels[diet].label}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-natural-500 mb-4 text-sm">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-natural-600">{dish.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="/menu">
            <Button className="btn-primary">
              Ver Cardápio Completo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
