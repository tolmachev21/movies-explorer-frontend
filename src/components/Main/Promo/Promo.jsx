import React from "react";
import './Promo.css';
import TitleOfPages from "../../MyComponents/TitleOfPages/TitleOfPages";

function Promo() {
  return (
    <section className="promo page-main" id="promo">
      <TitleOfPages title="О проекте" name="promo" />
      <div className="promo__container">
        <h3 className="promo__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="promo__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="promo__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="promo__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="promo__time-bar">
        <p className="promo__time-bar-text promo__time-bar-text_color_green">1 неделя</p>
        <p className="promo__time-bar-text promo__time-bar-text_color_gray">4 недели</p>
        <p className="promo__time-bar-text promo__time-bar-text_color_black">Back-end</p>
        <p className="promo__time-bar-text promo__time-bar-text_color_black">Front-end</p>
      </div>
    </section>
  )
};

export default Promo;