import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
      <label htmlFor="button" className="filter-checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          id="button"
          onClick={props.onClick}
          
          onChange={props.onChange}
        ></input>
        <span className="filter-checkbox__visible-checkbox" checked = {props.isChecked}></span>
        <span className="filter-checkbox__text">Короткометражки</span>
      </label>
  
  );
}

export { FilterCheckbox };
