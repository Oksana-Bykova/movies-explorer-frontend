import React from "react";
import "./AboutMe.css";
import foto from "../../../images/foto.jpg";
import { Line } from "../../Line/Line";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <Line></Line>
      <div className="about-me__container">
        <div className="about-me__container-information">
          <h3 className="about-me__name">Оксана</h3>
          <span className="about-me__brief-information">
            Фронтенд-разработчик, 29 лет
          </span>
          <p className="about-me__information">
            Я живу в Самаре, закончила факультет экономики и управления СамГУПС в 2015 году.
            Замужем, есть сын. Люблю путешевствовать, много читаю и увлекаюсь спортом. Кодить
            начала с 2022 года, когда пришла на обучение в Практикум. Надеюсь найти работу в сфере IT после окончания курса и защиты диплома{" "}
          </p>
          <a
            href="https://github.com/Oksana-Bykova"
            className="about-me__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={foto}
          alt="Фотография разработчика"
        ></img>
      </div>
    </section>
  );
}

export default AboutMe;
