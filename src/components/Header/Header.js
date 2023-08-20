import React from "react";
import logo from "../../images/logo.svg";
import { HeaderAuthorized } from "../Header/HeaderAuthorized/HeaderAuthorized";
import { HeaderLoginIn } from "../Header/HeaderLoginIn/HeaderLoginIn";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  let { pathname } = useLocation();

  return (
    <section className="header">
    <div
      className={`${
        pathname === "/" ? "header__login-in" : "header__authorized"
      } `}
    >
     <Link to="/">
     <img className="header__logo" alt="логотип" src={logo}></img>
     </Link> 
      
      <nav className="header__container">
        {props.loggedIn ? <HeaderAuthorized /> : <HeaderLoginIn />}
      </nav>
    </div>
    </section>
  );
}

export default Header;
