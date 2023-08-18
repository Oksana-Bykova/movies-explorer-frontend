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
  console.log(pathname);
  const loggedIn = true;
  const notLoggedIn = false;
  const navigate = useNavigate();

//успешная или неуспешная регистрация
  const [succses, setSuccses] = React.useState(false);

//сабмит формы регистрации
function handleSubmitRegister(email, password, name) {
    
  auth.register(email, password, name)
  .then((res) => {
    setSuccses(true);
    console.log("Красотища какая")
    navigate('/signin', {replace: true});
    
})
  .catch((err) => {
    console.log(err);
    setSuccses(false)
    // не нужно? handleRegisterAvatar()
  })
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
              <Route path="/signup" element={<Register onRegister={handleSubmitRegister} />} />
              <Route path="/signin" element={<Login />} />
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
