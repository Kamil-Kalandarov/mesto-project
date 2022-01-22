import { apiConfig, cardsContainer, inputPlace, inputLink } from "../utils/constans";
import { addCard, createCard } from "./cards";


const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  };
  return Promise.reject(`Ошибка: ${response.status}`);
};

export const getCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers
})
.then(checkResponse)
.then(cardData => {
  cardData.forEach(cardData => {
    createCard(cardData.name, cardData.link);
    addCard(cardData, cardsContainer);
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

export const getUserData = () => {
  fetch(`${apiConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: 'Каландаров Камиль',
      about: 'Лингвист и Веб-разработчик'
    })
  });
};

export const addNewCard = () => {
  fetch(`${apiConfig.baseUrl}/cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: 'Индонезия',
      link: 'https://cdn.pixabay.com/photo/2019/04/17/14/52/indonesia-4134451_960_720.jpg'
    })
  });
};