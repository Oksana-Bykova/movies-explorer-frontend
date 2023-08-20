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

import "./App.css";

function App() {
  let { pathname } = useLocation();
  //console.log(pathname);
  //const loggedIn = true;
  const notLoggedIn = false;
  const navigate = useNavigate();

//успешная или неуспешная регистрация
  const [succses, setSuccses] = React.useState(false);
  //стейт для определения вошел пользователь в ситсему или нет
 const [loggedIn, setLoggedIn] = React.useState(false);
 //стейт для хранения текста ошибки от сервера при регистрации и авторизации
 const [err, setErr] = React.useState("");

 

//сабмит формы регистрации
function handleSubmitRegister(email, password, name) {
    
  auth.register(email, password, name)
  .then((res) => {
    setSuccses(true);
    navigate('/signin', {replace: true});
    setErr("");
})
  .catch((err) => {
    setSuccses(false);
    if (err.includes('409')) {
      setErr("Пользователь с таким email уже существует");
    }
    
  })
 }

//функция задает значение true для  стейт переменной LoggedIn
 function handleloggedIn(data) {
  setLoggedIn(true);
 }

//сабмит авторизации(ввода логина)
function handleSubmitLogin (arr) {
  auth.authoize(arr.email, arr.password)
  .then((data) => {
    if (data.jwt){
      localStorage.setItem('jwt', data.jwt);
      //не имеет смысла передавать массив?
      handleloggedIn(arr);
      setErr("");
      navigate('/', {replace: true});
    }})
    .catch((err) => {
      if(err.includes('401')) {
        setErr("Неверный логин или пароль");
      }
    });
    
 }

 //очищаем ошибку сабмита формы регисрации и авторизации (пробросим при монтировании страницы)
 function cleanErr() {
  setErr("")
 }

  return (
    <div className="root">
      <div className="page">
        <div className="content">
          <header>
            {pathname === "/" ? (
              <Header loggedIn={notLoggedIn}></Header>
            ) : (
              <></>
            )}
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
              <Route path="/movies" element={<Movies />} />
              <Route path="/signup" element={<Register onRegister={handleSubmitRegister} err={err} cleanErr={cleanErr} />} />
              <Route path="/signin" element={<Login onRegister={handleSubmitLogin} err={err}/>} />
              <Route path="*" element={<NotFound />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route path="/profile" element={<Profile />} />
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
    </div>
  );
}

export default App;
