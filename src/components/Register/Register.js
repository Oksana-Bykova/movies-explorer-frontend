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
        link="Войти"
        span=" Уже зарегистрированы?"
        path="/signin"
        button="form__button"
      ></Form>
    </section>
    </main>
  );
}

export { Register };
