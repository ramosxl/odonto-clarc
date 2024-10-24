import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import QuemSomos from './pages/quemSomos';
import Servicos from './pages/servicos';
import Contato from './pages/contato';
import Login from './pages/adm/login';
import NotFound from './pages/notFound';
import PreConsulta from './pages/preConsulta';
import Painel from './pages/adm/painel';
import Individual from './pages/servicos/individual';



export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />}/>
        <Route path='/servicotal' element={<Individual />} />
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/adm/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/pre' element={<PreConsulta />} />
        <Route path='/p' element={<Painel />} />
      </Routes>
    </Router>
  );
}

