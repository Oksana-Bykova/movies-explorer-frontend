import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";

function Profile(props) {

  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
  const { name, email} = values;

  //const [name, setName] = React.useState("");
 // const [email, setEmail] = React.useState("");
  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues ({
      name:currentUser.name,
      email: currentUser.email
    });
  }, [currentUser, setValues]);

  //function handleName(evt) {
  //  setName(evt.target.value);
  //}

 // function handleEmail(evt) {
 //   setEmail(evt.target.value);
 // }

function handleUpdateUser(evt) {
  evt.preventDefault();
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
              onChange={handleChange}
            />
          </div>
          <span className="profile__span">{errors.name || "" }</span>
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
          <span className="profile__span">{errors.email || "" }</span>

          <button type="submit" className="profile__button" onClick={handleUpdateUser}>
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__link" onClick={props.onOut} >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
    </main>
  );
}

export { Profile };
