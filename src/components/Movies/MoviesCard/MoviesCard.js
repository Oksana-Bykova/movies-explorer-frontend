import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  let { pathname } = useLocation();

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


  function ClickButton(evt) {
    const target = evt.target;
    target.classList.toggle("movies-card__button_active");
    props.ClickButtonSavedFilms(props.card);
  }
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__name">{props.card.nameRU}</h2>
        <p className="movies-card__time">{handleDuration(props.card.duration)}</p>
      </div>
      <a className="movies-card__link" href={props.card.trailerLink}
            target="_blank"
            rel="noreferrer">
      <img
        className="movies-card__image"
        alt={props.card.name}


        src={`${
              pathname === "/saved-movies"
                ? props.card.image
                : (`https://api.nomoreparties.co/${props.card.image.url}`)
            } `}

       // src={`https://api.nomoreparties.co/${props.card.image.url}`}
      />
      </a>
      <button className={props.buttonclass} type="button" onClick={ClickButton} isSaved={props.isSaved}>{props.button}</button>
    </li>
  );
}
export { MoviesCard };
