export const validationConfig = {
  formSelector: '.popup__input-container',
  inputSectionSelector: '.popup__input-section',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  erroeMessageClass:'.popup__input-error',
  errorMessageActiveClass: 'popup__input-error_active'
};

// Показать ошибку
export const showInputError = (inputElement, errorMessage) => {
  const errorMessageElement = inputElement.closest(validationConfig.inputSectionSelector).querySelector(validationConfig.erroeMessageClass);
  console.log(errorMessageElement);
  errorMessageElement.textContent = errorMessage;
  errorMessageElement.classList.add(validationConfig.errorMessageActiveClass);
  inputElement.classList.add(validationConfig.inputErrorClass);
};

// Скрыть ошибку
export const hideInputError = (inputElement) => {
  const errorMessageElement = inputElement.closest(validationConfig.inputSectionSelector).querySelector(validationConfig.erroeMessageClass);;
  console.log(errorMessageElement);
  errorMessageElement.textContent = '';
  errorMessageElement.classList.remove(validationConfig.errorMessageActiveClass);
  inputElement.classList.remove(validationConfig.inputErrorClass);
};

// Проверить валидность поля
export const checkinputValidity = (inputElement) => {
  const isInputValid = inputElement.validity.valid 
  if(!isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorMessage);
  } else {
    hideInputError(inputElement);
  };
};

// Переключение активности кнопки после проверки валидности полей
export const toggleButtonState = (inputListArray, submitButtonElement) => {
  const findAtLeastOneInvalidInput = inputElement => !inputElement.validity.valid;
  const hasInvalidInput = inputListArray.some(findAtLeastOneInvalidInput);
  if(hasInvalidInput) {
    submitButtonElement.classList.add(validationConfig.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
  } else {
    submitButtonElement.classList.remove(validationConfig.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  };
};

/*Нахождение всех инпутов и создание из них массива
Выбор инпута по клику и дальнейший вызов функций checkinputValidity и toggleButtonState*/
export const setEventListeners = (formElement,) => {
  const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
  const inputListArray = Array.from(inputList);
  const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector); 
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
export const enableValidation = () => {
  const formList = document.querySelectorAll(validationConfig.formSelector);
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


