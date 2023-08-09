import React from "react";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";


function Register() {
  return (
    <section className="register">
      
      <Form title="Добро пожаловать!" buttonText = "Зарегистрироваться" label ="form__label"></Form>
      <p className="form__span">
        Уже зарегистрированы?
        <Link to="/signin" className="form__link">
          {" "}
          Войти
        </Link>
      </p>
    </section>
  )
}

export { Register };
