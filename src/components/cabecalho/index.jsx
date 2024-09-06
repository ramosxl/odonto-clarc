import React from 'react';
import './index.scss';

export default function Cabecalho(){
  return (
    <div className="cbc">
      <div className="logo">
        <img src="/assets/images/ODC.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Quem Somos</a></li>
          <li className="nav-item"><a href="#">Serviços</a></li>
          <li className="nav-item">
            <a href="#" className="btn-agende">
              Agende Sua Avaliação
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

