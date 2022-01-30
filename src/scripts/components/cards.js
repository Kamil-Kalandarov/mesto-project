import { 
  cardTemplate, 
  popupPicture, 
  popupCaption, 
  popupZoom 
} from '../utils/constans.js';
import { deleteCard } from './api.js';
import { openPopup } from './modal.js';

/*Функция добавления созданной карточки функцией "createCard" в начало тега UL*/
export const addCard = (cardData, cardsContainer) => {
  const card = createCard(cardData);
  cardsContainer.prepend(card);
};
/*Функция создания новой карточки*/ 
export const createCard = (cardData, userData) => {
  /*Клонирование карточки из <Tamplate>*/
    const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
  /*Присвоение переменной каждому элементу карточки*/
    const cardImage = cardElement.querySelector('.cards__pic');
    const cardName = cardElement.querySelector('.cards__title');
    const cardLike = cardElement.querySelector('.cards__like');
    const cardDelete = cardElement.querySelector('.cards__delete');
    if (!userData._id === cardData.owner._id) {
      cardDelete.classList.add('cards__delete_inactive')
    }
  /*Открытие модального окна с большим изображением карточки*/
    cardImage.addEventListener('click', () => {
  /*Присвоение одинаковых значений для модального окна*/
      popupPicture.src = cardImage.src;
      popupPicture.alt = cardName.textContent;
      popupCaption.textContent = cardName.textContent;
      openPopup(popupZoom);
    });
  /*Удаление карточки*/
    cardDelete.addEventListener('click', () => {
      handleCardDelete(cardElement, cardId)
    });
    /*Преключение "лайка" из активного состояния и обратно*/
    cardLike.addEventListener('click', function(evt) {
      evt.target.classList.toggle('cards__like_active')
    });
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);
    cardName.textContent = cardData.name;
    return cardElement;
  };

export const handleCardDelete = (cardElement, cardId) => {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove()
    })
    .catch((err) => {
      console.log("Удалить каточку невозможно")
    })
};

