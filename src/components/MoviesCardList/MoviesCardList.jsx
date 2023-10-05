import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Movies/Preloader/Preloader.jsx'



function MoviesCardList() {
  return (
    <div className="movies-card-list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
    </div>
  );
};

export default MoviesCardList;