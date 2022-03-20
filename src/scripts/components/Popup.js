export default class Popup {
  constructor (selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleEscKey = this._handleEscKey.bind(this)
  };
/* Открытие модального окна */
  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey);
  };
/* Закрытие модального окна */
  closePopup() {
    this._popup.classList.remove('popup_opened');
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
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      };
      if (evt.target.classList.contains('popup__close-icon')) {
        this.closePopup();
      };
    });
  };
};