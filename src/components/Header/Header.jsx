import React from "react";
import './Header.css';
import logo from '../../images/logo.svg'

function LoggedInContainer({ loggedIn }) {
  if (loggedIn) {
    return (
      <>
        <div className="header__container-movies">
          <a className="header__movies" href="#">Фильмы</a>
          <a className="header__movies" href="#">Сохраненные фильмы</a>
        </div>
        <button className="header__button-account">Аккаунт</button>
      </>
    )
  } else {
    return (
      <div className="header__container-auth">
        <a className="header__registration" href="#">Регистрация</a>
        <a className="header__authorization" href="#">Войти</a>
      </div>
    )
  }
};

function Header({ loggedIn }) {
  return (
    <header className="header page">
      <img className="header__logo" src={logo} alt="Логотип: зеленый кружок" />
      <LoggedInContainer loggedIn={loggedIn} />
    </header>
  );
};

export default Header;