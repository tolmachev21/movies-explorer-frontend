import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function SavedMovies() {
  return (
    <section className="page">
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies__container"></div>
    </section>
  )
};

export default SavedMovies;