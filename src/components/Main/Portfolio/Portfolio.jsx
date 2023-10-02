import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';
import link from '../../../images/link.svg';

function Portfolio() {
  return (
    <section className="portfolio page-main">
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__links">
        <Link className="portfolio__link" to={'https://github.com/tolmachev21/how-to-learn'}>Статичный сайт <img className="portfolio__image" src={link} alt="Стелка--ссылка" /></Link>
        <Link className="portfolio__link" to={'https://github.com/tolmachev21/russian-travel'}>Адаптивный сайт <img className="portfolio__image" src={link} alt="Стелка--ссылка" /></Link>
        <Link className="portfolio__link" to={'https://github.com/tolmachev21/react-mesto-api-full-gha'}>Одностраничное приложение <img className="portfolio__image" src={link} alt="Стелка--ссылка" />  </Link>
      </div>
    </section>
  );
};

export default Portfolio;