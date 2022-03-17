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
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      }),
    })
    .then(this._checkResponse);
  };

  deleteCard(cardId) {
    return fetch (this._baseUrl + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  changeUserData(userName, userAbout) {
    return fetch (this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      }),
    })
    .then(this._checkResponse);
  };

  changeUserAvatar(userAvatar) {
    return fetch (this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: userAvatar
      }),
    })
    .then(this._checkResponse);
  };

  putCardLike(cardId) {
    return fetch (this._baseUrl + `/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  };

  deleteCardLike(cardId) {
    return fetch (this._baseUrl + `/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  };
};