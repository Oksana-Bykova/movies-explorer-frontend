import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import Cards from "../../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__ul">
        {Cards.map((item) => (
          <MoviesCard key={item._id} card={item} hendler={props.hendler} />
        ))}
      </ul>
      <button className="movies-card-list__button">Еще</button>
    </section>
  );
}

export { MoviesCardList };
