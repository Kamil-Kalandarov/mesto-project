import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selectorPopup, selectorForm, handleFormSubmit) {
    super(selectorPopup);
    this._selectorForm = this._selectorPopup.querySelector(selectorForm)
    this._handleFormSubmit = handleFormSubmit;
  };
/* Получение значений из полей ввода */
  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');
    this._newInputValues = {};
    this._inputList.forEach((inputElement) => {
      this._newInputValues[inputElement.name] = inputElement.value
    });
    return this._newInputValues
  };
/* Сброс значений полей ввода */
  resetForm() {
    this._selectorForm.reset();
  };
/* Добавление сброса формы в родительский метод закрытия модального окна*/
  closePopup() {
    super.closePopup(); 
    this.resetForm();
  };
/* Установка слушателей */
  setEventListeners() {
    super.setEventListeners();
    this._selectorForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });
  }
};