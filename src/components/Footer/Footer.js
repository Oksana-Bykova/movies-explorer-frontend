import React from "react";

function Footer() {
    return(
        <section className="footer">
            <p className="footer__information">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <div className="footer__year">© 2020</div>
                <ul className="footer__list">
                    <li className="footer__link">Яндекс.Практикум</li>
                    <li className="footer__link">Github</li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;