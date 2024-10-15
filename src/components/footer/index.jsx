import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer(){
  return (
    <div className="footer">
        <div className="esq">
            <img src="/assets/images/odc-branca.png" alt="" className="logo" width={200} />
            <div className="social-icons">
                <a href="" className="social"><FaInstagram /></a>
                <a href="" className="social"><FaFacebookF /></a>
                <a href="" className="social"><FaLinkedinIn /></a>
            </div>
            <Link to='/contato'>
              <a href="" className="agendar">Agende Sua Pré Avaliação</a>
            </Link>
            
        </div>
        <div className="dir">
          <div className="endereco">
            <MdLocationPin />
            <p>Av. Paulo Guilguer Reimberg, 378</p>
          </div>
          <div className="telefone">
            <FaPhoneAlt />
            <p>(11) 97461-8123</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.408588454297!2d-46.71567572061772!3d-23.770485867278456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce492c09c36583%3A0x3678805288b49c4b!2sAv.%20Paulo%20Guilguer%20Reimberg%2C%20378%20-%20Jardim%20Maria%20Fernandes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004858-570!5e0!3m2!1spt-BR!2sbr!4v1729013562780!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
};

