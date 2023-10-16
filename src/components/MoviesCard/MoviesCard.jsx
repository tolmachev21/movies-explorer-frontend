import React, { useEffect, useState } from "react";
import './MoviesCard.css';

import savedButton from '../../images/saved-button.svg';
import deleteButton from '../../images/delete.svg';
import { Link, useLocation } from "react-router-dom";

function MoviesCard({ cardSavedMovies, film, savedMovies, deleteMovie }) {

  const { pathname } = useLocation();
  const [press, setPress] = useState(false);

  useEffect(() => {
    if (pathname === '/movies') {
      setPress(cardSavedMovies.some(movie => film.id === movie.movieId));
    };
  }, [cardSavedMovies, film.id, setPress, pathname]);

  function handleClick() {
    if (cardSavedMovies.some(movie => film.id === movie.movieId)) {
      setPress(true);
      savedMovies(film);
    } else {
      setPress(false);
      savedMovies(film);
    };
  };

  function ReturnDeleteButton({ press }) {
    if (pathname === '/saved-movies') {
      return <input className="movies-card__delete-button" id="delete" type="image" src={deleteButton} onClick={() => deleteMovie(film._id)} width="8px" height="8px" alt="Удалить фильм" />
    } else if (press) {
      return <input className="movies-card__saved-button" id="saved" type="image" src={savedButton} onClick={handleClick} width="9px" height="7px" alt="Фильм сохранен" />
    } else {
      return <button className="movies-card__save-button" type="button" onClick={handleClick}>Сохранить</button>
    }
  };

  function durationFilm(time) {
    if (time < 60) {
      return (`${time}м`);
    } else {
      return (`${Math.floor(time / 60)}ч ${time % 60}м`);
    };
  };

  return (
    <div className="movies-card">
      <Link to={film.trailerLink} target="_blank">
        <img className="movies-card__image" src={pathname === '/movies' ? `https://api.nomoreparties.co/${film.image.url}` : film.image} alt="Картинка" />
      </Link>
      {<ReturnDeleteButton press={press} />}
      <h3 className="movies-card__title">{film.nameRU}</h3>
      <p className="movies-card__time">{durationFilm(film.duration)}</p>
    </div>
  )
};

export default MoviesCard;