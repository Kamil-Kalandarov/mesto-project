/*
import { 
  cardTemplate, 
  popupPicture, 
  popupCaption, 
  popupZoom 
} from '../utils/constans.js';
import { 
  deleteCard,
  putCardLike,
  deleteCardLike
} from './Api.js';






export const addCard = (cardData, cardsContainer, userId) => {
  const card = createCard(cardData, userId);
  cardsContainer.prepend(card);
};

export const createCard = (cardData, userId) => {

    const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
    const cardImage = cardElement.querySelector('.cards__pic');
    const cardName = cardElement.querySelector('.cards__title');
    const cardLike = cardElement.querySelector('.cards__like-button');
    const cardLikeCounter = cardElement.querySelector('.cards__like-counter');
    cardLikeCounter.textContent = cardData.likes.length.toString()
    const cardId = cardData._id;
    const cardOwnerId = cardData.owner._id
    const myLike = Boolean(cardData.likes.find(userData => userData._id === userId));
    if (myLike) {
      cardLike.classList.add('cards__like-button_active')
    }
    const cardDelete = cardElement.querySelector('.cards__delete');
    if (userId !== cardOwnerId) {
      cardDelete.classList.toggle('cards__delete_inactive')
    }

    cardImage.addEventListener('click', () => {

      popupPicture.src = cardImage.src;
      popupPicture.alt = cardName.textContent;
      popupCaption.textContent = cardName.textContent;
      openPopup(popupZoom);
    });
 
    cardDelete.addEventListener('click', () => {
      handleCardDelete(cardElement, cardId);
    });
  
    cardLike.addEventListener('click', () => {
      handleCardLike(cardId, cardData, cardLike, cardLikeCounter);
    });
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);
    cardName.textContent = cardData.name;
    return cardElement;
  };

export const handleCardLike = (cardId, cardData, cardLike, cardLikeCounter) => {
  if (!cardLike.classList.contains('cards__like-button_active')) {
    putCardLike(cardId).then((cardData) => {
      cardLike.classList.toggle('cards__like-button_active');
      cardLikeCounter.textContent = cardData.likes.length.toString()
    })
    .catch((err) => {
      console.log(err)
    });
  } else {
    deleteCardLike(cardId).then((cardData) => {
      cardLike.classList.remove('cards__like-button_active');
      cardLikeCounter.textContent = cardData.likes.length.toString()
    })
    .catch((err) => {
      console.log(err)
    });
  };
};

export const handleCardDelete = (cardElement, cardId) => {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove()
    })
    .catch((err) => {
      console.log(err)
    });
};*/
