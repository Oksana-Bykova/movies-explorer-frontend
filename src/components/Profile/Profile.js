import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  const isLoggedIn = true;
  return (
    <section className="profile">
      <Header loggedIn={isLoggedIn}></Header>
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий</h1>
        <form className="profile__form">
          <div className="profile__form-container">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              className="profile__input"
              name="name"
              id="name"
              minLength={2}
              maxLength={30}
              required=""
            />
          </div>
          <div className="profile__form-container">
            <label className="profile__label">Email</label>
            <input
              type="text"
              className="profile__input"
              name="email"
              id="email"
              minLength={2}
              maxLength={30}
              required=""
            />
          </div>

          <button type="submit" className="profile__button">
            Редактировать
          </button>
        </form>
        <Link to="/signin" className="profile__link">Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export { Profile };
