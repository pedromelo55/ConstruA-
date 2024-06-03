import React from "react";
import Logo from "../Assets/logo_construai.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contato</span>
          <span>Equipe</span>
          <span>Funcionalidades</span>
          <span>Sobre</span>
        </div>
        <div className="footer-section-columns">
          <span>(62)9999-9999</span>
          <span>contato@construai.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos de Serviços</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
