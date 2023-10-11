import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer page">
      <p className="footer__inscription">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__copyright">
        <p className="footer__date">&#169; 2023</p>
        <div className="footer__links">
          <Link className="footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</Link>
          <Link className="footer__link" to="https://github.com/tolmachev21?tab=repositories" target="_blank">Github</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;