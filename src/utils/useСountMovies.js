import React from "react";

export function useCountMovies() {
  const [countMovies, setCountMovies] = React.useState(0);
  const [countMoreMovies, setCountMoreMovies] = React.useState(0);

  const widthWindow = window.screen.width;

  React.useEffect(() => {
    if (widthWindow >= 1276) {
      setCountMovies(12);
      setCountMoreMovies(3);
      return;
    }

    if (widthWindow < 1277 && widthWindow >= 768) {
      setCountMovies(8);
      setCountMoreMovies(2);
      return;
    }

    if (widthWindow < 768) {
      setCountMovies(5);
      setCountMoreMovies(2);
      return;
    }
  }, [widthWindow]);

  function addMoreMovies() {
    setCountMovies(countMovies + countMoreMovies);
  }

  return { countMovies, addMoreMovies };
}
