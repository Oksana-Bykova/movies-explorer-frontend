import React from "react";

import line from "../../../images/text__COLOR_stroke-landing.svg";
import foto from "../../../images/photo_2023-08-04_14-13-26.jpg";

function AboutMe() {
    return(
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <img className="about-me__line" src={line} alt="Линия подчеркивания" />
            <div className="about-me__container">
                <div className="about-me__container-information">
                    <span className="about-me__name">Оксана</span>
                    <span className="about-me__brief-information">Фронтенд-разработчик, 29 лет</span>
                    <p className="about-me__information">Я живу в Самаре, закончила факультет экономики и управления СамГУПС. Замужем, есть сын. Люблю путешевствовать и увлекаюсь спортом. Кодить начала с 2022 года. </p>
                    <a href="https://github.com/Oksana-Bykova" className="about-me__link" target="_blank">Github</a>
                </div>
                <img className="about-me__photo" src={foto} alt="Фотография разработчика"></img>
            </div>
        </section>
    )
}

export default AboutMe;


