import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selectorPopup, selectorForm, handleFormSubmit) {
    super(selectorPopup);
    this._form = this._popup.querySelector(selectorForm)
    this._handleFormSubmit = handleFormSubmit;
    this._formButton = this._form.querySelector('.popup__button')
    this._inputList = this._popup.querySelectorAll('.popup__input');
  };
/* Получение значений из полей ввода */
  _getInputValues() {
    this._newInputValues = {};
    this._inputList.forEach((inputElement) => {
      this._newInputValues[inputElement.name] = inputElement.value
    });
    return this._newInputValues
  };
/* Сброс значений полей ввода */
  resetForm() {
    this._form.reset();
  };
/* Добавление сброса формы в родительский метод закрытия модального окна*/
  closePopup() {
    super.closePopup(); 
    this.resetForm();
  };
/* Отображение загрузки на кнопке */
  renderLoading(buttonText = 'Сохранить' ) {
    this._formButton.textContent = buttonText;
  };
/* Установка слушателей */
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      this.renderLoading('Сохранение...');
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
};