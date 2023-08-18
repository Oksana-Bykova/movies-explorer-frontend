import React from "react";
import { Form } from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const arr = {
      email: email,
      password: password,
    };
    props.onRegister(arr);
  }

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
          handleSubmit={handleSubmit}
          handleEmail={handleEmail}
          valueEmail={email}
          handlePassword={handlePassword}
          valuePassord={password}
        ></Form>
      </section>
    </main>
  );
}

export { Login };
