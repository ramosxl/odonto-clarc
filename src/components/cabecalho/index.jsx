import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Cabecalho(){
  return (
    <div className="cbc">
      <div className="logo">
        <Link to='/'><img src="/assets/images/odc.png" alt="Logo" /></Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link className='active' to='/'>Home</Link></li>
          <li className="nav-item"><Link className='active' to='/servicos'>Serviços</Link></li>
          <li className="nav-item"><Link className='active' to='/quemsomos'>Quem Somos</Link></li>
          <li className="nav-item">
            <Link className='btn-agende' to='/contato'>
              Agende Sua Pré Avaliação
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

