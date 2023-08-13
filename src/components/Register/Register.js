import React from "react";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <main>
    <section className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        label="form__label"
      ></Form>
      <p className="register__span">
        Уже зарегистрированы?
        <Link to="/signin" className="register__link">
          {" "}
          Войти
        </Link>
      </p>
    </section>
    </main>
  );
}

export { Register };
