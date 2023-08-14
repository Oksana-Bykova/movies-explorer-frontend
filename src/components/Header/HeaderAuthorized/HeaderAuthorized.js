import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../../../images/iconicon.svg";
import "./HeaderAuthorized.css";

function HeaderAuthorized(props) {

  const [windowOuterWidth, setWindowOuterWidth] = React.useState(window.innerWidth);

useEffect(() => {
  function handleSize(){
    setWindowOuterWidth(window.innerWidth)
  }

  window.addEventListener("resize", handleSize
  );

  return() => window.removeEventListener("resize", handleSize
  );
})

  if (windowOuterWidth < 769) {
    function clickBurger() {
      const menuBtn = document.querySelector(".header-authorized__burger");
      const menu = document.querySelector(".header-authorized__menu");
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("header-authorized__menu_active");
        menuBtn.classList.toggle("active");
        menu.classList.toggle("header-authorized__opacity-menu");
      });
    }

    return (
      <div className="header-authorized">
        <button
          className="header-authorized__burger"
          type="button"
          onClick={clickBurger}
        ></button>
        <div className="header-authorized__menu">
          {/*<div className="header-authorized__opacity-menu"></div>*/}
          <nav className="header-authorized__nav">
            <ul className="header-authorized__ul-burger">
              <li className="header-authorized__li-burger">
                <Link to="/" className="header-authorized__link-burger">
                  Главная
                </Link>
              </li>
              <li className="header-authorized__li-burger">
                <Link to="/movies" className="header-authorized__link-burger">
                  Фильмы
                </Link>
              </li>
              <li className="header-authorized__li-burger">
                <Link
                  to="/saved-movies"
                  className="header-authorized__link-burger"
                >
                  Сохраненные фильмы
                </Link>
              </li>
              <li className="header-authorized__li-burger">
                <Link
                  to="/profile"
                  className="header-authorized__link-burger  header-authorized__link-burger_small"
                >
                  Аккаунт
                  <div className="header-authorized__container-icon">
                    <img src={icon} className="header-authorized__icon" alt="иконка пользователя"/ >
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <ul className="header-authorized">
      <li className="header-authorized__li">
        <Link to="/movies" className="header-authorized__link">
          {" "}
          Фильмы
        </Link>
      </li>

      <li className="header-authorized__li">
        <Link to="/saved-movies" className="header-authorized__link">
          {" "}
          Сохраненные фильмы
        </Link>
      </li>

      <li className="header-authorized__li">
        <Link to="/profile" className="header-authorized__link">
          {" "}
          Аккаунт
          <div className="header-authorized__container-icon">
            <img
              src={icon}
              className="header-authorized__icon"
              alt="картинка профиля - силуэт портрета человека"
            ></img>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export { HeaderAuthorized };
