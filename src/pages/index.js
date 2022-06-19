// index.js

import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'; 
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

import {
  initialCards,
  validationSetting,
  photoSelector,
  popupPhotosSelect,
  popupFormName,
  popupFormPhotos,
  name,
  job,
  nameInput,
  jobInput,
  buttonEdit,
  buttonAdd,
  elementPhotos,
  popupPic,
  popupProfileSelecrot
} from '../utils/constants.js'

 // добавьте импорт главного файла стилей 

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
  validationFormName.disableValidation(); 
  popupEditProfilForm.open();
});


buttonAdd.addEventListener('click', (evt) => {
  validationFormPhotos.disableValidation(); 
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