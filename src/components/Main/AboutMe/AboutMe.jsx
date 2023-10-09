import React from "react";
import './AboutMe.css';
import TitleOfPages from "../../MyComponents/TitleOfPages/TitleOfPages";
import imageMe from '../../../images/my-photo.jpg';
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="student page-main" id="about-me">
      <TitleOfPages title="Студент" />
      <div className="student__container">
        <div className="student__container-text">
          <h2 className="student__name">Виктор</h2>
          <p className="student__about">Фронтенд-разработчик, 21 год</p>
          <p className="student__text">Я родился и живу в Екатеринбурге, учусь на 4 курсе УГМУ на факультете Клинической психологии. С 7 лет занимался бально-спортивными танцами. Сейчас работаю преподавтелем в танцевальном клубе. Начав работать в 17 лет в этой сфере, набрался опыта и в преподавании, и в продажах, и в бизнесе. Недавно начал кодить, выполнил несколько фриланс-заказов и хочу развиваться в этом и дальше. </p>
          <Link className="student__link" to="https://github.com/tolmachev21">Github</Link>
        </div>
        <img className="student__image" src={imageMe} alt="Аватар"></img>
      </div>
    </section>
  )
};

export default AboutMe;