import React, { useState, useEffect } from 'react';
import Cabecalho from '../../components/cabecalho';
import Faixa from '../../components/faixa';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index.jsx';

export default function NotFound() {
  return (
    <div className="NotFound">
      <img src="/assets/images/odc-min.png" alt="" />
      <h1>404</h1>
      <p>Página Não Encontrada</p>
      <Link to="/">
      <button className='voltar'>Voltar para a página inicial</button>
      </Link>
    </div>
  );
}
