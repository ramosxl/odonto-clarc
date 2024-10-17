import React from 'react';
import './index.scss';

const data = [
  { "id": 1, "titulo": "Canal" },
  { "id": 2, "titulo": "Extração" },
  { "id": 3, "titulo": "Ortodontia" },
  { "id": 4, "titulo": "Limpeza" },
  { "id": 5, "titulo": "Clareamento" },
  { "id": 6, "titulo": "Implante" },
  { "id": 7, "titulo": "Próteses" },
  { "id": 8, "titulo": "Restauração" },
];

export default function Carrossel() {
  return (
    <div className="carrossel">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <h2>{item.titulo}</h2>
          </div>
        ))}
    </div>
  );
}
