import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useCountMovies, useWidth } from "../../../utils/СountMovies.js";

function MoviesCardList(props) {
  let { pathname } = useLocation();

  const width = useWidth();
  const { countMovies, addMoreMovies } = useCountMovies(width);

  function isSaved(movie) {
    return props.savedFilms.some((item) => {
      if (item.movieId === movie.id) {
        movie._id = item._id;
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <section className="movies-card-list">
      {props.isLoading ? (
        <Preloader />
      ) : props.films.length === 0 ? (
        <h3 className="movies-card-list__error">{props.text} </h3>
      ) : (
        <>
          <ul
            className={`${
              pathname === "/saved-movies"
                ? "movies-card-list__ul-smovies"
                : "movies-card-list__ul"
            } `}
          >
            {props.films.slice(0, countMovies).map((item) => (
              <MoviesCard
                key={`${pathname === "/saved-movies" ? item._id : item.id}`}
                card={item}
                button="Сохранить"
                ClickButtonSavedFilms={props.ClickButtonSavedFilms}
                ClickButtonDelete={props.ClickButtonDelete}
                isSaved={isSaved(item)}
              />
            ))}
          </ul>

          {props.films.length > countMovies ? (
            <button
              className="movies-card-list__button"
              type="button"
              onClick={addMoreMovies}
            >
              Еще
            </button>
          ) : (
            <button
              className="movies-card-list__button-fof-saved-movies"
              type="button"
              onClick={addMoreMovies}
            >
              Еще
            </button>
          )}
        </>
      )}
    </section>
  );
}

export { MoviesCardList };
