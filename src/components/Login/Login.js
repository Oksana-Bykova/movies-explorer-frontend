import React from "react";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        label="form__labelinvisible"
      ></Form>
      <p className="form__span">
        Еще не зарегистрированы?
        <Link to="/signup" className="form__link">
          {" "}
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export { Login };
