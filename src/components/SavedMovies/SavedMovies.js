import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies(props) {

  return (
    <main>
      <section className="saved-movies">
        <SearchForm
        onClick = {props.onClick}
        handleValue={props.handleValue}
        isChecked={props.isChecked}
        onChange={props.onChange}
        ></SearchForm>
        <MoviesCardList
          films={props.films}
          isLoading ={ props.isLoading}
          ClickButtonDelete= {props.ClickButtonDelete}
          savedFilms = {props.savedFilms}
          text={props.text}
        ></MoviesCardList>
      </section>
    </main>
  );
}
export { SavedMovies };
