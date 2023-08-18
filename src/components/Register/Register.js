import React from "react";
import { Form } from "../Form/Form";
import "./Register.css";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(()=> {
    props.cleanErr();
  },[]);  

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const arr = {
      email: email,
      password: password,
      name: name,
    };
    props.onRegister(email, password, name);
  }

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
        handleSubmit={handleSubmit}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleName={handleName}
        valueEmail={email}
        valuePassword={password}
        valueName={name}
        spanErr="form__span-error-submit"
        err = {props.err}
      ></Form>
    </section>
    </main>
  );
}

export { Register };
