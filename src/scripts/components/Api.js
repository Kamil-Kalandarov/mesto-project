export default class Api {
  constructor (baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  };

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(`Ошибка: ${response.status}`);
  };

  getCards() {
    return fetch (this._baseUrl + '/cards', {
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  getUserData() {
    return fetch (this._baseUrl + '/users/me', {
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  addNewCard(cardName, cardLink) {
    return fetch (this._baseUrl + '/cards', {
      method: 'POST',
      header: this._headers,
      body: JSON.stringify({
        cardName: cardName,
        cardLink: cardLink
      }),
    })
    .then(this._checkResponse);
  };

  deleteCard(cardId) {
    return fetch (this._baseUrl + `cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  changeUserData(userName, userAbout) {
    return fetch (this._baseUrl + '/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        userName: userName,
        userAbout: userAbout
      }),
    })
    .then(this._checkResponse);
  };

  changeUserAvatar(userAvatar) {
    return fetch (this._baseUrl + 'users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        userAvatar: userAvatar
      }),
    })
    .then(this._checkResponse);
  };

  putCardLike(cardId) {
    return fetch (this._baseUrl + `cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  deleteCardLike(cardId) {
    return fetch (this._baseUrl + `cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  };
};













/* 
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  };
  return Promise.reject(`Ошибка: ${response.status}`);
};

export const getCards = () => {
  return fetch (`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers
})
.then(checkResponse)
};

export const getUserData = () => {
  return fetch (`${apiConfig.baseUrl}/users/me`, {
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};

export const getAllData = () => {
  return Promise.all([getCards(), getUserData()])
}

export const addNewCard = (name, link) => {
  return fetch (`${apiConfig.baseUrl}/cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      link: link
    }),
  })
  .then(checkResponse)
};

export const deleteCard = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
}

export const changeUserData = (name, about) => {
  return fetch (`${apiConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
  .then(checkResponse)
};

export const changeUserAvatar = (avatar) => {
  return fetch (`${apiConfig.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: avatar
    }),
  })
  .then(checkResponse)
};

export const putCardLike = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};

export const deleteCardLike = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};
*/
