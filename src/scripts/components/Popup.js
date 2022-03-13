export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
  };
/* Открытие модального окна */
  openPopup() {
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey.bind(this));
  };
/* Закрытие модального окна */
  closePopup() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKey.bind(this));
  };
/* Закрытие модального окна кнопкой 'Escape' */
  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    };
  };
/* Постановка слушателей для закрытия модального окна по клику на "Overlay" и крестик */
  setEventListeners() {
    this._selectorPopup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      };
      if (evt.target.classList.contains('popup__close-icon')) {
        this.closePopup();
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