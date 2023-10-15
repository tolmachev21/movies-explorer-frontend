import React, { useCallback, useEffect, useState } from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import moviesApi from "../../utils/MoviesApi";

function Movies({ name, cardSavedMovies, setErrorForm, errorForm }) {

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
    setCardFoundMovies(foundMovies.filter((foundMovie) => {
      const searchName = foundMovie.nameRU.toLowerCase().includes(searchForInputMovie.toLowerCase());
      return shortMovies ? (searchName && foundMovie.duration <= 40) : searchName;
    }));
  }, []);

  function handleSearchMovies(searchForInputMovie) {
    setLoading(true);
    if (cardMovies.length === 0) {
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
      const searchForInputMovie = JSON.parse(localStorage.searchForInputMovie);
      const shortMovies = JSON.parse(localStorage.shortMovies);
      const foundMovies = JSON.parse(localStorage.foundMovies);
      setErrorServer(false);
      setFoundForInputMovie(searchForInputMovie);
      setShortMovies(shortMovies);
      setCardMovies(foundMovies);
      searchFilter(searchForInputMovie, shortMovies, foundMovies)
    };
  }, [searchFilter]);

  return (
    <section className="movies">
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        handlerShortMovies={handlerShortMovies}
        setErrorForm={setErrorForm}
        errorForm={errorForm}
        foundForInputMovie={foundForInputMovie}
      />
      <MoviesCardList
        cardMovies={cardMovies}
        cardFoundMovies={cardFoundMovies}
        errorServer={errorServer}
        name={name}
        cardSavedMovies={cardSavedMovies}
        loading={loading}
      />
    </section>
  )
};

export default Movies;