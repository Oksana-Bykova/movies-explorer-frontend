import React from "react";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main>
      <section className="login">
        <Form
          title="Рады видеть!"
          buttonText="Войти"
          label="form__labelinvisible"
          link="Регистрация"
          path="/signup"
          span="Еще не зарегистрированы?"
          button="form__button-login"
        ></Form>
      </section>
    </main>
  );
}

export { Login };
