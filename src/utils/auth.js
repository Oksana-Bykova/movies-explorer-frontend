//export const BASE_URL = 'https://api.oksana.bikova.movies.nomoredomains.xyz';
export const BASE_URL = 'http://localhost:3000';


function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw JSON.parse(text).message || JSON.parse(text).error;

  });
}

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
  .then((res)=> checkResponse(res));
  };
 

export const authoize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res)=> checkResponse(res));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res)=> checkResponse(res))
  .then((data)=>(data));
}
