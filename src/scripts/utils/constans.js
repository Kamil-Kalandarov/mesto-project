export const inputName = document.querySelector('.popup__input_type_name');
export const inputAbout = document.querySelector('.popup__input_type_about');
export const changeProfileAvatarButton = document.querySelector('.profile__avatar-button');
export const editprofileButton = document.querySelector('.profile__edit');
export const addCardButton = document.querySelector('.profile__add');
export const submitButtons = document.querySelector('.popup__button');
export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
  },
};