import React, { useContext, useState } from "react";
import './Profile.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile() {

  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function handleUpdateUserName(evt) {
    setUserName(evt.target.value);
  };

  function handleUpdateEmail(evt) {
    setEmail(evt.target.value);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form">
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
            maxLength="40" />
          </label>
          <label className="profile__label">Email<input className="profile__input"
            id="email"
            type="email"
            name="email"
            placeholder="Введите email"
            required
            value={email}
            onChange={handleUpdateEmail}
            minLength="2"
            maxLength="40" />
          </label>
        </fieldset>
        <button className="profile__button" type="submit">Редактировать</button>
        <button className="profile__button profile__button_color_red" type="button">Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;