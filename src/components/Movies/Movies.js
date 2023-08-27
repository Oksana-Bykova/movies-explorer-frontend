import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";

function Movies(props) {

  return (
    <main>
      <SearchForm
        onClick={props.onClick}
        handleValue={props.handleValue}
        onClickCheckbox={props.onClickCheckbox}
        isChecked={props.isChecked}
        onChange={props.onChange}
      ></SearchForm>
      <MoviesCardList
        button="movies-card-list__button"
        buttonclass="movies-card__button"
        films={props.films}
      >
        {" "}
      </MoviesCardList>
    </main>
  );
}
export { Movies };
