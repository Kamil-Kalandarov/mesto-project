import { profileTitle, profileSubtitle, inputName, inputAbout, popupEdit } from '../utils/constans.js';
import { popupSubmitButton } from '../utils/constans.js';
/*Универсальные функции для закрытия и закрытия модального окна*/
export const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', poopupEscClose)
};
/*Универсальные функции для открытия и закрытия модального окна*/
export const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened');
  document.addEventListener('keydown', poopupEscClose);
  popupSubmitButton.classList.add('popup__button_inactive')
};
/*Функция для закрытия модального окна и передача значений полей ввода в заголовки профиля*/
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(popupEdit);
};
/*Закрытие модальных окон клавишей "ESC"*/
export function poopupEscClose (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};
