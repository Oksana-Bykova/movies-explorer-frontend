import React from "react";
import { SearchForm } from "../Movies/SearchForm/SearchForm";
import { MoviesCardList } from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies() {
  const isLoggedIn = true;
  return (
    <>
      <Header loggedIn={isLoggedIn}></Header>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Footer></Footer>
    </>
  );
}
export { Movies };
