export default class FormValidator {
  constructor (formSelector, validationConfig) {
    this._formSelector = document.querySelector(formSelector);
    this._inputSectionSelector = validationConfig.inputSectionSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    this._submitButtonSelector = this._formSelector.querySelector(validationConfig.submitButtonSelector);
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorMessageClass = validationConfig.erroeMessageClass;
    this._errorMessageActiveClass = validationConfig.errorMessageActiveClass;
  };
/* Показать ошибку */
  _showInputError(inputElement, errorMessage) {
    const errorMessageElement = inputElement
      .closest(this._inputSectionSelector)
      .querySelector(this._errorMessageClass);
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(this._errorMessageActiveClass);
    inputElement.classList.add(this._inputErrorClass);
  };
/* Скрыть ошибку */
  _hideInputError(inputElement) {
    const errorMessageElement = inputElement
      .closest(this._inputSectionSelector)
      .querySelector(this._errorMessageClass);
    errorMessageElement.textContent = '';
    errorMessageElement.classList.remove(this._errorMessageActiveClass);
    inputElement.classList.remove(this._inputErrorClass);
  };
/* Проверить валидность поля */

_checkinputValidity(inputElement) {
    const isInputValid = !inputElement.validity.valid;
    if (isInputValid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };
/* Проверка невалдиных полей */
  _hasAtLeastOneInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
/* Переключение активности кнопки после проверки валидности полей */
  _toggleButtonState() {
    if (this._hasAtLeastOneInvalidInput()) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.setAttribute('disabled', true);
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.removeAttribute('disabled');
    };
  };
/* Слушатели событий */
  _setEventListeners() {
    this._formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkinputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
/* Отображение загрузки на кнопке */
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButtonSelector.textContent = "Сохранить..."
    } else {
      this._submitButtonSelector.textContent = "Сохранить"
    };
  };
/* Запуск валидации */
  enableValidation() {
    this._setEventListeners();
  };
};