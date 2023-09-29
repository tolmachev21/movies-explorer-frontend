import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer page">
      <p className="footer__inscription">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__copyright">
        <p className="foooter__date">&#169; 2023</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/tolmachev21?tab=repositories">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;