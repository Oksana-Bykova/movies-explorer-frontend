import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <main>
    <section className="saved-movies">
      <SearchForm></SearchForm>
      <MoviesCardList button = "movies-card-list__button-fof-saved-movies"></MoviesCardList>
    </section>
    </main>
  );
}
export { SavedMovies };
