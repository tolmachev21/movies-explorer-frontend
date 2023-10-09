import React from "react";
import './Techs.css';
import TitleOfPages from "../../MyComponents/TitleOfPages/TitleOfPages";

function Techs() {
  return (
    <section className="techs-wrapper">
      <div className="techs" id="techs">
        <TitleOfPages title="Технологии" />
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
};

export default Techs;