export const popupEdit = document.querySelector('.popup_type_edit');
export const formEdit = popupEdit.querySelector('.popup__input-container_type_edit')
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputAbout = popupEdit.querySelector('.popup__input_type_about');
export const popupAdd = document.querySelector('.popup_type_add');
export const formAdd = popupAdd.querySelector('.popup__input-container_type_add');
export const inputPlace = popupAdd.querySelector('.popup__input_type_place');
export const inputLink = popupAdd.querySelector('.popup__input_type_link');
export const profile = document.querySelector('.profile');
export const profileEditButton = profile.querySelector('.profile__edit');
export const cardAddButton = profile.querySelector('.profile__add');
export const profileTitle = profile.querySelector('.profile__title');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const cardTemplate = document.querySelector('#cards').content;
export const cardsContainer = document.querySelector('.cards');
export const popupZoom = document.querySelector('.popup_type_zoom');
export const popupCaption = popupZoom.querySelector('.popup__caption');
export const popupPicture = popupZoom.querySelector('.popup__image');
export const popups = document.querySelectorAll('.popup');
export const popupSubmitButton = formAdd.querySelector('.popup__button');
export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6/',
  headers: {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460'
  }
};