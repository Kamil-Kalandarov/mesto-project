import { 
  profileEditButton, 
  inputName, 
  inputAbout, 
  formEdit, 
  cardAddButton, 
  formAdd, 
  popups, 
  cardsContainer, 
  profileTitle, 
  profileSubtitle, 
  popupEdit, 
  popupAdd, 
  inputPlace, 
  inputLink
} from './scripts/utils/constans.js';
import { 
  enableValidation,
} from './scripts/components/validate';
import { 
  handleProfileFormSubmit, 
  closePopup,
  openPopup
} from './scripts/components/modal.js';
import { 
  addCard,
} from './scripts/components/cards.js';
import { 
  getCards, 
  addNewCard 
} from './scripts/components/api.js';
import './pages/index.css';

/*Открытие модального окна и перердача значений полям ввода из заголоавков профиля*/
profileEditButton.addEventListener('click', () => {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
/*Активации функции выше*/
formEdit.addEventListener('submit', handleProfileFormSubmit);
/*Открытие модального окна для добавления карочек*/
cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
/*Смена действий браузера по умолчанию, при нажатии на кнопку отправки, на передачу свойствам "name" и "link" значений из Input*/
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addNewCard(inputPlace.value, inputLink.value);
  addCard({
    name: inputPlace.value,
    link: inputLink.value
  }, cardsContainer)
  formAdd.reset();
  const popupSubmitButton = formAdd.querySelector('.popup__button');
  popupSubmitButton.classList.add('popup__button_inactive');
  popupSubmitButton.setAttribute('disabled', true)
    closePopup(popupAdd);
 });
/*Закрытие модальных окон при нажатии на Overlay*/
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    } 
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  });
}); 

getCards();
//getUserData();

enableValidation();

