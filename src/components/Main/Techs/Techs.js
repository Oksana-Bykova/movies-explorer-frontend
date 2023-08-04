import React from "react";

import line from "../../../images/text__COLOR_stroke-landing.svg";

function Techs() {
    return(
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <img className="techs__line" src={line} alt="Линия подчеркивания"/>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__container">
                <div className="techs__technologies">HTML</div>
                <div className="techs__technologies">CSS</div>
                <div className="techs__technologies">JS</div>
                <div className="techs__technologies">React</div>
                <div className="techs__technologies">Git</div>
                <div className="techs__technologies">Express.js</div>
                <div className="techs__technologies">mongoDB</div>
            </div>
        </section>
    );
}

export default Techs;