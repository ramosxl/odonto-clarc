import React, { useState, useEffect } from 'react';
import Cabecalho_ADM from '../../../components/cabecalhoAdm/index.jsx';
import './index.scss';
import { Link } from 'react-router-dom';
import FooterADM from '../../../components/footerAdm/index.jsx';
import { IoChevronBackOutline } from "react-icons/io5";

const agendamentos = [
  { nome: "João Silva", telefone: "5511914817025", horario: "10:00", data: "2024-10-29" },
  { nome: "Maria Oliveira", telefone: "5511914817025", horario: "11:00", data: "2024-10-30" },
  { nome: "Pedro Santos", telefone: "5511998399386", horario: "14:00", data: "2024-10-29" },
];

export default function PreAgenda() {
  const [minDate, setMinDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHorario, setNewHorario] = useState('');
  const [newData, setNewData] = useState('');
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleAddAgendamento = () => {
    if (newHorario && newData) {
      // Aqui você pode adicionar a lógica para salvar o novo agendamento
      console.log(`Agendamento adicionado: ${selectedPaciente.nome}, ${newHorario}, ${newData}`);
      setIsModalOpen(false);
      setNewHorario('');
      setNewData('');
    }
  };

  const defaultMessage = `Olá, sou da OdontoClarc! Estou aqui para agendar sua consulta.`;

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
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Horário</th>
              <th>Agendamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.length > 0 ? (
              agendamentos.map((agendamento, index) => (
                <tr key={index}>
                  <td>{agendamento.nome}</td>
                  <td className='telefone'>
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
                  <td>
                    <button onClick={() => { setSelectedPaciente(agendamento); setIsModalOpen(true); }}>
                      Adicionar Agendamento
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhum agendamento disponível</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
              <h2>Adicionar Agendamento para {selectedPaciente?.nome}</h2>
              <label>
                Horário:
                <input
                  type="time"
                  value={newHorario}
                  onChange={(e) => setNewHorario(e.target.value)}
                  min="08:00"
                  max="17:00"
                  required
                />
              </label>
              <label>
                Data:
                <input
                  type="date"
                  value={newData}
                  onChange={(e) => setNewData(e.target.value)}
                  min={minDate}
                  required
                />
              </label>
              <button onClick={handleAddAgendamento}>Salvar Agendamento</button>
            </div>
          </div>
        )}
      </div>

      <FooterADM />
    </div>
  );
}
