import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho(){
  return (
    <div className="cbc">
      <div className="logo">
        <Link to='/'><img src="/assets/images/ODC.jpg" alt="Logo" /></Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to='/'>Home</Link></li>
          <li className="nav-item"><Link to='/servicos'>Serviços</Link></li>
          <li className="nav-item"><Link to='/quemsomos'>Quem Somos</Link></li>
          <li className="nav-item">
            <Link className='btn-agende' to='/contato'>
              Agende Sua Avaliação
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

