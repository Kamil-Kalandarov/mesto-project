const poupup = document.querySelector('.poup-up');
const poupEdit = document.querySelector('.poup-up__edit');
const form = poupEdit.querySelector('.poup-up__input-container');
const formEdit = poupEdit.querySelector('.poup-up__input-container_type_edit')
const inputName = poupEdit.querySelector('.poup-up__item_type_name');
const inputAbout = poupEdit.querySelector('.poup-up__item_type_about');
const poupupButton = poupEdit.querySelector('.poup-up__button');
const closeEdit = poupEdit.querySelector('.poup-up__close-icon');
const poupAdd = document.querySelector('.poup-up__add');
const formAdd = poupAdd.querySelector('.poup-up__input-container_type_add')
const inputplace = poupAdd.querySelector('.poup-up__item_type_place');
const inputlink = poupAdd.querySelector('.poup-up__item_type_link');
const closeAdd = poupAdd.querySelector('.poup-up__close-icon');
const profile = document.querySelector('.profile');
const edit = profile.querySelector('.profile__edit');
const add = profile.querySelector('.profile__add');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const cardTemplate = document.querySelector('#cards').content;
const cardsUl = document.querySelector('.cards');
const cardButton = cardTemplate.querySelector('.cards__like');


const initialCards = [
{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];


function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
  const cardImage = cardElement.querySelector('.cards__pic');
  const cardName = cardElement.querySelector('.cards__title');
  const cardLike = cardElement.querySelector('.cards__like');
  const cardDelete = cardElement.querySelector('.cards__delete');
  const poupZoom = document.querySelector('.poup-up__zoom');
  const poupCaption = poupZoom.querySelector('.poup-up__caption');
  const poupPicture = poupZoom.querySelector('.poup-up__image');
  
  cardImage.addEventListener('click', () => {
    poupPicture.src = cardImage.src;
    poupCaption.textContent = cardName.textContent;
    openPoupup(poupZoom)
  });
  poupZoom.addEventListener('click', () => {
    closePoupup(poupZoom)
  });
  cardDelete.addEventListener('click', function() {
    cardElement.closest
    cardElement.remove()
  });
  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('cards__like_active')
  });
  cardImage.setAttribute('src', cardData.link);
  cardImage.setAttribute('alt', cardData.name);
  cardName.textContent = cardData.name;
  return cardElement
};

function addCard(cardData, cardsUl) {
  const card = createCard(cardData);
  cardsUl.prepend(card);
};

initialCards.forEach((cardData) => {
  addCard(cardData, cardsUl)
});






function editProfileContent(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePoupup(poupEdit)
}

const openPoupup = selectedPoupup => {
  selectedPoupup.classList.add('poup-up_opened')
};

const closePoupup = selectedPoupup => {
  selectedPoupup.classList.remove('poup-up_opened')
};


function editProfileContent(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePoupup(poupEdit)
}






edit.addEventListener('click', () => {
  openPoupup(poupEdit)
});

closeEdit.addEventListener('click', () => {
  closePoupup(poupEdit)
});

poupEdit.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePoupup(poupEdit)
  }
});

formEdit.addEventListener('submit', editProfileContent);

add.addEventListener('click', () => {
  openPoupup(poupAdd)
});

closeAdd.addEventListener('click', () => {
  closePoupup(poupAdd)
});

poupAdd.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePoupup(poupAdd)
  }
});

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard({
    name: inputplace.value,
    link: inputlink.value
  }, cardsUl)
});



