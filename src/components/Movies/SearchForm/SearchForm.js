import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import line from "../../../images/text__COLOR_stroke-landing.svg";
import "./SearchForm.css";

function SearchForm(props) {



function onClick(evt) {
  evt.preventDefault();
  props.onClick();
}

  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            placeholder="Фильмы"
            required=""
            onChange={props.handleValue}
          ></input>
          <button className="search-form__button" type="submit" onClick={onClick}>
            Поиск
          </button>
        </div>
        <FilterCheckbox></FilterCheckbox>
      </form>

      <img
        src={line}
        alt="Линия подчеркивания"
        className="search-form__line"
      ></img>
    </section>
  );
}

export { SearchForm };
