import { 
  profileEditButton, 
  inputName, 
  inputAbout, 
  formEdit, 
  closeEdit, 
  cardAddButton, 
  formAdd, 
  closeAdd, 
  closeZoom, 
  popups, 
  cardsContainer, 
  profileTitle, 
  profileSubtitle, 
  popupEdit, 
  popupAdd, 
  popupZoom, 
  inputPlace, 
  inputLink 
} from './scripts/utils/constans.js';
import { 
  enableValidation 
} from './scripts/components/validate';
import { 
  handleProfileFormSubmit, 
  closePopup,
  openPopup, 
} from './scripts/components/modal.js';
import { 
  addCard,  
} from './scripts/components/cards.js'
import './pages/index.css';

/*Открытие модального окна и перердача значений полям ввода из заголоавков профиля*/
profileEditButton.addEventListener('click', () => {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
/*Активации функции выше*/
formEdit.addEventListener('submit', handleProfileFormSubmit);
/*Закрытие модального окна*/
closeEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});
/*Открытие модального окна для добавления карочек*/
cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
/*Смена действий браузера по умолчанию, при нажатии на кнопку отправки, на передачу свойствам "name" и "link" значений из Input*/
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard({
    name: inputPlace.value,
    link: inputLink.value
  }, cardsContainer);
  formAdd.reset();
    closePopup(popupAdd);
 });
/*Закрытие модального окна для добавления карточек*/
closeAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
/*Закрытие модального окна просмотра картинок карточки*/
closeZoom.addEventListener('click', () => {
  closePopup(popupZoom);
});
/*Закрытие модальных окон при нажатии на Overlay*/
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    };
  });
}); 

enableValidation();





















/*
//найти форму в разметке
//наложить слушатель на событие сабмит
//при сабмите найти все поля ввода в форме
//пройти по всем полям ввода в форме
//вывести у каждого поля ошибку ()если она есть
//если ошибок не оказалосб - выводим в консоль "seccess"
//если ошибок есть - выводим в коносоль "error"


const configs = {
  formSelector: '.popup__input-container_type_edit',
  inputSelector: '.popup__input'
};

const inputIsValid = (input) => {
  const errorContainer = formSelector.getElementById(`${inputName.name}-error`);
  if(!input.validity.valid) {
    errorContainer.textContent = input.validationMessage;
  } else {
    errorContainer.textContent = '';
    return true;
  };
};

const enableValidation = (config) => {
  const form = document.querySelector(config.formSelector);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  let validInputs = 0;
  inputs.forEach(input => {
    if(inputIsValid(input)) {
      validInputs++ 
    };
    console.log(validInputs);
  });
};
*/
