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

  //стейт для хранения данных с формы поиска фильмов
  const [value, setValue] = React.useState("");

  //стейт для хранения фильмов отфильтрованных чекбоксом
  const [shortFilms, setShortFilms] = React.useState([]);

  //стейт для хранения состояния чекбокса - активен или нет
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getProfileInformation()])
        .then((data) => {
          setCurrentUser(data[0]);
          console.log(data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (isChecked) {
      handleSubmitSearchMovies();;
    }
    if (!isChecked){
      handleSubmitSearchMovies();
    }
  }, [isChecked]);

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
        if (err.includes("409")) {
          setErr("Пользователь с таким email уже существует");
        }
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
  function handleSubmitSearchMovies() {
    
    if (value === "") { 
  return;
    }
    
    moviesApi
      .getMovies()
      .then((data) => {
        console.log(data);
        const compilation = [];
        data.map((item) => {
          item.nameRU.toLowerCase().includes(value.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(value.toLowerCase())
            ? compilation.push(item)
            : console.log("");
        });
        
        if (isChecked) {
          handleCheckbox(compilation);
          setFilms(shortFilms);
        } else {
          setFilms(compilation);
        }
        
        
      })
      .catch((err) => console.log(err));
  }

  //функция для фильтрации с помощью чекбокса
  function handleCheckbox(data) {
    const ShortFilms = [];
    data.map((item) => {
      item.duration < 40
        ? ShortFilms.push(item)
        : console.log("не короткометражка");
    });
    setShortFilms(ShortFilms);
  }

  // функция записывает состояние чекбокса в стейт
  function isValidCheckbox(evt) {
    setIsChecked(evt.target.checked);
    console.log(isChecked);
  }

  //собираем данные с формы поиска фильмов
  function handleValue(evt) {
    setValue(evt.target.value);
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
                     // onClickCheckbox={handleCheckbox}
                      isChecked={isChecked}
                      onChange={isValidCheckbox}
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
                <Route path="/saved-movies" element={<SavedMovies />} />
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