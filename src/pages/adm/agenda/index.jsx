import React, { useState, useEffect } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";

const agendamentos = [
  { nome: "João Silva", telefone: "5512345678", horario: "16:00", data: "2024-11-01" },
  { nome: "Maria Oliveira", telefone: "5511914817025", horario: "11:00", data: "2024-10-31" },
  { nome: "Pedro Santos", telefone: "5545678901", horario: "14:00", data: "2024-10-31" },
];

export default function PreAgenda() {
  const [minDate, setMinDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const filteredAgendamentos = agendamentos.filter(
    (agendamento) => agendamento.data === selectedDate
  );

  const defaultMessage = `Olá, gostaria de confirmar o seu agendamento para o dia ${selectedDate}.`;

  return (
    <div className="agenda">
      <Cabecalho_ADM />
      <Link to="/adm-painel">
      <button type="button" className='voltar'>
        <IoChevronBackOutline />Voltar
      </button>
      </Link>
      <div className="fundo">
        <h2>Consultas Marcadas</h2>
        <input
          type="date"
          className="data"
          min={minDate}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className="adicionar-agendamento">
          <Link to="/adm/adicionar-agendamento">Adicionar Agendamento</Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Horário</th>
              <th>Agendamento</th>
            </tr>
          </thead>
          <tbody>
            {filteredAgendamentos.length > 0 ? (
              filteredAgendamentos.map((agendamento, index) => (
                <tr key={index}>
                  <td>{agendamento.nome}</td>
                  <td className="telefone">
                    <a
                      href={`https://wa.me/${agendamento.telefone}?text=${encodeURIComponent(defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {agendamento.telefone}
                    </a>
                  </td>
                  <td>{agendamento.horario}</td>
                  <td>{agendamento.data}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum agendamento para a data selecionada</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <FooterADM />
    </div>
  );
}
