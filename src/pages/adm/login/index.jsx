import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';

export default function Contato() {
  return (
    <div className="Contato">
      <Cabecalho />
      <button type="button" className='voltar'>Voltar</button>
      <div className="fundo">
        <div className="esq">
          <input type="text" className="text" placeholder="Nome" />
          <input type="text" className="text" placeholder="Sobrenome" />
          <input type="text" className="text" placeholder="E-mail" />
          <input type="text" className="text" placeholder="Telefone" />
          <input type="text" className="msg" placeholder="Deixe sua mensagem" />
          <button type="button" className='enviar'>Enviar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
