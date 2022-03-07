import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selectorPopup) {
    super(selectorPopup);
    //this._handleFormSubmit = handleFormSubmit;
  };
/* Получение значений из полей ввода */
  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');
    this._newInputValues = {};
    this._inputList.forEach((inputElement) => {
      this._newInputValues = inputElement.value
    });
    console.log(this._newInputValues);
  };
/* Сброс значений полей ввода */
  resetForm() {
    this._selectorPopup.reset();
  };
/* Добавление сброса формы в родительский метод закрытия модального окна*/
  closePopup() {
    super.closePopup();
    resetForm();
  };
/* Установка слушателей */
  setEventListeners() {
    super.setEventListeners();
    this._formSelector = this._selectorPopup.querySelector('.popup__input-container');
    this._formSelector.addEventListener('submit', (event) => {
      event.preventDefault()
    });
    //this._handleFormSubmit(this._getInputValues());
    }
};