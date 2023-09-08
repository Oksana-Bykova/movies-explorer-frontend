import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/Validation";
import "../Form/Form.css";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //если пользователь залогинен - он не должен попасть на страницу авторизации и регистрации
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!props.loggedIn) {
      navigate("/");
    }
  }, [props.loggedIn]);

  React.useEffect(() => {
    props.cleanErr();
  }, []);

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const { email, password } = values;

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(email, password);
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
                onChange={handleChange}
                value={email || ""}
              />
              <span className="form__error">{errors.email || ""}</span>
            </label>

            <label className="form__label" htmlFor="password">
              Пароль
              <input
                type="password"
                className="form__input"
                name="password"
                id="password"
                minLength={6}
                maxLength={30}
                required
                onChange={handleChange}
                value={password || ""}
              />
              <span className="form__error">{errors.password || ""}</span>
            </label>
            <p className="form__span-error-submit">{props.err}</p>
            <button
              type="submit"
              className={
                !isValid ? "form__button-disabled" : "form__button-login"
              }
              disabled={!isValid}
            >
              Войти
            </button>
            <p className="form__span">
              Еще не зарегистрированы?
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
