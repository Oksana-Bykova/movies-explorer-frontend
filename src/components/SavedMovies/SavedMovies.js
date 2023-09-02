import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies(props) {
  return (
    <main>
      <section className="saved-movies">
        <SearchForm></SearchForm>
        <MoviesCardList
         // button="movies-card-list__button-fof-saved-movies"
          buttonclass="movies-card__button-saved-movies"
          films={props.films}
          isLoading ={ props.isLoading}
          ClickButtonSavedFilms={props.ClickButtonSavedFilms}
        ></MoviesCardList>
      </section>
    </main>
  );
}
export { SavedMovies };
