import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const arr = {
      email: email,
      password: password,
    };
    props.onRegister(arr);
  }

  return (
    <main>
      <section className="login">
  
        <div className="form">
        <Link to="/">
          <img src={logo} alt="логотип" className="form__logo"></img>
        </Link>

        <h1 className="form__title">Рады видеть!</h1>
        <form className="form__form" onSubmit={handleSubmit}>
          
          <label className="form__label" htmlFor="email">
            Email
            <input
              type="email"
              className="form__input"
              name="email"
              id="email"
              minLength={2}
              maxLength={30}
              required
              onChange={props.handleChange}
              value={props.values}
            />
            <span className="form__error">{props.errSpan}</span>
          </label>

          <label className="form__label" htmlFor="password">
            Пароль
            <input
              type="password"
              className="form__input"
              name="password"
              id="password"
              minLength={2}
              maxLength={30}
              required
              onChange={props.handleChange}
              value={props.values}
            />
            <span className="form__error">{props.errSpan}</span>
          </label>
          <p className="form__span-error-submit">{props.err}</p>
          <button type="submit" className="form__button-login">
          Войти
          </button>
          <p className="form__span">Еще не зарегистрированы?
        <Link to="/signup" className="form__link">
          {" "}
          Регистрация
        </Link>
      </p>
        </form>
      </div>
      </section>
    </main>
  );
}

export { Login };
