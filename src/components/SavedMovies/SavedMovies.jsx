import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies({ name, cardSavedMovie, handleSearchSavedMovies }) {
  return (
    <section className="saved-movies">
      <SearchForm handleSearchSavedMovies={handleSearchSavedMovies} />
      <MoviesCardList name={name} cardSavedMovie={cardSavedMovie} />
      <div className="saved-movies__container"></div>
    </section>
  )
};

export default SavedMovies;