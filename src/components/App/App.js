import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
//import Preloader from "../Movies/Preloader/Preloader.js";
import { FiltredMovies } from "../../utils/FiltredMovies.js";

import "./App.css";

function App() {
  let { pathname } = useLocation();

  const navigate = useNavigate();

  //успешная или неуспешная регистрация
  const [succses, setSuccses] = React.useState(false);

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

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileInformation(), api.getInitialFilms()])
        .then((data) => {
          setCurrentUser(data[0]);
          setSavedFilms(data[1]);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  //функция открытия попапа
  function handleOpenPopup() {
    setIsPopupOpen(true);
  }

  // функция закрытия попапа
  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  //сохраняем токен
  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (jwt) {
      auth
        .getContent(jwt)
        .then((data) => {
          handleloggedIn(data);
          console.log(data);
          //navigate('/', {replace: true});
        })
        .catch((err) => console.log(err));
    }
  }

  //сабмит формы регистрации
  function handleSubmitRegister(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        setSuccses(true);
        setErr("");
        handleSubmitLogin(email, password);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setSuccses(false);
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
          setErr("");
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        if (err.includes("401")) {
          setErr("Неверный логин или пароль");
        }
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
    console.log("вы вышли из профиля");
    setMessagePopup("Вы вышли из профиля");
    handleOpenPopup();
  }

  //обработка формы редактирования профиля
  function handleUpdateUser(data) {
    console.log(data);
    api
      .editProfile(data)
      .then((data) => {
        setCurrentUser(data);
        setMessagePopup("Информация профиля успешно обновлена");
        handleOpenPopup();
      })

      .catch((err) => console.log(err));
  }

  //получение  фильмов по ключевым словам
  function handleSubmitSearchMovies(query) {
    console.log(query);
    if (query.string === "") {
      return;
    }
    setIsLoadind(true);

    moviesApi
      .getMovies()
      .then((data) => {

        const filtredMovies = FiltredMovies(data, query);

        if (filtredMovies < 1) {
          setSearchText({ text: "Ничего не найдено" });
        }

        setFilms(filtredMovies);
      })
      .catch((err) => console.log(err))
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
    handleSubmitSearchMovies();
  }

  // собираем данные с формы поиска фильмов
  function handleValue(evt) {
    const string = evt.target.value;
    setQuery((q) => ({ ...q, string: string }));
  }

  //функция при клике по кнопке "Cохранить" на фильме
  function ClickButtonSavedFilms(movie) {
    console.log(movie);
    // if (isSaved === false) {
    //   api.addFilm(movie).then((data) => {
    //     setSavedFilms(data);
    //     setIsSaved(true);
    //   });
    // } else {
    //   api.deleteCard(movie._id).then((data) => {
    //     console.log(data);
    //   });
    // }
    console.log(savedFilms);
    savedFilms.map((item) => {
      console.log(item.nameRU.toLowerCase());
      console.log(movie.nameRU.toLowerCase());
      item.nameRU.toLowerCase().includes(movie.nameRU.toLowerCase())
        ? api.addFilm(movie).then((data) => {
            setSavedFilms(data);
          })
        : api.deleteCard(movie._id).then((data) => {
            console.log("фидьм удален");
          });
    });
  }

  //функция удаления фильма из сохраненных фильмов на роуте /saved-movies
  function handleDeleteFilm(movie) {
    api.deleteCard(movie._id).then((data) => {
      console.log("удалено");
      console.log(data);
      // setSavedFilms(savedFilms.filter(obj => obj.id != movie._id));
      const newCards = savedFilms.filter((c) => c._id !== movie._id);
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
                    <Movies
                      onClick={handleSubmitSearchMovies}
                      films={films}
                      handleValue={handleValue}
                      isChecked={query.isChecked}
                      searchString={query.string}
                      onChange={isValidCheckbox}
                      isLoading={isLoading}
                      ClickButtonSavedFilms={ClickButtonSavedFilms}
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
                  element={<Login onRegister={handleSubmitLogin} err={err} />}
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/saved-movies"
                  element={
                    <SavedMovies
                      films={savedFilms}
                      isLoading={isLoading}
                      ClickButtonSavedFilms={handleDeleteFilm}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Profile
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
