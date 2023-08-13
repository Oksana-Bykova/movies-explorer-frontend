import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";


function Movies() {
  
  return (
    <main>
      <SearchForm></SearchForm>
      <MoviesCardList button = "movies-card-list__button"></MoviesCardList>
    </main>
  );
}
export { Movies };
