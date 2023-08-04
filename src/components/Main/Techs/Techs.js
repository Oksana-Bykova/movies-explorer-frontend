import React from "react";

import line from "../../../images/text__COLOR_stroke-landing.svg";

function Techs() {
    return(
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <img className="techs__line" src={line} alt="Линия подчеркивания"/>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
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