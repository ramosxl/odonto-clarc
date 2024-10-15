import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


import { FaWhatsapp } from 'react-icons/fa';

export default function Zap(){
  return (
    <div className="zap">
        <Link to='#'>
            <FaWhatsapp/>
        </Link>
    </div>
  );
};

