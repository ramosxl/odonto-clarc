import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="cbc">
      <div className="logo">
        <Link to='/'><img src="/assets/images/odc.png" alt="Logo" /></Link>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to='/' onClick={toggleMenu}>Home</Link></li>
          <li className="nav-item"><Link to='/servicos' onClick={toggleMenu}>Serviços</Link></li>
          <li className="nav-item"><Link to='/quemsomos' onClick={toggleMenu}>Quem Somos</Link></li>
          <li className="nav-item">
            <Link className='btn-agende' to='/contato' onClick={toggleMenu}>
              Agende Sua Pré Avaliação
            </Link>
          </li>
        </ul>
      </nav>
      <div id="mobile" onClick={toggleMenu}>
        {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>
    </div>
  );
}
