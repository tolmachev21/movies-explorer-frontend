import React from "react";
import './Movies.css';
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <section className="movies page">
      <SearchForm />
      <div className="movies__container-again">
        <button className="movies__button-agian">Ещё</button>
      </div>
    </section>
  )
};

export default Movies;