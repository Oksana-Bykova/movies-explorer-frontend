import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  function ClickButton(event) {
    const target = event.target;
    target.classList.toggle("movies-card__button_active");
  }
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__name">{props.card.name}</h2>
        <p className="movies-card__time">{props.card.time}</p>
      </div>
      <img
        className="movies-card__image"
        alt={props.card.name}
        src={props.card.image}
      />

      <button className={props.buttonclass} type="button" onClick={ClickButton}>{props.button}</button>
    </li>
  );
}
export { MoviesCard };
