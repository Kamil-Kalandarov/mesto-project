export const inputName = document.querySelector('.popup__input_type_name');
export const inputAbout = document.querySelector('.popup__input_type_about');
export const openChangeAvatarForm = document.querySelector('.profile__avatar-button');
export const openEditProfileForm = document.querySelector('.profile__edit');
export const openAddCardForm = document.querySelector('.profile__add');
export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
  },
};