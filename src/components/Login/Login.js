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
        ></Form>
        <p className="login__span">
          Еще не зарегистрированы?
          <Link to="/signup" className="login__link">
            {" "}
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export { Login };
