import React, { useEffect, useState } from "react";
import './SearchForm.css';

import submitButton from '../../images/submit-button.svg'
import { useLocation } from "react-router-dom";

function SearchForm({ handlerShortMovies, handleSearchMovies, handleSearchSavedMovies, setErrorForm, errorForm, foundForInputMovie }) {

  const { pathname } = useLocation();
  const [film, setFilm] = useState('');

  useEffect(() => {
    if ((pathname === '/saved-movies')) {
      setFilm('');
    } else {
      setFilm(foundForInputMovie);
    };
    setErrorForm(false);
  }, [foundForInputMovie, setFilm, pathname, setErrorForm]);

  function handleChangeFilm(evt) {
    setFilm(evt.target.value);
    setErrorForm(false);
  };

  function onSearch(event) {
    event.preventDefault();
    if (event.target.search.value) {
      handleSearchMovies(event.target.search.value);
      setErrorForm(false);
    } else {
      setErrorForm(true);
      console.log(errorForm);

    }
  };

  return (
    <section className="search page">
      <form className="search__form" role="search" onSubmit={onSearch} noValidate>
        <fieldset className="search__fieldset">
          <input className="search__input"
            id="search"
            type="search"
            name="search"
            placeholder="Фильм"
            required
            value={film}
            onChange={handleChangeFilm} />
          <input className="search__submit-button"
            id="search"
            type="image"
            name="search-submit-button"
            required
            src={submitButton}
            alt="Кнопка отправки формы" />
        </fieldset>
        <fieldset className="search__fieldset">
          <input className="search__input-radio"
            id="short-film"
            type="checkbox"
            name="short-film"
            onChange={() => handlerShortMovies()}
          />
          <label className="search__label-radio" htmlFor="short-film">Короткометражки</label>
          <span className={`search__error ${errorForm && 'search__error_open'}`}>Введите ключевое слово</span>
        </fieldset>
      </form>
    </section>
  )
};

export default SearchForm;