
import React, { useState } from 'react';
import './index.scss'; 
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';


export default function Servicos() {
  const [quantidade, setQuantidade] = useState(5); 
  const itens = ['Canal', 'Extração', 'Ortodontia', 'Limpeza', 'Clareamento', 'Implante', 'Próteses', 'Restauração'];

  const verMais = () => {
    setQuantidade(prev => Math.min(prev + 3, itens.length));
  };

  const verMenos = () => {
    setQuantidade(5); 
  };

  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <ul className="lista">
          {itens.slice(0, quantidade).map((item, index) => (
            <li key={index} className="lista-item">
              {item}
            </li>
          ))}
          {quantidade < itens.length && quantidade === 5 && (
            <li className="lista-item ver-mais" onClick={verMais}>
              Ver mais
            </li>
          )}
          {quantidade >= 8 && (
            <li className="lista-item ver-menos" onClick={verMenos}>
              Ver menos
            </li>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
}


