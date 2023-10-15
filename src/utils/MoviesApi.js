class MoviesApi {
    constructor({ baseUrl}) {
      this.baseUrl = baseUrl;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(`${this.baseUrl}/beatfilm-movies`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
      }).then((res) => this._checkResponse(res));

    }
}

//***********************************************************************создаем экземпляр класса MoviesApi
const moviesApi = new MoviesApi({
    
    baseUrl: 'https://api.nomoreparties.co',
  });
  export {moviesApi };