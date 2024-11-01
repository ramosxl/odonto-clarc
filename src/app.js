// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pagamentos, setPagametos] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [consultas, setConsultas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [historicosaude, setHistoricoSaude] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [tratamentos, setTratamentos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('URL_DA_SUA_API');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div>
      <h1>Dados da API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
