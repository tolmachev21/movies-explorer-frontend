import React, { useState } from "react";
import './SearchForm.css';

import submitButton from '../../images/submit-button.svg'

function SearchForm({ handleSearch }) {

  const [film, setFilm] = useState('');

  function handleChangeFilm(evt) {
    setFilm(evt.target.value);
  };

  function onSearch(event) {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="search page">
      <form className="search__form" role="search" onSubmit={onSearch}>
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
            value="yes" />
          <label className="search__label-radio" htmlFor="short-film">Короткометражки</label>
        </fieldset>
      </form>
    </div>
  )
};

export default SearchForm;