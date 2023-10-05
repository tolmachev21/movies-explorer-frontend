import React from "react";
import './MoviesCard.css';
import image from '../../images/logo.svg'


function MoviesCard() {
  return (
    <div className="movies-card">
        <img className="movies-card__image" src={image} alt="Картинка" />
        <button className="movies-card__saved-button" type="button">Сохранить</button>
        <h3 className="movies-card__title">33 фильма о дизайне</h3>
        <p className="movies-card__time">1ч 17м</p>
    </div>
  )
};

export default MoviesCard;