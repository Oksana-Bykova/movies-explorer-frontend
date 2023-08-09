import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../images/iconicon.svg";

function HeaderAuthorized(props) {
  const windowOuterWidth = window.outerWidth;
  console.log(windowOuterWidth);

  if (windowOuterWidth < 769) {
    function clickBurger() {
      const menuBtn = document.querySelector(".header-authorized__burger");
      const menu = document.querySelector(".header-authorized__menu");
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
    }

    return (
      <>
        <div className="header-authorized__burger" onClick={clickBurger}>
          <span className="header-authorized__span"></span>
          <span className="header-authorized__span"></span>
          <span className="header-authorized__span"></span>
        </div>
        <div className="header-authorized__menu">
          <nav>
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
                <Link to="/profile" className="header-authorized__link-burger">
                  Аккаунт
                  <div className="header-authorized__container-icon">
                    <img src={icon} className="header-authorized__icon"></img>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }

  return (
    <div className="header-authorized">
      <Link to="/movies" className="header-authorized__link">
        {" "}
        Фильмы
      </Link>
      <Link to="/saved-movies" className="header-authorized__link">
        {" "}
        Сохраненные фильмы
      </Link>
      <Link to="/profile" className="header-authorized__link">
        {" "}
        Аккаунт
        <div className="header-authorized__container-icon">
          <img src={icon} className="header-authorized__icon"></img>
        </div>
      </Link>
    </div>
  );
}

export { HeaderAuthorized };
