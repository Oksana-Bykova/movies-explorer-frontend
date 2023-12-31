import React from "react";
import { Line } from "../../Line/Line";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <Line></Line>
      <ul className="about-project__container">
        <li className="about-project__information">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__information">
          <p className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__diagram">
        <div className="about-project__backend">
          <span className="about-project__time-information-backend">
            1 неделя
          </span>
          <span className="about-project__span">Back-end</span>
        </div>
        <div className="about-project__frontend">
          <span className="about-project__time-information-frontend">
            4 недели
          </span>
          <span className="about-project__span">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
