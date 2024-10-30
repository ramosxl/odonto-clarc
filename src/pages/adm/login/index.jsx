import React, { useState, useEffect } from 'react';
import Cabecalho from '../../../components/cabecalho/index.jsx';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index.jsx';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";
import { useState } from 'react';

import './index.scss'

import axios from 'axios'

export default function Login_ADM (){
    const [Login, setLogin] = useState ('');
    const [Senha, setSenha] = useEffect (true, false);


    async function logar () {
      const paramLogin = {
        "Login": cpf, 
        "Senha": aleatoria
      }
    }
     const url = 'http://192.168.0.25:8023/adm/login'; 
     let resp = axios.post(url, paramLogin);

     alert('Adiministrador(a) adicionado com sucesso. Id:' + resp.data.novoId);
  
  return (
    <div className="Login">
      <Cabecalho_ADM />
      <Link to="/">
      <button type="button" className='voltar'><IoChevronBackOutline />Voltar</button>
      </Link>
      <div className="fundo">
        <h1>Login ADM</h1>
        <input type="text" className="text" placeholder="Login" value={Login} onChange={e => setLogin(e.target.value)}/>
        <input type="password" className="text" placeholder="Senha" value={Senha} onChange={e => setSenha(e.target.value)}/>
        <button type="button" className='enviar' onClick={logar}>Entrar</button>
        <Link to='/adm/painel'>
        
        </Link>
      </div>
      <FooterADM />
    </div>
  );
}
