import React from "react";
import logo from "../../images/logo.svg";

function Form(props) {
  return (
    <>
      <div className="form__container">
        <img src={logo} alt="логотип" className="form__logo"></img>
        <h1 className="form__title">{props.title}</h1>
        <form className="form__form" onSubmit={props.handleSubmit}>

        <label className={props.label}>
            Имя
            <input
              type="text"
              className="form__input"
              name="email"
              id="email"
              minLength={2}
              maxLength={30}
              required=""
              onChange={props.handleEmail}
              value={props.valueEmail}
            />
          </label>

          <label className="form__label">
            Email
            <input
              type="text"
              className="form__input"
              name="email"
              id="email"
              minLength={2}
              maxLength={30}
              required=""
              onChange={props.handleEmail}
              value={props.valueEmail}
            />
          </label>

          <label className="form__label">
          Пароль
            <input
              type="text"
              className="form__input"
              name="password"
              id="password"
              minLength={2}
              maxLength={30}
              required=""
              onChange={props.handlePassword}
              value={props.valuePassword}
            />
          </label>
          <button type="submit" className="form__button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </>
  );
}

export { Form };
