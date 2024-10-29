import React from 'react';
import './index.scss'; 
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Zap from '../../components/whatsapp/index.jsx';

export default function Servicos() {
  const itens = ['Canal', 'Extração', 'Ortodontia', 'Limpeza', 'Clareamento', 'Implante', 'Próteses', 'Restauração', 'Cirurgia'];

  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <div className="lista">
          {itens.map((item, index) => (
            <div key={index} className="lista-item">
              {item}
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Zap/>
    </div>
  );
}
