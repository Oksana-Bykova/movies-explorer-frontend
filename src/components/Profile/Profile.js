import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";
import {
  checkingPatternEmail,
  checkingPatternName,
} from "../../utils/CheckingPattern";

function Profile(props) {

  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();
  const { name, email } = values;

  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    resetForm();
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser, setValues]);

  function handleUpdateUser(evt) {
    evt.preventDefault();
    evt.target.className = "profile__button-disabled";
    props.handleUpdateUser({
      name: name,
      email: email,
    });
    //evt.target.disabled = "true";
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {name}</h1>
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
                required
                value={name || ""}
                onChange={handleChange}
              />
            </div>
            <span className="profile__span">{errors.name || checkingPatternName(name).message}</span>
            <div className="profile__form-container">
              <label className="profile__label">Email</label>
              <input
                type="email"
                className="profile__input"
                name="email"
                id="email"
                minLength={2}
                maxLength={30}
                required
                value={email || ""}
                onChange={handleChange}
              />
            </div>
            <span className="profile__span">{errors.email || checkingPatternEmail(email).message}</span>

            <button
              type="submit"
              className={
                !isValid ||
                checkingPatternEmail(email).invalid ||
                checkingPatternName(name).invalid? "profile__button-disabled" : "profile__button"
              }
              disabled={!isValid ||
                checkingPatternEmail(email).invalid ||
                checkingPatternName(name).invalid}
              onClick={handleUpdateUser}
            >
              Редактировать
            </button>
          </form>
          <Link to="/" className="profile__link" onClick={props.onOut}>
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </main>
  );
}

export { Profile };
