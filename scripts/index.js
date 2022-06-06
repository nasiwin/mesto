import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'; 

const photo = document.querySelector('.temp-photo').content.cloneNode(true);
const popupName = document.querySelector('.popup-name');
const popupPhotos = document.querySelector('.popup-photos');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__profil');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#profil');
const namePhotoInput = document.querySelector('#name-photo');
const linkInput = document.querySelector('#link');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const elementPhotos = document.querySelector('.elements');
const popupPic = document.querySelector('.popup_pic-opened');
const popupTextPic = document.querySelector('.popup__text');
const picture = document.querySelector('.popup__img');
const closeButtons = document.querySelectorAll('.popup__close');
const buttonSave = document.querySelector('#saveAdd');
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

const validationSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error'
};

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
});

buttonEdit.addEventListener('click', function () {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupName);
}); 

buttonAdd.addEventListener('click', function (evt) {
  linkInput.value = '';
  namePhotoInput.value = '';
  buttonSave.classList.add('popup__save_invalid');
  buttonSave.setAttribute('disabled', true);
  openPopup(popupPhotos);
}); 

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupName);
};

function handlePhotosFormSubmit(evt) {
  evt.preventDefault();
  addPhoto(linkInput.value, namePhotoInput.value);
  evt.target.reset();
  closePopup(popupPhotos);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', offActivePopupKey);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', offActivePopupKey);
}

popupName.addEventListener('submit', handleProfileFormSubmit);
popupPhotos.addEventListener('submit', handlePhotosFormSubmit); 

/*function addPhoto(link, name) {
  const photo = document.querySelector('.temp-photo').content.cloneNode(true);
  const photoPic = photo.querySelector('.elements__item-pic');
  photoPic.src = link;
  photoPic.alt = name;
  photo.querySelector('.elements__item-title').textContent = name;
  photo.querySelector('.elements__item-like').addEventListener('click', toggleLike)
  photo.querySelector('.elements__trash-button').addEventListener('click', deleteCard);
  photoPic.addEventListener('click', openImagePopup);
  return photo;
}*/

function openImagePopup(link, name) {
  picture.src = link;
  picture.alt = name;
  popupTextPic.textContent = picture.alt;
  openPopup(popupPic);
};

function offActivePopupKey(event) {
  if (event.keyCode === 27) {
    closePopup(document.querySelector('.popup_opened'));
  }
};

function validation(Setting) {
  const { formSelector } = Setting;
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((formElement) => {
    const form = new FormValidator(Setting, formElement);
    form.enableValidation();
  });
};

validation(validationSetting);

initialCards.forEach(item => {
  const card = new Card(item, photo, openImagePopup);
  elementPhotos.append(card.createCard());
});

function addPhoto(link, name) {
  const card = new Card({name, link}, photo, openImagePopup);
  elementPhotos.append(card.createCard());
};
