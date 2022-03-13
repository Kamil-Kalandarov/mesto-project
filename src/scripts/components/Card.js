export default class Card {
  constructor ({cardData, handleLikeCard}, userId, templateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._cardId = cardData._id;
    this._ownerId = cardData.owner._id;
    this._handleLikeCard = handleLikeCard;
    this._userId = userId
    this._templateSelector = templateSelector;
    //this._handleCardClick = handleCardClick;
    //this._handleDeleteCard = handleDeleteCard;
  };
/* Клонирование разметки карточки */
  _getElement() {
    const cardElement = document
      .querySelector(this._templateSelector).content
      .querySelector('.cards__card').cloneNode(true);
    return cardElement
  }
/* Наполнение разметки карточки */
  generate() {
    this._element = this._getElement();
    this._element.querySelector('.cards__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.cards__pic');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.cards__delete');
    this._likeButton = this._element.querySelector('.cards__like-button');
    this.updateLikesView()
    this._setEventListeners()
    return this._element;
  };
/* Получение ID карточки */
  id() {
    return this._cardId;
  };
/* Проверка на наличие лайка пользователя */
  isLiked() {
    return Boolean (this._likes.find(userData => userData._id === this._userId))
  };
/* Изменение состояния лайка, в зависимости от наличия лайка пользователя */
  updateLikesView() {
    if (this.isLiked()) {
      this._likeButton.classList.add('cards__like-button_active');
    } else {
      this._likeButton.classList.remove('cards__like-button_active');
    };
    this._updateLikes();
  };

/* Актуализация количества лайков */
  _updateLikes() {
    this._element.querySelector('.cards__like-counter').textContent = this._likes.length;
  };
/* Удаление карточки из разметки и из оперативной памяти */
  remove() {
    this._element.remove();
    this._element = null;
  };
/* Установка слушателей */
  _setEventListeners() {
    /*this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name)
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this)
    });*/
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard(this)
    });
  }
}
