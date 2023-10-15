import React from "react";
import './PopupSubmit.css';

function PopupWithSubmit(props) {

    const nameClass = `popup  popup_intended_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`;

    return(
        <section className={nameClass}>
        <div className="popup__container">
            <h1 className="popup__text">{props.textPopup}</h1>
            <button className="popup__close" type="button" onClick={props.onClick}>OK</button>
        </div>
        </section>
    )

}

export { PopupWithSubmit }