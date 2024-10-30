import React, { useState, useEffect } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";

const agendamentos = [
  { nome: "João Silva", telefone: "5512345678", horario: "10:00", data: "2024-10-31" },
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
    <div className="preAgenda">
      <Cabecalho_ADM />
      <button type="button" className="voltar">
        <Link to="/adm/painel">
          <IoChevronBackOutline /> Voltar
        </Link>
      </button>
      <div className="fundo">
        <h2>Pré-Agendamentos</h2>
        <input
          type="date"
          className="data"
          min={minDate}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
                  
                    <a
                      href={`https://wa.me/${agendamento.telefone}?text=${encodeURIComponent(defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <td className='telefone'>
                      {agendamento.telefone}
                      </td>
                    </a>
                  
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
