import { apiConfig, cardsContainer } from "../utils/constans";
import { addCard, createCard } from "./cards";


const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка: ${response.status}`)
}

export const getCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers
})
.then(checkResponse)
.then(cardData => {
  cardData.forEach(cardData => {
    createCard(cardData.name, cardData.link);
    addCard(cardData, cardsContainer);
    })
  })
  .catch((err) => {
    console.log(err)
  })
};

/*export const sendNewCard = () => {
  fetch(`${apiConfig.baseUrl}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      name
    })
  })
}*/



  



