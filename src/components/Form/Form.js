import React from "react";
import logo from "../../images/logo.svg";
import "./Form.css";
import { Link } from "react-router-dom";

function Form(props) {
  return (
    <>
      <div className="form">
        <Link to="/">
          <img src={logo} alt="логотип" className="form__logo"></img>
        </Link>

        <h1 className="form__title">{props.title}</h1>
        <form className="form__form" onSubmit={props.handleSubmit}>
          <label className={props.label} htmlFor="name">
            Имя
            <input
              type="text"
              className="form__input"
              name="name"
              id="name"
              minLength={2}
              maxLength={30}
              
              onChange={props.handleName}
              value={props.valueName}
            />
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
              onChange={props.handleEmail}
              value={props.valueEmail}
            />
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
              onChange={props.handlePassword}
              value={props.valuePassword}
            />
          </label>
          <button type="submit" className={props.button}>
            {props.buttonText}
          </button>
          <p className="form__span">{props.span}
        <Link to={props.path} className="form__link">
          {" "}
          {props.link}
        </Link>
      </p>
        </form>
      </div>
    </>
  );
}

export { Form };
