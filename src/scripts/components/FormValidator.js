export default class FormValidator {
  constructor (formSelector, validationConfig, ) {
    this._formSelector = formSelector;
    //console.log(this._formSelector)
    this._inputSectionSelector = validationConfig.inputSectionSelector;
    //console.log(this._inputSectionSelector)
    this._inputSelector = validationConfig.inputSelector;
    //console.log(this._inputSelector)
    this._inputList = Array.from(this._formSelector.querySelectorAll(validationConfig.inputSelector));
    //console.log(this._inputList)
    this._submitButtonSelector = this._formSelector.querySelector(validationConfig.submitButtonSelector);
    //console.log(this._submitButtonSelector) 
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    //console.log(this._inactiveButtonClass)
    this._inputErrorClass = validationConfig.inputErrorClass;
    //console.log(this._inputErrorClass)
    this._erroeMessageClass = validationConfig.erroeMessageClass;
    //console.log(this._erroeMessageClass)
    this._errorMessageActiveClass = validationConfig.errorMessageActiveClass;
    //console.log(this._errorMessageActiveClass)
  };
/* Показать ошибку */
  _showInputError() {
    const errorMessageElement = this._inputSelector
      .clossest(this._inputSectionSelector)
      .querySelector(this._erroeMessageClass);
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(this._errorMessageActiveClass);
    this._inputSelector.classList.add(this._inputErrorClass);
    console.log(errorMessageElement)
  };
/* Скрыть ошибку */
  _hideInputError() {
    const errorMessageElement = this._inputSelector
      .clossest(this._inputSectionSelector)
      .querySelector(this._erroeMessageClass);
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.remove(this._errorMessageActiveClass);
    this._inputSelector.classList.remove(this._inputErrorClass);
  };
/* Проверить валидность поля */
  _checkinputValidity() {
    const isInputValid = !this._inputSelector.validity.valid;
    if (isInputValid) {
      const errorMessage = this._inputSelector.validationMessage;
      this._showInputError();
    } else {
      this._hideInputError();
    };
  };
/* Проверка невалдиных полей */
  _hasAtLeastOneInvalidInput() {
    return this._inputList.some((inputElement) => {
      !inputElement.validity.valid;
    });
  };
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
        this._checkinputValidity();
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