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
  formEditSubmitButton
} from '../utils/constans.js';
import { 
  changeUserData, 
  changeUserAvatar
} from './api.js';

/* Универсальные функции для закрытия и закрытия модального окна */
export const closePopup = (selectedPopup) => {
  selectedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscKey)
};
/* Универсальные функции для открытия и закрытия модального окна */
export const openPopup = (selectedPopup) => {
  selectedPopup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscKey);
};
/* Функция для закрытия модального окна и передача значений полей ввода в заголовки профиля */
export const handleProfileInfoFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, formEditSubmitButton);
  changeUserData(inputName.value, inputAbout.value).then((userData) => {
    profileTitle.textContent = inputName.value;
    profileSubtitle.textContent = inputAbout.value;
    closePopup(popupEdit);
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, formEditSubmitButton);
  });
};
/* Функция для закрытия модального окна и передача значения поля ввода в аватар профиля */
export const handleChangeAvatarFormSubmit = (evt) => {
  const popupAvatarSubmitButton = formUserAvatar.querySelector('.popup__button');
  renderLoading(true, popupAvatarSubmitButton);
  evt.preventDefault();
  changeUserAvatar(inputUserAvatarLink.value).then((avatar) => {
    profileAvatarImage.src = inputUserAvatarLink.value;
    formUserAvatar.reset();
    popupAvatarSubmitButton.classList.add('popup__button_inactive');
    popupAvatarSubmitButton.setAttribute('disabled', true)
    closePopup(popupUserAvatarChange)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false, popupAvatarSubmitButton);
  });
};
/* Закрытие модальных окон клавишей "ESC" */
export const handleEscKey = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

export const renderLoading = (isLoading, buttonElement) => {
  if (isLoading) {
    buttonElement.textContent = "Сохранить..."
  } else {
    buttonElement.textContent = "Сохранить"
  }
}
