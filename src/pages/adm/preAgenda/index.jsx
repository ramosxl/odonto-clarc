  import React, { useState, useEffect } from 'react';
  import Cabecalho from '../../../components/cabecalho/index.jsx';
  import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
  import './index.scss';
  import { Link } from 'react-router-dom';
  import Footer from '../../../components/footer/index.jsx';
  import FooterADM from '../../../components/footerAdm/index.jsx';
  import { IoChevronBackOutline } from "react-icons/io5";


  export default function preAgenda() {
    return (
      <div className="preAgenda">
        <Cabecalho_ADM />
        <Link to="/adm/painel">
        <button type="button" className='voltar'><IoChevronBackOutline />Sair</button>
        </Link>
        <div className="fundo"> 
          <h2>Pré-Agendamentos</h2>
          <input type="date" name="" className='data' />
          <button>Mostrar</button>
        </div>
        <FooterADM />
      </div>
    );
  }
