import Api from './Api.js';
import Popup from './Popup.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';
import { 
  EditprofileButton, 
  inputName, 
  inputAbout,
  addCardButton,
  inputPlace,
  inputLink
} from '../utils/constans.js';
import { validationConfig } from '../utils/validationConfig.js';
import '../../pages/index.css';

const api = new Api (
  'https://nomoreparties.co/v1/plus-cohort-6',
  {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
});

let userId = null;

const getInfo = Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardSection.renderItems(cardData);
  })
  .catch((err) => {
    console.log(err)
  });

  

const FormEditValidator = new FormValidator (
  '.popup__input-container_type_edit',
  validationConfig
);

FormEditValidator.enableValidation()


const popupEdit = new PopupWithForm(
  '.popup_type_edit', 
  '.popup__input-container_type_edit',
  handleFormEditSubmit
);

popupEdit.setEventListeners();

EditprofileButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo()
  inputName.value = userData.name;
  inputAbout.value = userData.about
  popupEdit.openPopup()
});

const handleFormEditSubmit = (inpuValues) => {
  
  api.changeUserData(inputName.value, inputAbout.value)
    .then((userData) => {
    userInfo.setUserInfo(userData)
  });
};

const popupAdd = new PopupWithForm(
  '.popup_type_add', 
  '.popup__input-container_type_add', 
  handleFormAddSubmit
);

popupAdd.setEventListeners();

addCardButton.addEventListener('click', () => {
  popupAdd.openPopup();
});

const handleFormAddSubmit = () => {
  api.addNewCard(inputPlace.value, inputLink.value)
    .then((cardData) => {
      cardSection.addItem(createCard(cardData))
    });
};

//const popupWithImage = new PopupWithImage('.popup_type_zoom', '.popup__image', '.popup__caption');
//popupWithImage.setEventListeners();*/

const handleLikeCard = (card) => {
  if (!card.isLiked()) {
    api.putCardLike(card.id())
      .then(cardData => {
        card.updateLikesView(cardData);
      })
  } else {
    api.deleteCardLike(card.id())
      .then(cardData => {
        card.updateLikesView(cardData);
      })
  }
}

const createCard = (cardData) => {
  const card = new Card({cardData, handleLikeCard}, userId, '#cards');
  return card.generate();
};

const cardSection = new Section({
  renderer: (cardData) => {
    cardSection.addItem(createCard(cardData));
  }
}, '.cards');

const userInfo = new UserInfo (
  '.profile__title', 
  '.profile__subtitle', 
  '.profile__avatar'
);




//enableValidation(validationConfig);

/*
api.getCards().then((cardData) => {
    cardSection.renderItems(cardData);
})
api.getUserData().then((userData) => {
  userInfo.setUserInfo(userData)
})*/




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