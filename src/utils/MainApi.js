class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

   _checkResponse(res) {
    if (res.ok) {
     return res.json();
   }
   return res.text().then((text) => {
     throw JSON.parse(text).message || JSON.parse(text).error;
  
   });
  }

  getInitialFilms() {
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  addFilm(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getProfileInformation() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  editProfile(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._checkResponse(res));
  }


}

//***********************************************************************создаем экземпляр класса Api
const api = new Api({
   baseUrl: "https://api.oksana.bikova.movies.nomoredomains.xyz",
  //baseUrl: "http://localhost:3000",
});
export { api };
