const config = {
  formSelector: '.popup__input-container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}
// Показать ошибку
const showInputError = (inputElement, errorMessage) => {
  const errorMessageElement = inputElement.closest('.popup__input-section').querySelector('.popup__input-error');
  console.log(errorMessageElement);
  errorMessageElement.textContent = errorMessage;
  errorMessageElement.classList.add('popup__input-error_active');
  inputElement.classList.add(config.inputErrorClass);
};
// Скрыть ошибку
const hideInputError = (inputElement) => {
  const errorMessageElement = inputElement.closest('.popup__input-section').querySelector('.popup__input-error');
  console.log(errorMessageElement);
  errorMessageElement.textContent = '';
  errorMessageElement.classList.remove('popup__input-error_active');
  inputElement.classList.remove(config.inputErrorClass);
};
// Проверить валидность поля
const checkinputValidity = (inputElement) => {
  const isInputValid = inputElement.validity.valid; 
  if(!isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorMessage);
  } else {
    hideInputError(inputElement);
  };
};
// Переключение активности кнопки после проверки валидности полей
const toggleButtonState = (inputListArray, submitButtonElement) => {
  const findAtLeastOneInvalidInput = inputElement => !inputElement.validity.valid;
  const hasInvalidInput = inputListArray.some(findAtLeastOneInvalidInput);
  if(hasInvalidInput) {
    submitButtonElement.classList.add(config.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(config.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  };
};
/*Нахождение всех инпутов и создание из них массива
Выбор инпута по клику и дальнейший вызов функций checkinputValidity и toggleButtonState*/
const setEventListeners = (formElement,) => {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const inputListArray = Array.from(inputList);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector); 
  const handleInput = (event) => {
    const inputElement = event.target;
    checkinputValidity(inputElement);
    toggleButtonState(inputListArray, submitButtonElement);
  }; 
  const inputListIterator = inputElement => {
    inputElement.addEventListener('input', handleInput);
  };
  inputListArray.forEach(inputListIterator);
};
// Нахождение всех форм и создание из них массива
const enableValidation = () => {
  const formList = document.querySelectorAll(config.formSelector);
  const formListArray = Array.from(formList);
  const handlerFormSubmit = (event) => { // отмена перезагрузки страницы при отправке формы
    event.preventDefault();
  };
  const formListIterator = formElement => {
    formElement.addEventListener('submit', handlerFormSubmit);
    setEventListeners(formElement);
  };
  formListArray.forEach(formListIterator);
};

export { config, showInputError, hideInputError, checkinputValidity, toggleButtonState, setEventListeners, enableValidation }
