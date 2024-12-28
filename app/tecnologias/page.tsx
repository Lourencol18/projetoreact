'use client';
import tecnologias from '@/app/data/tecnologias.json';
import Card from '@/app/components/Card/Card';
import { Produto } from '../models/interfaces';

export default function TecnologiasPage() {
  // Função vazia apenas para satisfazer a interface do Card
  const addToCart = (produto: Produto) => {
    // Não faz nada pois não precisamos desta funcionalidade na página de tecnologias
  }

  return (
    <div>
      <h1>Tecnologias</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {tecnologias.map((tecnologia) => {
          // Convertendo tecnologia para o formato Produto
          const produto: Produto = {
            id: tecnologia.title, // usando title como id já que é único
            title: tecnologia.title,
            image: tecnologia.image,
            description: tecnologia.description,
            price: tecnologia.rating,
            category: 'tecnologia'
          }

          return (
            <Card
              key={produto.id}
              produto={produto}
              addToCart={addToCart}
            />
          )
        })}
      </div>
    </div>
  );
}