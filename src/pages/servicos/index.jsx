import React from 'react';
import './index.scss'; 
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Zap from '../../components/whatsapp/index.jsx';

export default function Servicos() {
  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
        <div className="lista">
          <div className="lista-item">Canal</div>
          <div className="lista-item">Extração</div>
          <div className="lista-item">Ortodontia</div>
          <div className="lista-item">Limpeza</div>
          <div className="lista-item">Clareamento</div>
          <div className="lista-item">Implante</div>
          <div className="lista-item">Próteses</div>
          <div className="lista-item">Restauração</div>
          <div className="lista-item">Cirurgia</div>
        </div>
      </div>
      <Footer />
      <Zap />
    </div>
  );
}
