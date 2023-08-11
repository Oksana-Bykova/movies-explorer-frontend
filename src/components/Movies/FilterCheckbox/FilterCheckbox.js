import React from "react"; 

function FilterCheckbox() {
    return(
        <form className="filter-checkbox">
            <label htmlFor="button" className="filter-checkbox__label">
                <input type="checkbox" className="filter-checkbox__input" id="button" ></input>
                <span className="filter-checkbox__visible-checkbox"></span>
                <span className="filter-checkbox__text">Короткометражки</span>
            </label>
        </form>

    )
}

export { FilterCheckbox };