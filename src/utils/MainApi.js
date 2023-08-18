class Api {
    constructor({ baseUrl}) {
      this.baseUrl = baseUrl;
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        method: "GET",
        headers: this.headers,
      }).then((res) => this._checkResponse(res));
    }
  
    addCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then((res) => this._checkResponse(res));
    }
  
    getProfileInformation() {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: this.headers,
      }).then((res) => this._checkResponse(res));
    }
  
    editProfile(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then((res) => this._checkResponse(res));
    }
  
    changeLikeCardStatus(id, isLiked) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: `${isLiked ? `PUT` : `DELETE`}`,
        headers: this.headers,
      }).then((res) => this._checkResponse(res));
    }
  
    deleteCard(id) {
      return fetch(`${this.baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: this.headers,
      }).then((res) => this._checkResponse(res));
    }
  
    editPhotoProfile(data) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }).then((res) => this._checkResponse(res));
    }
  }
  
  //***********************************************************************создаем экземпляр класса Api
  const api = new Api({
    // baseUrl: "api.oksana.bikova.movies.nomoredomains.xyz",
    baseUrl: 'https://localhost:3000',
  });
  export { api };
  