import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import line from "../../../images/text__COLOR_stroke-landing.svg";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" placeholder="Фильмы"></input>
        <button className="search-form__button" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox></FilterCheckbox>
      <img
        src={line}
        alt="Линия подчеркивания"
        className="search-form__line"
      ></img>
    </section>
  );
}

export { SearchForm };
