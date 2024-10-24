import React, { useState } from 'react';
import './index.scss'; 
import { Link } from 'react-router-dom';
import Cabecalho from '../../../components/cabecalho';
import Footer from '../../../components/footer';
import { IoChevronBackOutline } from "react-icons/io5";


export default function Individual() {
  return (
    <div className="Servicos">
      <Cabecalho />
      <div className="faixa">
        <h1>Serviços</h1>
      </div>
      <div className="itens">
      <Link to="/">
        <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
      </Link>
      </div>
      <Footer />
    </div>
  );
}


