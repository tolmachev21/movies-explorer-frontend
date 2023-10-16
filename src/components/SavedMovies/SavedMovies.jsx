import React, { useCallback, useEffect, useState } from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies({ cardSavedMovies, setErrorForm, errorForm, deleteMovie }) {

  const [cardFoundMovies, setCardFoundMovies] = useState(cardSavedMovies);
  const [foundForInputMovie, setFoundForInputMovie] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  const searchFilter = useCallback((searchForInputMovie, shortMovies, foundMovies) => {
    setFoundForInputMovie(searchForInputMovie);
    setCardFoundMovies(foundMovies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(searchForInputMovie.toLowerCase());
      return shortMovies ? (searchName && movie.duration <= 40) : searchName;
    }));
  }, []);

  function handleSearchMovies(searchForInputMovie) {
    searchFilter(searchForInputMovie, shortMovies, cardSavedMovies);
  };

  function handlerShortMovies() {
    if (shortMovies) {
      setShortMovies(false);
      searchFilter(foundForInputMovie, false, cardSavedMovies);
    } else {
      setShortMovies(true);
      searchFilter(foundForInputMovie, true, cardSavedMovies);
    };
  };


  useEffect(() => {
    searchFilter(foundForInputMovie, shortMovies, cardSavedMovies);
  }, [searchFilter, foundForInputMovie, shortMovies, cardSavedMovies]);



  return (
    <section className="saved-movies">
      <SearchForm
        handlerShortMovies={handlerShortMovies}
        handleSearchMovies={handleSearchMovies}
        shortMovies={shortMovies}
        setErrorForm={setErrorForm}
        errorForm={errorForm}
        foundForInputMovie={foundForInputMovie}
        cardSavedMovies={cardSavedMovies}
      />
      <MoviesCardList
        cardFoundMovies={cardFoundMovies}
        cardSavedMovies={cardSavedMovies}
        deleteMovie={deleteMovie}
      />
      <div className="saved-movies__container"></div>
    </section>
  )
};

export default SavedMovies;