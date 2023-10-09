import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";

function Movies({ name, cardMovies }) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList cardMovies={cardMovies} name={name} />
      <div className="movies__container-again page">
        <button className="movies__button-agian">Ещё</button>
      </div>
    </section>
  )
};

export default Movies;