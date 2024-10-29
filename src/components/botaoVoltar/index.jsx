import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

export default function Voltar(){
  return (
    <div className="b-voltar">
      <button type="button" className='voltar'>
          <Link to="/adm/painel">
            <IoChevronBackOutline />Voltar
          </Link>
        </button>
    </div>
  );
};

