import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


import { FaWhatsapp } from 'react-icons/fa';

export default function Zap(){

  const numero = "5511998399386"; 
  const mensagem = "Olá! Gostaria de mais informações."; 
  const encodedMessage = encodeURIComponent(mensagem); 

  return (
    <div className="zap">
        <Link to={`https://wa.me/${numero}?text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp/>
        </Link>
    </div>
  );
};

