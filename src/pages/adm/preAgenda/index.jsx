import React, { useState, useEffect } from 'react';
import Cabecalho from '../../../components/cabecalho/index.jsx';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index.jsx';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";


export default function PreAgenda() {

  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);
  return (
    <div className="preAgenda">
      <Cabecalho_ADM />
      <button type="button" className='voltar'>
        <Link to="/adm/painel">
          <IoChevronBackOutline />Voltar
        </Link>
      </button>
      <div className="fundo">
        <h2>Pré-Agendamentos</h2>
        <input
          type="date"
          className="data"
          min={minDate}
          id="dateInput"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Horário</th>
            <th>Agendamento</th>
          </tr>
        </thead>
      </table>
      <FooterADM />
    </div>
  );
}
