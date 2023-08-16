import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import Cards from "../../../utils/constants";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  let { pathname } = useLocation();
  return (
    <section className="movies-card-list">
      <ul  className={`${
        pathname === "/saved-movies"? "movies-card-list__ul-smovies" : "movies-card-list__ul"
      } `}>
        {Cards.map((item) => (
          <MoviesCard key={item._id} card={item} hendler={props.hendler} button="Сохранить" buttonclass = {props.buttonclass}/>
        ))}
      </ul>
      <button className={props.button} type="button">Еще</button>
    </section>
  );
}

export { MoviesCardList };




     
   