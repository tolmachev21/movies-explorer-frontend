import React from "react";
import './MoviesCard.css';

import image from '../../images/logo.svg';
import savedButton from '../../images/saved-button.svg';
import deleteButton from '../../images/delete.svg';

function ReturnDeleteButton({ cardSavedMovie, cardMovies }) {
  console.log(cardMovies)
  if (cardSavedMovie) {
    return <input className="movies-card__delete-button" id="delete" type="image" src={deleteButton} width="8px" height="8px" alt="Удалить фильм" />
  } else if (cardMovies) {
    return <input className="movies-card__saved-button" id="saved" type="image" src={savedButton} width="9px" height="7px" alt="Фильм сохранен" />
  } else {
    return <button className="movies-card__save-button" type="button">Сохранить</button>
  }
}

function MoviesCard({ cardSavedMovie, cardMovies }) {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={image} alt="Картинка" />
      {<ReturnDeleteButton cardSavedMovie={cardSavedMovie} cardMovies={cardMovies} />}
      <h3 className="movies-card__title">33 фильма о дизайне</h3>
      <p className="movies-card__time">1ч 17м</p>
    </div>
  )
};

export default MoviesCard;