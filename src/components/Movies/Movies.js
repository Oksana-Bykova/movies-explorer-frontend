import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

function Movies(props) {

  return (
    <main>
      <SearchForm
        onClick={props.onClick}
        handleValue={props.handleValue}
        isChecked={props.isChecked}
        onChange={props.onChange}
        searchString={props.searchString}
      ></SearchForm>
      <MoviesCardList
        films={props.films}
        isLoading ={ props.isLoading}
        ClickButtonSavedFilms={props.ClickButtonSavedFilms}
        text = {props.text}
        savedFilms = {props.savedFilms}
        ClickButtonDelete = {props.ClickButtonDelete}
      >
        {" "}
      </MoviesCardList>
    </main>
  );
}
export { Movies };
