import React, { useEffect, useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

function MoviesCardList({ cardMovies, cardFoundMovies, cardSavedMovies, loading, errorServer, deleteMovie, savedMovies }) {

  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const displayedMovies = cardFoundMovies.slice(0, count);

  function displayMovies() {
    const numberMovie = {
      initialRow: 12,
      additionalRow: 3,
    };

    if (window.innerWidth < 1200) {
      numberMovie.initialRow = 8;
      numberMovie.additionalRow = 2;
    };

    if (window.innerWidth < 768) {
      numberMovie.initialRow = 5;
      numberMovie.additionalRow = 2;
    };

    return numberMovie;
  };

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(displayMovies().initialRow);
      function handlerDisplayMovies() {
        if (window.innerWidth >= 1280) {
          setCount(displayMovies().initialRow);
        };

        if (window.innerWidth < 1280) {
          setCount(displayMovies().initialRow);
        };

        if (window.innerWidth < 768) {
          setCount(displayMovies().initialRow);
        };
      };

      window.addEventListener('resize', handlerDisplayMovies);

      return () => {
        window.removeEventListener('resize', handlerDisplayMovies);
      };
    };
  }, [pathname, cardFoundMovies]);

  function handleClickAgain() {
    setCount(count + displayMovies().additionalRow);
  };

  return (
    <>
      <section className={`movies-card-list ${loading ? 'movies-card-list-for-preloader' : ''}`}>
        {loading ? <Preloader /> : (pathname === '/movies' && displayedMovies.length !== 0) ? displayedMovies.map((film) => {
          return (
            <MoviesCard
              cardSavedMovies={cardSavedMovies}
              deleteMovie={deleteMovie}
              key={film.id}
              film={film}
              savedMovies={savedMovies}
            />
          )
        }) : cardFoundMovies.length !== 0 ? cardFoundMovies.map((film) => {
          return (
            <MoviesCard
              deleteMovie={deleteMovie}
              key={film._id}
              film={film}
            />
          )
        }) : errorServer ? <span className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : (pathname === '/movies' && cardMovies.length === 0) ? '' : pathname === '/movies' ? <span className="movies-card-list__error">Фильмы не найдены</span> : <span className="movies-card-list__error">Нет сохраненных фильмов</span>}
      </section>
      {pathname === '/movies' ? <div className={`movies__container-again page`}><button className={`movies__button-agian ${count >= cardFoundMovies.length && 'movies__button-agian_hidden'}`} onClick={handleClickAgain}>Ещё</button></div> : ''}
    </>
  );
};

export default MoviesCardList;