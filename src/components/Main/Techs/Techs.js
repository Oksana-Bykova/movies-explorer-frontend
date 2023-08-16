import React from "react";
import "./Techs.css";
import { Line } from "../../Line/Line";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <Line></Line>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__container">
        <li className="techs__technologies">HTML</li>
        <li className="techs__technologies">CSS</li>
        <li className="techs__technologies">JS</li>
        <li className="techs__technologies">React</li>
        <li className="techs__technologies">Git</li>
        <li className="techs__technologies">Express.js</li>
        <li className="techs__technologies">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
