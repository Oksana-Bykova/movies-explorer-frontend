import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { Main }  from '../Main/Main.js';

function App() {
  return (
    <div className="root">
      <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        
      </Routes>
      </div>
    </div>
  );
}

export default App;

/*<Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} /> 
        
        
        
        
        */

        