import React from "react"; 
import { MoviesCard } from "../MoviesCard/MoviesCard"

function MoviesCardList() {
    return(
        <section className="movies-card-list">
           <ul className="movies-card-list__ul">
           </ul>
        </section>
    )
}

export { MoviesCardList };

/*{props.cards.map((item) => (
    <MoviesCard
      key={item._id}
      onCardClick={props.onCardClick}
      card={item}
      hendler={props.hendler}
      onCardLike={props.onCardLike}
      onCardDelete={props.onCardDelete} */