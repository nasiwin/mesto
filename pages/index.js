import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'; 
import PopupWithImage from '../components/PopupWithImage.js';
//import './index.css';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

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

//const formPopupProfile = document.forms.formPopup;
const photoSelector = '.temp-photo';
//const photo = document.querySelector('.temp-photo').content.cloneNode(true);
const popupName = document.querySelector('.popup-name');
const popupPhotosSelect = '.popup-photos';
const popupPhotos = document.querySelector('.popup-photos');
const popupFormName = popupName.querySelector('.popup__form');
const popupFormPhotos = popupPhotos.querySelector('.popup__form');
const name = '.profile__name';
const job = '.profile__profil';
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#profil');
//const namePhotoInput = document.querySelector('#name-photo');
//const linkInput = document.querySelector('#link');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const elementPhotos = '.elements';
const popupPic = '.popup_pic-opened';
//const popupTextPic = document.querySelector('.popup__text');
//const picture = document.querySelector('.popup__img');
//const closeButtons = document.querySelectorAll('.popup__close');
//const popupOpenedSelector = document.querySelectorAll('.popup__close');
const popupProfileSelecrot = '.popup-name';
//const profileNameInput = document.querySelectorAll('.popup__input_name');
//const profileProfilInput = document.querySelectorAll('.popup__input_profil');
const popupPicOpen = new PopupWithImage(popupPic);
popupPicOpen.setEventListeners();
const userInfo = new UserInfo({name: name, job: job});
const cardArr = new Section({items: initialCards, renderer: element => {
    const cardElement = createNewCard(element);
    cardArr.addItem(cardElement);
  }}, elementPhotos);

cardArr.render();

const popupAddCardForm = new PopupWithForm(popupPhotosSelect, element => {
  const cardElement = createNewCard(element);
  cardArr.addItem(cardElement);
  validationFormPhotos.disableValidation();
})

popupAddCardForm.setEventListeners();

const popupEditProfilForm = new PopupWithForm(popupProfileSelecrot, data => {
  userInfo.setUserInfo(data.name, data.job);
});

popupEditProfilForm.setEventListeners();

const validationFormName = new FormValidator(validationSetting, popupFormName);
const validationFormPhotos = new FormValidator(validationSetting, popupFormPhotos);

buttonEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupEditProfilForm.open();
});


buttonAdd.addEventListener('click', (evt) => {
  popupAddCardForm.open();
}); 


function handleCardClick(data) {
  popupPicOpen.open(data);
};


function createNewCard(item) {
  return new Card({dataCard: item, handleCardClick}, photoSelector).createCard();
};




validationFormName.enableValidation();
validationFormPhotos.enableValidation();