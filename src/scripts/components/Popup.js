export default class Popup {
  constructor (selectorPopup) {
    this._selectorPopup = document.querySelector(selectorPopup);
    this._handleEscKey = this._handleEscKey.bind(this)
  };
/* Открытие модального окна */
  openPopup() {
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey);
  };
/* Закрытие модального окна */
  closePopup() {
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscKey);
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