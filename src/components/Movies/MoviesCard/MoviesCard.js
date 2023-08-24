import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {

//const time = props.card.duration;

function handleDuration(time) {
  if (time ===60) {
    return "1ч";
  }
  if (time < 60) {
    return (time + "м")
  }
  if ( time > 60) {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

}


  function ClickButton(event) {
    const target = event.target;
    target.classList.toggle("movies-card__button_active");
  }
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__name">{props.card.nameRU}</h2>
        <p className="movies-card__time">{handleDuration(props.card.duration)}</p>
      </div>
      <a href={props.card.trailerLink}
            target="_blank"
            rel="noreferrer">
      <img
        className="movies-card__image"
        alt={props.card.name}
        src={`https://api.nomoreparties.co/${props.card.image.url}`}
      />
      </a>
      <button className={props.buttonclass} type="button" onClick={ClickButton}>{props.button}</button>
    </li>
  );
}
export { MoviesCard };
