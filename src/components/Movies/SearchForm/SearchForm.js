import React from "react"; 
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
    return(
        <section className="search-form">
            <form className="search-form__form" >
                <input className="search-form__input" placeholder="Фильмы">   
                </input>
                <button className="search-form__button" type="submit">Поиск</button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </section>
    )
}

export { SearchForm };

