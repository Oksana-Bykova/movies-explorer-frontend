import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile(props) {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

function handleUpdateUser(evt) {
  evt.prevent.Default();
  props.handleUpdateUser ({
    name: name,
    email: email,
  });
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
              onChange={handleName}
            />
          </div>
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
              onChange={handleEmail}
            />
          </div>

          <button type="submit" className="profile__button" onClick={handleUpdateUser}>
            Редактировать
          </button>
        </form>
        <Link to="/signin" className="profile__link" onClick={props.onOut} >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
    </main>
  );
}

export { Profile };
