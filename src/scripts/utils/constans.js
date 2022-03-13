export const formEdit = document.querySelector('.popup__input-container_type_edit');
export const inputName = formEdit.querySelector('.popup__input_type_name');
export const inputAbout = formEdit.querySelector('.popup__input_type_about');
export const formEditSubmitButton = formEdit.querySelector('.popup__button');
export const popupAdd = document.querySelector('.popup_type_add');
export const formAdd = popupAdd.querySelector('.popup__input-container_type_add');
export const inputPlace = formAdd.querySelector('.popup__input_type_place');
export const inputLink = formAdd.querySelector('.popup__input_type_link');
export const formAddSubmitButton = formAdd.querySelector('.popup__button');
export const popupUserAvatarChange = document.querySelector('.popup_type_user-avatar')
export const formUserAvatar = popupUserAvatarChange.querySelector('.popup__input-container_type_user-avatar');
export const inputUserAvatarLink = formUserAvatar.querySelector('.popup__input_type_user-avatar');
export const profile = document.querySelector('.profile');
export const profileAvatarImage = profile.querySelector('.profile__avatar');
export const profileChangeAvatarButton = profile.querySelector('.profile__avatar-overlay');
export const EditprofileButton = document.querySelector('.profile__edit');
export const addCardButton = profile.querySelector('.profile__add');
export const profileTitle = profile.querySelector('.profile__title');
export const profileSubtitle = profile.querySelector('.profile__subtitle');
export const cardTemplate = document.querySelector('#cards').content;
export const cardsContainer = document.querySelector('.cards');
export const popupZoom = document.querySelector('.popup_type_zoom');
export const popupCaption = popupZoom.querySelector('.popup__caption');
export const popupPicture = popupZoom.querySelector('.popup__image');
export const popups = document.querySelectorAll('.popup');
export const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-6',
  headers: {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
  },
};