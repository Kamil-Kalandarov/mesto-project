export default class FormValidator {
  constructor (formSelector, validationConfig) {
    this._form = document.querySelector(formSelector);
    this._inputSection = validationConfig.inputSectionSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(validationConfig.submitButtonSelector);
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorMessageClass = validationConfig.erroeMessageClass;
    this._errorMessageActiveClass = validationConfig.errorMessageActiveClass;
  };
/* Показать ошибку */
  _showInputError(inputElement, errorMessage) {
    const errorMessageElement = inputElement
      .closest(this._inputSection)
      .querySelector(this._errorMessageClass);
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(this._errorMessageActiveClass);
    inputElement.classList.add(this._inputErrorClass);
  };
/* Скрыть ошибку */
  _hideInputError(inputElement) {
    const errorMessageElement = inputElement
      .closest(this._inputSection)
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
  };
/* Удаление ошибок из инпутов */
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
/* Переключение активности кнопки после проверки валидности полей */
  _toggleButtonState() {
    if (this._hasAtLeastOneInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    };
  };
/* Слушатели событий */
  _setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkinputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
/* Запуск валидации */
  enableValidation() {
    this._setEventListeners();
  };
};