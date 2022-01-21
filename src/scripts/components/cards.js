import { cardTemplate, popupPicture, popupCaption, popupZoom } from '../utils/constans.js';
import { openPopup } from './modal.js';

/*Функция добавления созданной карточки функцией "createCard" в начало тега UL*/
export function addCard(cardData, cardsContainer) {
  const card = createCard(cardData);
  cardsContainer.prepend(card);
};
/*Функция создания новой карточки*/
export function createCard(cardData) {
  /*Клонирование карточки из <Tamplate>*/
    const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
  /*Присвоение переменной каждому элементу карточки*/
    const cardImage = cardElement.querySelector('.cards__pic');
    const cardName = cardElement.querySelector('.cards__title');
    const cardLike = cardElement.querySelector('.cards__like');
    const cardDelete = cardElement.querySelector('.cards__delete');
  /*Открытие модального окна с большим изображением карточки*/
    cardImage.addEventListener('click', () => {
  /*Присвоение одинаковых значений для модального окна*/
      popupPicture.src = cardImage.src;
      popupPicture.alt = cardName.textContent;
      popupCaption.textContent = cardName.textContent;
      openPopup(popupZoom);
    });
  /*Удаление карточки*/
    cardDelete.addEventListener('click', function() {
      cardElement.remove();
    });
    /*Преключение "лайка" из активного состояния и обратно*/
    cardLike.addEventListener('click', function(evt) {
      evt.target.classList.toggle('cards__like_active')
    });
    /**/
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);
    cardName.textContent = cardData.name;
    return cardElement;
  };

