import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { Main } from "../Main/Main.js";
import { Movies } from "../Movies/Movies.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { NotFound } from "../NotFound/NotFound.js";
import { SavedMovies } from "../SavedMovies/SavedMovies.js";
import { Profile } from "../Profile/Profile.js";
import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";
import * as auth from "../../utils/auth.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { api } from "../../utils/MainApi.js";
import { PopupWithSubmit } from "../PopupSubmit/PopupSubmit.js";
import { moviesApi } from "../../utils/MoviesApi.js";
import { FiltredMovies } from "../../utils/FiltredMovies.js";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute.js";

import "./App.css";

function App() {
  let { pathname } = useLocation();

  const navigate = useNavigate();

  //стейт для определения вошел пользователь в ситсему или нет
  const [loggedIn, setLoggedIn] = React.useState(false);

  //стейт для хранения текста ошибки от сервера при регистрации и авторизации
  const [err, setErr] = React.useState("");

  //стейт переменная для информации о текущем пользователе
  const [currentUser, setCurrentUser] = React.useState({});

  //стейт дл хранения состояния попапа
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  //стейт для хранения сообщения попапа
  const [messagePopup, setMessagePopup] = React.useState("");

  //стейт для хранения найденных фильмов
  const [films, setFilms] = React.useState([]);

  //стейт для хранения  значения для прелодера
  const [isLoading, setIsLoadind] = React.useState(false);

  //стейт для хранения сохраненных фильмов
  const [savedFilms, setSavedFilms] = React.useState([]);

  //стейт для хранения данных поискового запроса
  const [query, setQuery] = React.useState({
    string: "",
    isChecked: false,
  });

  //стейт для хранения текста на страницах /movies /save-movies - показываем под формой
  const [searchText, setSearchText] = React.useState({
    text: "Введите ключевые слова для поиска",
  });

  // стейт для хранения поискового запроса со страницы сохраненных фильмов
  const [querySavedFilms, setQuerySavedFilms] = React.useState({
    string: "",
    isChecked: false,
  });

  // стейт для хранения результатов поиска на saved-movies
  const [renderFilms, setRenderFilms] = React.useState([]);


  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileInformation(), api.getInitialFilms()])
        .then((data) => {
          setCurrentUser(data[0]);
          setSavedFilms(data[1]);
          setRenderFilms(data[1]);
        })
        .catch((err) => {
         console.log(err);
         setMessagePopup(err);
         handleOpenPopup();
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    handleSubmitSearchMovies();
  }, [query.isChecked]);

  React.useEffect(() => {
    handleSubmitSearchSavedMovies();
  }, [querySavedFilms.isChecked]);

  React.useEffect(() => {
    const searchString = localStorage.getItem("searchString");
    const isChecked = localStorage.getItem("isChecked");
    //console.log(isChecked);

    const localStorageArray = JSON.parse(
      localStorage.getItem("movieFromRequest")
    );

    if (searchString) {
      setQuery((q) => ({ ...q, string: searchString }));
    }

    if (isChecked === true) {
      setQuery((q) => ({ ...q, isChecked: isChecked }));
    }

    if (localStorageArray) {
      setFilms(localStorageArray);
    }
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //функция открытия попапа
  function handleOpenPopup() {
    setIsPopupOpen(true);
  }

  // функция закрытия попапа
  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //сохраняем токен
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
        .then((data) => {
          handleloggedIn(data);
        })
        .catch((err) => {
          console.log(err);
          setMessagePopup(err);
          handleOpenPopup();
        });
    }
  }

  //сабмит формы регистрации
  function handleSubmitRegister(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        setErr("");
        setMessagePopup("Вы успешно зарегистрировались");
        handleOpenPopup();
        handleSubmitLogin(email, password);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setErr(err);
      });
  }

  //функция задает значение true для  стейт переменной LoggedIn
  function handleloggedIn() {
    setLoggedIn(true);
  }

  //сабмит авторизации(ввода логина)
  function handleSubmitLogin(email, password) {
    auth
      .authoize(email, password)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          handleloggedIn();
          localStorage.setItem("loggedInLocalStorage", true);
          setErr("");
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        setErr(err);
      });
  }

  //очищаем ошибку сабмита формы регисрации и авторизации (пробросим при монтировании страницы)
  function cleanErr() {
    setErr("");
  }

  // выход из профиля
  function onOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movieFromRequest");
    localStorage.removeItem("searchString");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("loggedInLocalStorage");
    setQuery({ string: "", isChecked: false });
    setSearchText({ text: "Введите ключевые слова для поиска" });
    setFilms([]);
    setMessagePopup("Вы вышли из профиля");
    handleOpenPopup();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //обработка формы редактирования профиля
  function handleUpdateUser(data) {
    console.log(data);
    console.log(currentUser);
    if (currentUser.name === data.name && currentUser.email === data.email) {
      setMessagePopup("Нельзя исправить данные на уже существующие");
    handleOpenPopup();
    return;
    };
    api
      .editProfile(data)
      .then((data) => {
        setCurrentUser(data);
        setMessagePopup("Информация профиля успешно обновлена");
        handleOpenPopup();
      })

      .catch((err) => {
        console.log(err);
        setMessagePopup(err);
        handleOpenPopup();
      });
  }
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //получение  фильмов по ключевым словам
  function handleSubmitSearchMovies() {
    if (query.string === "") {
      return;
    }
    setIsLoadind(true);

    const localStorageAllFilms = JSON.parse(
      localStorage.getItem("allFilmsBeatfilm")
    );

    if (localStorageAllFilms) {
      
      const filtredMovies = FiltredMovies(localStorageAllFilms, query);

      if (filtredMovies < 1) {
        setSearchText({ text: "Ничего не найдено" });
      }
      setIsLoadind(false);
      setFilms(filtredMovies);
      localStorage.setItem("searchString", query.string);
      localStorage.setItem("isChecked", query.isChecked);
      localStorage.setItem("movieFromRequest", JSON.stringify(filtredMovies));
      
      return
    } 

    moviesApi
      .getMovies()
      .then((data) => {

        localStorage.setItem("allFilmsBeatfilm", JSON.stringify(data));
        handleSubmitSearchMovies();
      })
      .catch((err) => {console.log(err);
        setMessagePopup(err);
        handleOpenPopup();
      })
      .finally(() => {
        setIsLoadind(false);
      });
  }

  // функция записывает состояние чекбокса в стейт
  function isValidCheckbox(evt) {
    if (query.string === "") {
      return;
    }
    const isChecked = evt.target.checked;
    setQuery((q) => ({ ...q, isChecked: isChecked }));
  }

  // собираем данные с формы поиска фильмов
  function handleValue(evt) {
    const string = evt.target.value;
    setQuery((q) => ({ ...q, string: string }));
  }

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //функция поиска по сохраненым фильмам - сабмит формы
  function handleSubmitSearchSavedMovies() {

    if (querySavedFilms.string === "") {
      return;
    }
    const filtredMovies = FiltredMovies(savedFilms, querySavedFilms);

    if (filtredMovies < 1) {
      setSearchText({ text: "Ничего не найдено" });
    }

    setRenderFilms(filtredMovies);
  }

  // функция записывает состояние чекбокса на странице сохраненных фильмов в стейт
  function isValidCheckboxSavedFilms(evt) {
    if (querySavedFilms.string === "") {
      return;
    }
    const isChecked = evt.target.checked;
    setQuerySavedFilms((q) => ({ ...q, isChecked: isChecked }));
  }

  // собираем данные с формы поиска сохраненных фильмов фильмов
  function handleValueSavedFilms(evt) {
    const string = evt.target.value;
    setQuerySavedFilms((q) => ({ ...q, string: string }));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //функция для добавления фильма в сохраненные фильмы
  function ClickButtonSavedFilms(movie) {
    console.log(movie);
    api.addFilm(movie).then((data) => {
      setSavedFilms([...savedFilms, data]);
      setRenderFilms([...savedFilms, data]);
      console.log(savedFilms);
    });
  }

  //функция удаления фильма из сохраненных фильмов на роуте /saved-movies
  function handleDeleteFilm(movie) {
    api.deleteCard(movie._id).then((data) => {
      console.log("удалено");
      
      const newCards = savedFilms.filter((c) => c._id !== movie._id);
      setRenderFilms(newCards);
      setSavedFilms(newCards);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <div className="content">
            <header>
              {pathname === "/" ? <Header loggedIn={loggedIn}></Header> : <></>}
              {pathname === "/movies" ||
              pathname === "/saved-movies" ||
              pathname === "/profile" ? (
                <Header loggedIn={loggedIn}></Header>
              ) : (
                <></>
              )}
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Main></Main>} />
                <Route
                  path="/movies"
                  element={
                    <ProtectedRouteElement
                      element={Movies}
                      //loggedIn={loggedIn}
                      onClick={handleSubmitSearchMovies}
                      films={films}
                      handleValue={handleValue}
                      isChecked={query.isChecked}
                      searchString={query.string}
                      onChange={isValidCheckbox}
                      isLoading={isLoading}
                      ClickButtonSavedFilms={ClickButtonSavedFilms}
                      text={searchText.text}
                      savedFilms={savedFilms}
                      ClickButtonDelete={handleDeleteFilm}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleSubmitRegister}
                      err={err}
                      cleanErr={cleanErr}
                    />
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login
                    loggedIn = {loggedIn}
                      onRegister={handleSubmitLogin}
                      err={err}
                      cleanErr={cleanErr}
                    />
                  }
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRouteElement
                      element={SavedMovies}
                      //films={savedFilms}
                      films={renderFilms}
                      isLoading={isLoading}
                      ClickButtonDelete={handleDeleteFilm}
                      savedFilms={savedFilms}
                      onClick={handleSubmitSearchSavedMovies}
                      handleValue={handleValueSavedFilms}
                      isChecked={querySavedFilms.isChecked}
                      onChange={isValidCheckboxSavedFilms}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRouteElement
                      element={Profile}
                      //loggedIn={loggedIn}
                      onOut={onOut}
                      handleUpdateUser={handleUpdateUser}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
          <footer className="footerSite">
            {pathname === "/" ||
            pathname === "/movies" ||
            pathname === "/saved-movies" ? (
              <Footer></Footer>
            ) : (
              <></>
            )}
          </footer>
        </div>
        <PopupWithSubmit
          textPopup={messagePopup}
          isOpen={isPopupOpen}
          onClick={handlePopupClose}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
