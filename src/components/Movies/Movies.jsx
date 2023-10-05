import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function Movies() {
  return (
    <section className="page">
      <SearchForm />
      <MoviesCardList />
      <div className="movies__container-again">
        <button className="movies__button-agian">Ещё</button>
      </div>
    </section>
  )
};

export default Movies;