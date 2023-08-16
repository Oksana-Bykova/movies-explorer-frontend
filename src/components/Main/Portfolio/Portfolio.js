import React from "react";
import image from "../../../images/text__COLOR_font-main.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/Oksana-Bykova/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              className="portfolio__image"
              src={image}
              alt="Картинка стрелочка (ссылка)"
            ></img>
          </a>
          
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://oksana-bykova.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              className="portfolio__image"
              src={image}
              alt="Картинка стрелочка (ссылка)"
            ></img>
          </a>
          
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/Oksana-Bykova/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              className="portfolio__image"
              src={image}
              alt="Картинка стрелочка (ссылка)"
            ></img>
          </a>
        </li>  
      </ul>
    </section>
  );
}

export default Portfolio;
