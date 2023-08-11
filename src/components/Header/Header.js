import React from "react";
import logo from "../../images/logo.svg";
import { HeaderAuthorized } from "../Header/HeaderAuthorized/HeaderAuthorized";
import { HeaderLoginIn } from "../Header/HeaderLoginIn/HeaderLoginIn";
import "./Header.css";

function Header(props) {
  return (
    <section
      className={`${
        props.loggedIn ? "header__authorized" : "header__login-in"
      }`}
    >
      <img className="header__logo" alt="логотип" src={logo}></img>
      <div className="header__container">
        {props.loggedIn ? <HeaderAuthorized /> : <HeaderLoginIn />}
      </div>
    </section>
  );
}

export default Header;
