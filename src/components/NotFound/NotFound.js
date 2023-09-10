import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const nav = useNavigate();
  return (
    <main>
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__information">Страница не найдена</p>
      <Link className="not-found__link" onClick={()=> nav(-1)}>Назад</Link>
    </section>
    </main>
  );
}

export { NotFound };
