import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { EmailRegex } from "../../../utils/constants";
import './SectionRegisterOrLogin.css';
import LogoOfPages from '../LogoOfPages/LogoOfPages.jsx'

function SectionRegisterOrLogin({ nameForm, userName, email, password, handleChangeName, handleChangeEmail, handleChangePassword, onSubmit, loading, errorInput, valid, setErrorForm, errorForm }) {

  useEffect(() => {
    setErrorForm(false);
  }, [setErrorForm]);

  return (
    <section className="registration-or-login">
      <LogoOfPages />
      <h1 className="registration-or-login__title">{nameForm === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className="registration-or-login__form" method="post" onSubmit={onSubmit} noValidate>
        <fieldset className="registration-or-login__input-container">
          {nameForm === 'signup' && <label className="registration-or-login__input-label">Имя
            <input className="registration-or-login__input"
              id="userName"
              type="text"
              name="user"
              placeholder="Введите имя"
              required
              value={userName}
              onChange={handleChangeName}
              minLength="2"
              maxLength="40"
              autoComplete="off"
            />
            <span className={`registration-or-login__input-error ${errorInput.user ? 'registration-or-login__input-error_open' : ''}`}>Что-то пошло не так...</span>
          </label>}
          <label className="registration-or-login__input-label">Email
            <input className="registration-or-login__input"
              id="email"
              type="email"
              name="email"
              pattern={EmailRegex}
              placeholder="Введите email"
              required
              value={email}
              onChange={handleChangeEmail}
              minLength="2"
              maxLength="40"
              autoComplete="off"
            />
            <span className={`registration-or-login__input-error ${errorInput.email ? 'registration-or-login__input-error_open' : ''}`}>Что-то пошло не так...</span>
          </label>
          <label className="registration-or-login__input-label">Пароль
            <input className="registration-or-login__input"
              id="password"
              type="password"
              name="password"
              placeholder="Введите пароль"
              required
              value={password}
              onChange={handleChangePassword}
              minLength="8"
              maxLength="40"
              autoComplete="off"
            />
            <span className={`registration-or-login__input-error ${errorInput.password ? 'registration-or-login__input-error_open' : ''}`}>Что-то пошло не так...</span>
          </label>
          <span className={`registration-or-login__error ${errorForm && 'registration-or-login__error_open'}`}>При отправке запроса произошла ошибка</span>
        </fieldset>
        <button className={`registration-or-login__button ${nameForm === 'signup' ? "" : "registration-or-login__button-signin"} ${!valid || errorForm || loading ? 'registration-or-login__button_disabled' : ''}`} type="submit" disabled={!valid || errorForm || loading}>{nameForm === 'signup' ? 'Зарегистрироваться' : 'Войти'}</button>
        <p className="registration-or-login__subtext">{nameForm === 'signup' ? 'Уже зарегистрировны?' : 'Ещё не зарегистрированы?'} <Link className="registration-or-login__link" to={nameForm === 'signup' ? '/signin' : '/signup'} replace>{nameForm === 'signup' ? 'Войти' : 'Регистрация'}</Link></p>
      </form>
    </section>
  );
};

export default SectionRegisterOrLogin;