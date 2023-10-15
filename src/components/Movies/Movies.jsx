import React, { useCallback, useEffect, useState } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import moviesApi from "../../utils/MoviesApi";

function Movies({ cardSavedMovies, setErrorForm, errorForm, savedMovies }) {

  const [cardMovies, setCardMovies] = useState([]);
  const [cardFoundMovies, setCardFoundMovies] = useState([]);
  const [foundForInputMovie, setFoundForInputMovie] = useState('');
  const [shortMovies, setShortMovies] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  const searchFilter = useCallback((searchForInputMovie, shortMovies, foundMovies) => {
    localStorage.setItem('searchForInputMovie', JSON.stringify(searchForInputMovie));
    localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    setFoundForInputMovie(searchForInputMovie);
    setCardFoundMovies(foundMovies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(searchForInputMovie.toLowerCase());
      return shortMovies ? (searchName && movie.duration <= 40) : searchName;
    }));
  }, []);

  function handleSearchMovies(searchForInputMovie) {
    if (cardMovies.length === 0) {
      setLoading(true);
      moviesApi.getMovies()
        .then((res) => {
          setCardMovies(res);
          setErrorServer(false);
          searchFilter(searchForInputMovie, shortMovies, res);
        })
        .catch((err) => {
          setErrorServer(true);
          console.error(`Ошибка при поиске фильмов ${err}`)
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      searchFilter(searchForInputMovie, shortMovies, cardMovies);
    };
  };

  function handlerShortMovies() {
    if (shortMovies) {
      setShortMovies(false);
      searchFilter(foundForInputMovie, false, cardMovies);
    } else {
      setShortMovies(true);
      searchFilter(foundForInputMovie, true, cardMovies);
    };
  };

  useEffect(() => {
    if (localStorage.searchForInputMovie && localStorage.shortMovies && localStorage.foundMovies) {
      const searchForInputMovieInLocal = JSON.parse(localStorage.searchForInputMovie);
      const shortMoviesInLocal = JSON.parse(localStorage.shortMovies);
      const foundMoviesInLocal = JSON.parse(localStorage.foundMovies);
      setErrorServer(false);
      setFoundForInputMovie(searchForInputMovieInLocal);
      setShortMovies(shortMoviesInLocal);
      setCardMovies(foundMoviesInLocal);
      searchFilter(searchForInputMovieInLocal, shortMoviesInLocal, foundMoviesInLocal);
    };
  }, [searchFilter]);

  return (
    <section className="movies">
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        handlerShortMovies={handlerShortMovies}
        shortMovies={shortMovies}
        setErrorForm={setErrorForm}
        errorForm={errorForm}
        foundForInputMovie={foundForInputMovie}
      />
      <MoviesCardList
        cardFoundMovies={cardFoundMovies}
        errorServer={errorServer}
        cardSavedMovies={cardSavedMovies}
        loading={loading}
        savedMovies={savedMovies}
      />
    </section>
  )
};

export default Movies;