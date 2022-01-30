import { 
  popupEdit, 
  profileTitle, 
  profileSubtitle, 
  inputName, 
  inputAbout, 
  popupUserAvatarChange,
  formUserAvatar,
  profileAvatarImage,
  inputUserAvatarLink, 
} from '../utils/constans.js';
import { 
  changeUserData, 
  changeUserAvatar
} from './api.js';

/* Универсальные функции для закрытия и закрытия модального окна */
export const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', poopupEscClose)
};
/* Универсальные функции для открытия и закрытия модального окна */
export const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened');
  document.addEventListener('keydown', poopupEscClose);
};
/* Функция для закрытия модального окна и передача значений полей ввода в заголовки профиля */
export const handleProfileInfoFormSubmit = (evt) => {
  evt.preventDefault();
  changeUserData(inputName.value, inputAbout.value)
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(popupEdit);
};
/* Функция для закрытия модального окна и передача значения поля ввода в аватар профиля */
export const handleChangeAvatarFormSubmit = (evt) => {
  evt.preventDefault();
  changeUserAvatar(inputUserAvatarLink.value)
  profileAvatarImage.src = inputUserAvatarLink.value
  console.log(profileAvatarImage)
  formUserAvatar.reset()
  console.log('submited')
  closePopup(popupUserAvatarChange)
}
/* Закрытие модальных окон клавишей "ESC" */
export const poopupEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};
