import React, { useContext, useEffect, useState } from "react";
import './Profile.css';
import { EmailRegex } from "../../utils/constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ successfully, setSuccessfully, handleUpdateUser, handleExitUser, loading, setErrorForm, errorForm, setNumberErrorForm, numberErrorForm }) {

  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [errorInput, setErrorInput] = useState({});

  useEffect(() => {
    setUserName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser.name, currentUser.email])

  useEffect(() => {
    setErrorForm(false);
    setSuccessfully(false);
    setNumberErrorForm('')
  }, [setErrorForm, setSuccessfully, setNumberErrorForm]);

  function handleUpdateUserName(evt) {
    setUserName(evt.target.value);
    setErrorInput((allInputBefore) => {
      return { ...allInputBefore, [evt.target.name]: handleValidateInput(evt) }
    });
    handleVaildateForm(evt);
  };

  function handleUpdateEmail(evt) {
    setEmail(evt.target.value);
    setErrorInput((allInputBefore) => {
      return { ...allInputBefore, [evt.target.name]: handleValidateInput(evt) }
    });
    handleVaildateForm(evt);
  };

  function handleVaildateForm(evt) {
    setValid(evt.target.form.checkValidity());
    setErrorForm(false);
    setNumberErrorForm('')
    setSuccessfully(false);
    handleUniqData(evt);
  };

  function handleValidateInput(evt) {
    const validInput = !evt.target.validity.valid;
    return validInput;
  };

  function handleUniqData(evt) {
    const input = evt.target;
    if (currentUser.name === input.value) {
      setValid(false);
    };

    if (currentUser.email === evt.target.value) {
      setValid(false);
    };
  };

  function onUpdateUser(evt) {
    evt.preventDefault();
    handleUpdateUser({
      email: email,
      name: userName,
    });
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form" onSubmit={onUpdateUser} noValidate>
        <fieldset className="profile__container">
          <label className="profile__label">Имя<input className="profile__input"
            id="userName"
            type="text"
            name="user"
            placeholder="Введите имя"
            required
            value={userName}
            onChange={handleUpdateUserName}
            minLength="2"
            maxLength="40"
          />
            <span className={`profile__input-error ${errorInput.user ? 'profile__input-error_open' : ''}`}>Что-то пошло не так...</span>
          </label>
          <label className="profile__label">Email<input className="profile__input"
            id="email"
            type="email"
            name="email"
            pattern={EmailRegex}
            placeholder="Введите email"
            required
            value={email}
            onChange={handleUpdateEmail}
            minLength="2"
            maxLength="40"
          />
            <span className={`profile__input-error ${errorInput.email ? 'profile__input-error_open' : ''}`}>Что-то пошло не так...</span>
          </label>
          <span className={`profile__status ${(errorForm || numberErrorForm === '409') && 'profile__status_open_error'} ${successfully && 'profile__status_open_successfully'}`}>{numberErrorForm === '409' ? 'Пользователь с таким email уже существует' : errorForm ? 'При обновлении пользователя произошла ошибка' : successfully ? 'Обновление данных профиля выполнено успешно!' : ''}</span>
        </fieldset>
        <button className={`profile__button ${!valid || errorForm || loading || successfully ? 'profile__button_disabled' : ''}`} type="submit" disabled={!valid || errorForm || loading || successfully}>Редактировать</button>
        <button className="profile__button profile__button_color_red" type="button" onClick={handleExitUser}>Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;