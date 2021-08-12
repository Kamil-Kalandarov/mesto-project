const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = popupEdit.querySelector('.popup__input-container_type_edit')
const inputName = popupEdit.querySelector('.popup__item_type_name');
const inputAbout = popupEdit.querySelector('.popup__item_type_about');
const closeEdit = popupEdit.querySelector('.popup__close-icon');
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = popupAdd.querySelector('.popup__input-container_type_add');
const inputPlace = popupAdd.querySelector('.popup__item_type_place');
const inputLink = popupAdd.querySelector('.popup__item_type_link');
const closeAdd = popupAdd.querySelector('.popup__close-icon');
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit');
const cardAddButton = profile.querySelector('.profile__add');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const cardTemplate = document.querySelector('#cards').content;
const cardsContainer = document.querySelector('.cards');
const popupZoom = document.querySelector('.popup_type_zoom');
const popupCaption = popupZoom.querySelector('.popup__caption');
const popupPicture = popupZoom.querySelector('.popup__image');
const closeZoom = popupZoom.querySelector('.popup__close-icon');
const popups = document.querySelectorAll('.popup_type_edit, .popup_type_add, .popup_type_zoom');

/*Открытие модального окна и перердача значений полям ввода из заголоавков профиля*/
profileEditButton.addEventListener('click', () => {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
/*Функция для закрытия модального окна и передача значений полей ввода в заголовки профиля*/
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(popupEdit);
};
/*Активации функции выше*/
formEdit.addEventListener('submit', handleProfileFormSubmit);
/*Закрытие модального окна*/
closeEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});
/*Открытие модального окна для добавления карочек*/
cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
/*Функция добавления созданной карточки функцией "createCard" в начало тега UL*/
function addCard(cardData, cardsContainer) {
  const card = createCard(cardData);
  cardsContainer.prepend(card);
};
/*Смена действий браузера по умолчанию, при нажатии на кнопку отправки, на передачу свойствам "name" и "link" значений из Input*/
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard({
    name: inputPlace.value,
    link: inputLink.value
  }, cardsContainer);
    formAdd.reset();
 });
/*Закрытие модального окна для добавления карточек*/
 closeAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
/*Закрытие модального окна просмотра картинок карточки*/
closeZoom.addEventListener('click', () => {
  closePopup(popupZoom);
});
/*Закрытие модальных окон при нажатии на Overlay*/
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      };
  });
}); 
/*Функция создания новой карточки*/
function createCard(cardData) {
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
/*Прохождение цикла по всему массиву "initialCards" и запуск функции "addCard"*/
initialCards.forEach((cardData) => {
  addCard(cardData, cardsContainer);
});
/*Универсальные функции для открытия и закрытия модального окна*/
const openPopup = selectedPopup => {
  selectedPopup.classList.add('popup_opened');
};
const closePopup = selectedPopup => {
  selectedPopup.classList.remove('popup_opened');
};
