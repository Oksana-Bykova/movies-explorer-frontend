import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
      <label htmlFor="button" className="filter-checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          id="button"
        ></input>
        <span className="filter-checkbox__visible-checkbox"></span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
  
  );
}

export { FilterCheckbox };
