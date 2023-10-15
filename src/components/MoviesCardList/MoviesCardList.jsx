import React, { useEffect, useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";

function MoviesCardList({ name, cardFoundMovies, cardMovies, cardSavedMovies, loading, errorServer }) {

  const { pathname } = useLocation();
  const [count, setCount] = useState('');
  const displayedMovies = cardMovies.slice(0, count);

  function displayMovies() {
    const numberMovie = {
      initialRow: 16,
      additionalRow: 4,
    };

    if (window.innerWidth < 1280) {
      numberMovie.initialRow = 12;
      numberMovie.additionalRow = 3;
    };

    if (window.innerWidth < 1024) {
      numberMovie.initialRow = 8;
      numberMovie.additionalRow = 2;
    };

    if (window.innerWidth < 650) {
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

        if (window.innerWidth < 1024) {
          setCount(displayMovies().initialRow);
        };

        if (window.innerWidth < 650) {
          setCount(displayMovies().initialRow);
        };
      };

      window.addEventListener('resize', handlerDisplayMovies);

      return () => {
        window.removeEventListener('resize', handlerDisplayMovies);
      };
    };
  }, [pathname]);

  function handleClickAgain() {
    setCount(count + displayMovies().additionalRow);
  };

  return (
    <section className={`movies-card-list ${loading ? 'movies-card-list-for-preloader' : ''}`}>
      {loading ? <Preloader /> : (pathname === '/movies') ? displayedMovies.map((item) => {
        return (
          <MoviesCard
            cardSavedMovies={cardSavedMovies}
            key={item.id}
            film={item}
          />
        )
      }) : errorServer ?
        <span className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : ''}
      {pathname === '/movies' ? <div className="movies__container-again page"><button className="movies__button-agian" onClick={handleClickAgain}>Ещё</button></div> : ''}
    </section>
  );
};

export default MoviesCardList;