import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selectorPopup, handleFormSubmit) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
  };
/* Получение значений из полей ввода */
  _getInputValues() {
    this._inputList = this.selectorPopup.querySelectorAll('.popup__input');
    this._newInputValues = {};
    this._inputSelector.forEach((inputElement) => {
      this._newInputValues = [inputElement.name] = inputElement.value
    });
    return _newInputValues;
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
    this._selectorPopup.addEventListener('submit', (event) => {
      event.preventDefault()
    });
    this._handleFormSubmit(this._getInputValues());
    }
};