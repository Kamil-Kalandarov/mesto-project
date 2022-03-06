export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = selectorPopup;
  };
/* Открытие модального окна */
  openPopup() {
    this.selectedPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey);
  };
/* Закрытие модального окна */
  closePopup() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscKey);
  };
/* Закрытие модального окна кнопкой 'Escape' */
  _handleEscKey() {
    if (evt.key = 'Escape') {
      this.closePopup;
    };
  };
/* Постановка слушателей для закрытия модального окна по клику на "Overlay" и крестик */
  setEventListeners() {
    this._selectorPopup.addEventListener('click', () => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup;
      };
      if (evt.target.classList.contains('popup__close-icon')) {
        this.closePopup;
      };
    });
  };
};





/*
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
};*/