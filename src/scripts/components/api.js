import { apiConfig, cardsContainer, inputLink, inputPlace } from "../utils/constans";
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


export const addNewCard = (name, link) => {
  fetch(`${apiConfig.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      link: link
    }),
    headers: apiConfig.headers
  })
  .then(checkResponse)
  .then(addCard({
    name: inputPlace.value,
    link: inputLink.value
  }, cardsContainer))
}