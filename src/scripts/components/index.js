import Api from './Api.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from '../utils/validationConfig.js';
import { profileEditButton } from '../utils/constans.js'
import '../../pages/index.css';

const api = new Api (
  'https://nomoreparties.co/v1/plus-cohort-6',
  {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
});
/*
profileEditButton.addEventListener('click', () => {
  popupEdit.openPopup()
})*/
/*
const handleEditFormSubmit = () => {
  const inputName = document.querySelector('.popup__input_type_name');
  const inputAbout = document.querySelector('.popup__input_type_name');
  api.changeUserData(inputName, inputAbout).then((userData) => {
    userInfo.getUserInfo(userData)
  })
};

const popupEdit = new PopupWithForm('.popup_type_edit', handleEditFormSubmit())
popupEdit.setEventListeners();*/

//const popupAdd = new PopupWithForm('.popup_type_add', '.popup__input', handleFormSubmit)
//popupAdd.setEventListeners();

//const popupWithImage = new PopupWithImage('.popup_type_zoom', '.popup__image', '.popup__caption');
//popupWithImage.setEventListeners();*/

const createCard = (cardData) => {
  const card = new Card(cardData, '#cards');
  return card.generate();
};

const cardSection = new Section({
  renderer: (cardData) => {
    cardSection.addItem(createCard(cardData));
  }
}, 'cards');

api.getCards().then((cardData) => {
  cardData.forEach((card) => {
    cardSection.renderItems(createCard(cardData));
  })
})


const userInfo = new UserInfo ('.profile__title', '.profile__subtitle');

let userId = null;



api.getUserData().then((userData) => {
  userInfo.setUserInfo(userData)
})

/*
const getInfo = Promise.all([api.getCards(), api.getUserData()])
  .then(([cardData, userData]) => {
    cardData.reverse().forEach((cardData) => {
      console.log(cardData.name)
      cardSection.renderItems(createCard(cardData));
    });
  })
  .catch((err) => {
    console.log(err)
  });*/



//enableValidation(validationConfig);






/*
profileChangeAvatarButton.addEventListener('click', () => {
  openPopup(popupUserAvatarChange)
})

formUserAvatar.addEventListener('submit', handleChangeAvatarFormSubmit);

profileEditButton.addEventListener('click', () => {
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

formEdit.addEventListener('submit', handleProfileInfoFormSubmit);

cardAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderLoading(true, formAddSubmitButton);
  addNewCard(inputPlace.value, inputLink.value).then((cardData) => {
      addCard(cardData, cardsContainer, userId);
      formAdd.reset();
      formAddSubmitButton.classList.add('popup__button_inactive');
      formAddSubmitButton.setAttribute('disabled', true);
      closePopup(popupAdd);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, formAddSubmitButton)
    })
 });

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    } 
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  });
}); */