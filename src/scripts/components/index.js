import Api from './Api.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import Card from './Card.js';
import { 
  editprofileButton, 
  inputName, 
  inputAbout,
  addCardButton,
  inputPlace,
  inputLink,
  changeProfileAvatarButton,
  inputUserAvatarLink
} from '../utils/constans.js';
import { validationConfig } from '../utils/validationConfig.js';
import '../../pages/index.css';

/* Токен и адрес для АПИ */
const api = new Api (
  'https://nomoreparties.co/v1/plus-cohort-6',
  {
    Authorization: 'f30482a5-e3ef-4544-b276-d2d77187c460',
    'Content-Type': 'application/json'
});
/* Перменная айди пользвоателя */
let userId = null;
/* Вывод данных пользователя и карточек на тсраницу*/
const getInfo = Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardSection.renderItems(cardData);
  })
  .catch((err) => {
    console.log(err);
  });


/* ФОРМА ПРОФИЛЯ */  

/* Хендлер отправки формы */
const handleFormEditSubmit = (newInputValues) => {
  api.changeUserData(newInputValues['input-name'], newInputValues['input-about'])
    .then((userData) => {
    userInfo.setUserInfo(userData)
  })
    .catch((err) => {
      console.log(err);
    });
};

/* Открытие модального окана и подключение слушателей */
const popupEdit = new PopupWithForm(
  '.popup_type_edit', 
  '.popup__input-container_type_edit',
   handleFormEditSubmit
);

popupEdit.setEventListeners();

editprofileButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  popupEdit.openPopup();
});

/* Включения валидации */
const formEditValidator = new FormValidator (
  '.popup__input-container_type_edit',
  validationConfig
);
formEditValidator.enableValidation();


/* ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ */ 

/* Хендлер отправки формы */
const handleFormAddSubmit = (newInputValues) => {
  api.addNewCard(newInputValues['input-place'], newInputValues['input-link'])
    .then((cardData) => {
      cardSection.addItem(createCard(cardData))
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Открытие модального окана и подключение слушателей */
const popupAdd = new PopupWithForm(
  '.popup_type_add', 
  '.popup__input-container_type_add', 
  handleFormAddSubmit
);

popupAdd.setEventListeners();

addCardButton.addEventListener('click', () => {
  popupAdd.openPopup();
});

/* Включения валидации */
const formAddValidator = new FormValidator (
  '.popup__input-container_type_add',
  validationConfig
);
formAddValidator.enableValidation();


/* ФОРМА ИЗМЕНЕНИЯ АВТАРА */

const handleFormUserAvatarSubmit = (newInputValue) => {
  api.changeUserAvatar(newInputValue['input-avatar'])
    .then((userData) => {
      console.log(userData.avatar)
      userInfo.setUserInfo(userData.avatar)
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Открытие модального окана и подключение слушателей */
const popupUserAvatar = new PopupWithForm(
  '.popup_type_user-avatar',
  '.popup__input-container_type_user-avatar',
  handleFormUserAvatarSubmit
);

popupUserAvatar.setEventListeners();

changeProfileAvatarButton.addEventListener('click', () => {
  popupUserAvatar.openPopup();
});

/* Включения валидации */
const formImageValidator = new FormValidator (
  '.popup__input-container_type_user-avatar',
  validationConfig
);
formImageValidator.enableValidation();


/* ПОПАП С КАРТОЧКОЙ */
const popupWithImage = new PopupWithImage(
  '.popup_type_zoom',
  '.popup__image', 
  '.popup__caption'
);
popupWithImage.setEventListeners();


/* Хендлер поставноки и снятия лайков */
const handleLikeCard = (card) => {
  if (!card.isLiked()) {
    api.putCardLike(card.id())
      .then(cardData => {
        card.updateLikesView(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.deleteCardLike(card.id())
      .then(cardData => {
        card.updateLikesView(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

/* Хендлер удаления карточки */
const handleDeleteCard = (card) => {
    api.deleteCard(card.id())
      .then(cardData => {
        card.remove();
    })
      .catch((err) => {
        console.log(err);
      });
};

/* Хендлер клика по карточке */
const handleCardClick = (cardLink, cardName)  => {
  const popupImageSrc = cardLink;
  const popupCaptionText = cardName;
  popupWithImage.openPopup(popupImageSrc, popupCaptionText);
};

/* Создание карточек */
const createCard = (cardData) => {
  const card = new Card({cardData, handleLikeCard, handleCardClick, handleDeleteCard}, userId, '#cards');
  return card.generate();
};

/* Рендеринг карточек */
const cardSection = new Section({
  renderer: (cardData) => {
    cardSection.addInitialCards(createCard(cardData));
  }
}, '.cards');

/* Создание данных профиля */
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