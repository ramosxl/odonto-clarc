import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import QuemSomos from './pages/quemSomos';
import Servicos from './pages/servicos';
import Contato from './pages/contato';



export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />}/>
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}

