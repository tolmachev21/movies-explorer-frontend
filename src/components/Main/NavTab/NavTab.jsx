import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <div className="navigate">
      <h1 className="navigate__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <nav className="navigate__menu">
        <ul className="navigate__list">
          <li className="navigate__item"><a className="navigate__link" href="#promo">О проекте</a></li>
          <li className="navigate__item"><a className="navigate__link" href="#techs">Технологии</a></li>
          <li className="navigate__item"><a className="navigate__link" href="#about-me">Студент</a></li>
        </ul>
      </nav>
    </div>
  )
};

export default NavTab;