import React from "react";


// export function useWidth(){
//   const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);
  
//   React.useEffect(()=> {

// function getWidthWindow()  {
//   setWidthWindow(window.innerWidth);
// }

//     window.addEventListener('resize', ()=> {
//       setTimeout(getWidthWindow, 1000);
      
//       console.log(widthWindow);
//     })

//     return () => {
//       window.removeEventListener('resize', getWidthWindow)
//     }
    
//   })
//   return widthWindow;
// }

export function useWidth() {
  const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);

  const getWidthWindow = () => {
    const newWidth = window.innerWidth;
    setWidthWindow(newWidth);
  };

  const handleResize = () => {
    setTimeout(getWidthWindow, 1000);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return widthWindow;
}

export function useCountMovies(widthWindow) {
  
  const [countMovies, setCountMovies] = React.useState(0);
  const [countMoreMovies, setCountMoreMovies] = React.useState(0);

  React.useEffect(() => {

    function updateMovieCounts() {
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
  }

  updateMovieCounts();

  }, [widthWindow]);

  function addMoreMovies() {
    setCountMovies(countMovies + countMoreMovies);
  }

  return { countMovies, addMoreMovies, };
}
