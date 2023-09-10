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

//console.log(props.isSaved);

  function ClickButtonSaved() {
    props.ClickButtonSavedFilms(props.card);
  }

  function ClickButtonDelete() {
    props.ClickButtonDelete(props.card);
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
      />
      </a>

      
       {pathname === "/movies" && props.isSaved === false && <button className="movies-card__button" type="button" onClick={ClickButtonSaved} >Сохранить</button>}
       {pathname === "/saved-movies" && <button className="movies-card__button-saved-movies" type="button" onClick={ClickButtonDelete} ></button>}
       {props.isSaved &&  pathname === "/movies" && <button className="movies-card__button_active" type="button" onClick={ClickButtonDelete} ></button>}
    </li>
  );
}
export { MoviesCard };

