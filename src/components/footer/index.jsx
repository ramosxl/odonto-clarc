import React from 'react';
import './index.scss';

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
                <a href="" className="social"><FaTiktok /></a>
            </div>
            <a href="" className="agendar">Agende sua avaliação</a>
        </div>
        <div className="dir">
          <div className="endereco">
            <MdLocationPin />
            <p>Av. Paulo Guilguer Reimberg, 378</p>
          </div>
          <div className="telefone">
            <FaPhoneAlt />
            <p>(11) 974618123</p>
          </div>
        </div>
    </div>
  );
};

