

/*
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


export const setEventListeners = (formElement, validationConfig) => {
  const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
  const inputListArray = Array.from(inputList);
  const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector); 
  toggleButtonState(inputListArray, submitButtonElement);
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
export const enableValidation = (validationConfig) => {
  const formList = document.querySelectorAll(validationConfig.formSelector);
  const formListArray = Array.from(formList);
  const handlerFormSubmit = (event) => { // отмена перезагрузки страницы при отправке формы
    event.preventDefault();
  };
  const formListIterator = formElement => {
    formElement.addEventListener('submit', handlerFormSubmit);
    setEventListeners(formElement, validationConfig);
  };
  formListArray.forEach(formListIterator);
};*/