import React from "react";
//import { Form } from "../Form/Form";
import "./Register.css";
import {useFormWithValidation} from "../../utils/Validation";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../Form/Form.css";

function Register(props) {
  //const [email, setEmail] = React.useState("");
  //const [password, setPassword] = React.useState("");
  //const [name, setName] = React.useState("");

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  
  const { name, email, password} = values;

  React.useEffect(()=> {
    props.cleanErr();
  },[]);  

 // function handleEmail(evt) {
 //   setEmail(evt.target.value);
// }

 // function handlePassword(evt) {
 //   setPassword(evt.target.value);
 // }

 // function handleName(evt) {
 //   setName(evt.target.value);
 // }

  function handleSubmit(evt) {
    evt.preventDefault();
  //  const arr = {
  //    email: email,
   //   password: password,
  //    name: name,
   // };
   // props.onRegister(email, password, name);
   props.onRegister (email, password, name)
  }

  return (
    <main>
    <section className="register">
      <div className="form">
        <Link to="/">
          <img src={logo} alt="логотип" className="form__logo"></img>
        </Link>

        <h1 className="form__title">Добро пожаловать</h1>
        <form className="form__form" onSubmit= {handleSubmit}>
          <label className="form__label" htmlFor="name">
            Имя
            <input
              type="text"
              className="form__input"
              name="name"
              id="name"
              minLength={2}
              maxLength={30}
              required
              onChange={handleChange}
              value={name  || ""}
            />
            <span className="form__error">{errors.name || "" }</span>
          </label>

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
              value={email  || ""}
            />
            <span className="form__error">{errors.email || "" }</span>
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
              value={password  || ""}
            />
            <span className="form__error">{errors.password || "" }</span>
          </label>

          <p className="form__span-error-submit">{props.err}</p>
          <button type="submit" className={!isValid ? "form__button-disabled" :"form__button-login"} disabled = { !isValid}>
          Зарегистрироваться
          </button>
          <p className="form__span">Уже зарегистрированы?
        <Link to="/signin" className="form__link">
          {" "}
          Войти
        </Link>
      </p>
        </form>
      </div>
    </section>
    </main>
  );
}

export { Register };
