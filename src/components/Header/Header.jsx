import React from "react";
import './Header.css';
import logo from '../../images/logo.svg'
import { Link } from "react-router-dom";

function LoggedInContainer({ loggedIn }) {
  if (loggedIn) {
    return (
      <>
        <div className="header__container-movies">
          <Link className="header__movies" to={"/movies"}>Фильмы</Link>
          <Link className="header__movies" to={"/saved-movies"}>Сохраненные фильмы</Link>
        </div>
        <Link className="header__account" to={"/profile"}>Аккаунт</Link>
      </>
    )
  } else {
    return (
      <div className="header__container-auth">
        <Link className="header__registration" to={"/signup"}>Регистрация</Link>
        <Link className="header__authorization" to={"/signin"}>Войти</Link>
      </div>
    )
  }
};

function Header({ loggedIn }) {
  return (
    <header className="header page">
      <Link className="header__link" to={'/'}>
        <img className="header__logo" src={logo} alt="Логотип: зеленый кружок" />
      </Link>
      <LoggedInContainer loggedIn={loggedIn} />
    </header>
  );
};

export default Header;