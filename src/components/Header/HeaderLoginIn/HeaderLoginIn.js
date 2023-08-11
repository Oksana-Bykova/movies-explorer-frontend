import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLoginIn.css";

function HeaderLoginIn() {
  return (
    <div>
      <Link to="/signup" className="header-login-in__link">
        {" "}
        Регистрация
      </Link>
      <Link to="/signin" className="header-login-in__button">
        {" "}
        Войти
      </Link>
    </div>
  );
}

export { HeaderLoginIn };
