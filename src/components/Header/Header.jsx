import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

import logo from '../../images/logo.svg'
import sideBar from '../../images/sidebar-menu.svg';
import closeBar from '../../images/Close.svg';

function LoggedInContainer({ loggedIn, openMenu, handleClosingMenu }) {
  if (loggedIn) {
    return (
      <nav className={`header__navigate ${openMenu ? "header__navigate_open" : ''}`}>
        <nav className="header__container-movies">
          <NavLink className="header__link" to={"/"} onClick={handleClosingMenu}>Главная</NavLink>
          <NavLink className="header__link" to={"/movies"} onClick={handleClosingMenu}>Фильмы</NavLink>
          <NavLink className="header__link" to={"/saved-movies"} onClick={handleClosingMenu}>Сохраненные фильмы</NavLink>
        </nav>
        <Link className="header__account" to={"/profile"} onClick={handleClosingMenu}>Аккаунт</Link>
        <input className="header__close-button"
          type="image"
          id="close"
          name="close"
          src={closeBar}
          alt="Закрыть меню"
          onClick={handleClosingMenu}
        />
      </nav>
    )
  } else {
    return (
      <nav className="header__container-auth">
        <Link className="header__registration" to={"/signup"}>Регистрация</Link>
        <Link className="header__authorization" to={"/signin"}>Войти</Link>
      </nav>
    )
  }
};

function Header({ loggedIn }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpeningMenu() {
    setOpenMenu(true);
  };

  function handleClosingMenu() {
    setOpenMenu(false);
  };

  return (
    <header className="header page">
      <Link className="header__logo-link" to={'/'}>
        <img className="header__logo" src={logo} alt="Логотип: зеленый кружок" />
      </Link>
      <LoggedInContainer loggedIn={loggedIn} openMenu={openMenu} handleClosingMenu={handleClosingMenu} />
      <input className="header__sidebar-button"
        id="sidebar"
        type="image"
        name="sidebar"
        src={sideBar}
        onClick={handleOpeningMenu}
        alt="Боковое меню" />
    </header>
  );
};

export default Header;