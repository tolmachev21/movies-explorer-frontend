import React from "react";
import './AboutMe.css';
import TitleOfPages from "../../MyComponents/TitleOfPages";
import imageMe from '../../../images/logo.svg';

function AboutMe() {
  return (
    <section className="student page-main">
      <TitleOfPages title="Студент" />
      <div className="student__container">
        <div className="student__container-text">
          <h2 className="student__name">Виктор</h2>
          <p className="student__about">Фронтенд-разработчик, 21 год</p>
          <p className="student__text">Я родился и живу в Екатеринбурге, учусь на 4 курсе УГМУ на факультете Клинической психологии. С 7 лет занимался бально-спортивными танцами. Сейчас работаю преподавтелем в танцевальном клубе. Начав работать в 17 лет в этой сфере, набрался опыта и в преподавании, и в продажах, и в бизнесе. Недавно начал кодить, выполнил несколько фриланс-заказов и хочу развиваться в этом и дальше. </p>
          <a className="student__link">Github</a>
        </div>
        <img className="student__image" src={imageMe} alt="Аватар"></img>
      </div>
    </section>
  )
};

export default AboutMe;