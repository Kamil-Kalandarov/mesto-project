import { apiConfig } from "../utils/constans";

/* Проверка ответа от сервера */
const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  };
  return Promise.reject(`Ошибка: ${response.status}`);
};
/* Добавление всех карточек на страницу с сервера */
export const getCards = () => {
  return fetch (`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers
})
.then(checkResponse)
};
/* Загрузка информации о пользователе с сервера */
export const getUserData = () => {
  return fetch (`${apiConfig.baseUrl}/users/me`, {
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};
/* Объединение двух промисов "getCards" и "getUserData в один промис"*/
export const getAllData = () => {
  return Promise.all([getCards(), getUserData()])
}
/* Отправка атрибутов 'name' и 'link' для дальнейшего добавления карточки через форму */
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
/* Запрос на удаление карточки */
export const deleteCard = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
}
/* Отправка атрибутов 'name' и 'about' для изменения данных пользователя */
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
/* Отправка атрибута 'avatar' и 'about' для изменения аватара пользователя */
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
/* Запрос на добавление лайка */
export const putCardLike = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};
/* Запрос на удаление лайка */
export const deleteCardLike = (cardId) => {
  return fetch (`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
  .then(checkResponse)
};