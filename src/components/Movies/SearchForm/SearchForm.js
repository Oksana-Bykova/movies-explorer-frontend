import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import line from "../../../images/text__COLOR_stroke-landing.svg";
import "./SearchForm.css";
//import { useFormWithValidation } from "../../../utils/Validation";

function SearchForm(props) {
  // const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [error, setError] = React.useState("");
  const [film, setFilm] = React.useState("");

  function handleError(evt) {
       setError(evt.target.validationMessage);
       setFilm(evt.target.value);
       props.handleValue(evt);
  }

  function onClick(evt) {
    evt.preventDefault();
    if (film === ""){
      setError("Нужно ввести ключевое слово"); 
      return;
    }
    props.onClick();
    
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={onClick}>
        <div className="search-form__container">
          <div className="search-form__container-for-span">
            <input
              className="search-form__input"
              placeholder="Фильмы"
              value={props.searchString}
              name="films"
              id="films"
              onChange={handleError}
              minLength={1}
            ></input>
            <span className="search-form__span">{error  || ""}</span>
          </div>
          <button className="search-form__button" type="submit" >
            Поиск
          </button>
        </div>
        <FilterCheckbox
          onClick={props.onClickCheckbox}
          isChecked={props.isChecked}
          onChange={props.onChange}
        ></FilterCheckbox>
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
