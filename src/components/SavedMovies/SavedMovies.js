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
          films={props.films}
          isLoading ={ props.isLoading}
          ClickButtonDelete= {props.ClickButtonDelete}
          savedFilms = {props.savedFilms}
        ></MoviesCardList>
      </section>
    </main>
  );
}
export { SavedMovies };
