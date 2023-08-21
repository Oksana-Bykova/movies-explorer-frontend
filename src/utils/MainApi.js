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
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }).then((res) => this._checkResponse(res));
    }
  
    addCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
          name: data.name,
          link: data.link,
        }),
      }).then((res) => this._checkResponse(res));
    }
  
    getProfileInformation() {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }).then((res) => this._checkResponse(res));
    }
  
    editProfile(data) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      }).then((res) => this._checkResponse(res));
    }
  
    changeLikeCardStatus(id, isLiked) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
        method: `${isLiked ? `PUT` : `DELETE`}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }).then((res) => this._checkResponse(res));
    }
  
    deleteCard(id) {
      return fetch(`${this.baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }).then((res) => this._checkResponse(res));
    }
  
    editPhotoProfile(data) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }).then((res) => this._checkResponse(res));
    }
  }
  
  
  //***********************************************************************создаем экземпляр класса Api
  const api = new Api({
    // baseUrl: "api.oksana.bikova.movies.nomoredomains.xyz",
    baseUrl: 'http://localhost:3000',
  });
  export { api };
  