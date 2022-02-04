import { 
  formUserAvatar,
  profileAvatarImage,
  popupUserAvatarChange,
  profileChangeAvatarButton,
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
  handleProfileInfoFormSubmit, 
  handleChangeAvatarFormSubmit,
  closePopup,
  openPopup,
  renderLoading
} from './scripts/components/modal.js';
import { 
  addCard
} from './scripts/components/cards.js';
import { 
  getAllData,
  addNewCard
} from './scripts/components/api.js';
import './pages/index.css';

let userId = null;

profileChangeAvatarButton.addEventListener('click', () => {
  openPopup(popupUserAvatarChange)
})
/* Обработка события 'submit' функциями "handleChangeAvatarFormSubmit" */
formUserAvatar.addEventListener('submit', handleChangeAvatarFormSubmit);
/* Открытие модального окна и перердача значений полям ввода из заголоавков профиля */
profileEditButton.addEventListener('click', () => {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});
/* Обработка события 'submit' функциями "handleProfileInfoFormSubmit" */
formEdit.addEventListener('submit', handleProfileInfoFormSubmit);
/* Открытие модального окна для добавления карочек */
cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});
/* Смена действий браузера по умолчанию, при нажатии на кнопку отправки, на передачу свойствам "name" и "link" значений из Input */
formAdd.addEventListener('submit', (evt) => {
  const popupSubmitButton = formAdd.querySelector('.popup__button');
  renderLoading(true, popupSubmitButton);
  evt.preventDefault();
  addNewCard(inputPlace.value, inputLink.value).then((cardData) => {
      addCard(cardData, cardsContainer, userId)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, popupSubmitButton)
    })
  formAdd.reset();
  popupSubmitButton.classList.add('popup__button_inactive');
  popupSubmitButton.setAttribute('disabled', true)
    closePopup(popupAdd);
 });
/* Закрытие модальных окон при нажатии на Overlay */
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

/* Синхронных вызов двух промисов */
getAllData().then(([cardData, userData]) => {
    cardData.reverse().forEach(cardData => {
      userId = userData._id;
      addCard(cardData, cardsContainer, userId);
    });
    profileTitle.textContent = userData.name,
    profileSubtitle.textContent = userData.about,
    profileAvatarImage.src = userData.avatar
  })
  .catch((err) => {
    console.log(err)
  });

enableValidation();
