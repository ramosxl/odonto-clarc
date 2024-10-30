  import React, { useState, useEffect } from 'react';
  import Cabecalho from '../../../components/cabecalho/index.jsx';
  import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
  import './index.scss';
  import { Link } from 'react-router-dom';
  import Footer from '../../../components/footer/index.jsx';
  import FooterADM from '../../../components/footerAdm/index.jsx';
  import { IoChevronBackOutline } from "react-icons/io5";


  export default function Painel() {
    return (
      <div className="painel">
        <Cabecalho_ADM />
        <Link to="/">
        <button type="button" className='voltar'><IoChevronBackOutline />Log Out</button>
        </Link>
        <h1 className='Nome'>Olá, --Nome Funcionário--!</h1> 
        <div className="fundo"> 
          <h1>Painel Administrativo</h1> 
          <Link to='/adm/preagendamentos'><button type='button' className='botao'>Gerenciar Pré-agendamentos</button></Link>
          <Link to='/adm/agenda'><button type='button' className='botao'>Gerenciar Agenda</button></Link>
          <Link to='/adm/pacientes'><button type='button' className='botao'>Gerenciar Pacientes Cadastrados</button></Link>
        </div>
        <FooterADM />
      </div>
    );
  }
