import React from "react";
import './MoviesCard.css';

import savedButton from '../../images/saved-button.svg';
import deleteButton from '../../images/delete.svg';

function ReturnDeleteButton({ cardSavedMovie, film }) {
  if (cardSavedMovie) {
    return <input className="movies-card__delete-button" id="delete" type="image" src={deleteButton} width="8px" height="8px" alt="Удалить фильм" />
  } else if (film) {
    return <input className="movies-card__saved-button" id="saved" type="image" src={savedButton} width="9px" height="7px" alt="Фильм сохранен" />
  } else {
    return <button className="movies-card__save-button" type="button">Сохранить</button>
  }
};

function durationFilm(time) {
  const perem = time;
  if (perem < 60) {
    return (`${perem}м`);
  } else {
    return (`${Math.floor(perem / 60)}ч ${perem % 60}м`);
  };
};

function MoviesCard({ cardSavedMovie, film, handleSearch }) {

  return (
    <div className="movies-card">
      <img className="movies-card__image" src={`https://api.nomoreparties.co/${film.image.url}`} alt="Картинка" />
      {<ReturnDeleteButton cardSavedMovie={cardSavedMovie} cardMovies={film} />}
      <h3 className="movies-card__title">{film.nameRU}</h3>
      <p className="movies-card__time">{durationFilm(film.duration)}</p>
    </div>
  )
};

export default MoviesCard;