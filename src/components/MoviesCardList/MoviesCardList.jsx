import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ name, cardMovies, cardSavedMovie }) {
  return (
    <section className="movies-card-list">
      {name === "SavedMovies" ? <MoviesCard cardSavedMovie={cardSavedMovie} /> : <MoviesCard cardMovies={cardMovies} />}
      {name === "SavedMovies" ? <MoviesCard cardSavedMovie={cardSavedMovie} /> : <MoviesCard cardMovies={cardMovies} />}
      {name === "SavedMovies" ? <MoviesCard cardSavedMovie={cardSavedMovie} /> : <MoviesCard cardMovies={cardMovies} />}
    </section>
  );
};

export default MoviesCardList;