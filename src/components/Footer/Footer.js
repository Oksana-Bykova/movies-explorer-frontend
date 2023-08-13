import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__information">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <div className="footer__year">© 2023</div>
        <ul className="footer__list">
          <li className="footer__list-element">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer" 
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__list-element">
            <a
              href="https://github.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer" 
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
