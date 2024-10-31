import React, { useState, useEffect } from 'react';
import Cabecalho from '../../../components/cabecalho/index.jsx';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index.jsx';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";

import './index.scss'

export default function Login_ADM() {
  return (
    <div className="Login">
      <Cabecalho_ADM />
      <Link to="/">
        <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
      </Link>
      <div className="fundo">
        <h1>Login ADM</h1>
        <input type="text" className="text" placeholder="Login"/>
        <input type="password" className="text" placeholder="Senha"/>
        <Link to='/adm/painel'>
        <button type="button" className='enviar'>Entrar</button>
        </Link>
      </div>
      <FooterADM />
    </div>
  );
}
