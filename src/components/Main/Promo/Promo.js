import React from "react";
import logo from "../../../images/text__COLOR_landing-logo.svg";


function Promo() {
    return(
        <section className="promo">
            <div>
                <h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__button">Узнать больше</button>
            </div>
            <div>
            <img className="promo__logo" src={logo} alt="Логотип проекта" />
            </div>
        </section>
    )
}

export default Promo;