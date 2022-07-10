export const initialCards = [
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
  
  export const validationSetting = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error'
  };
  
  //const formPopupProfile = document.forms.formPopup;
  export const photoSelector = '.temp-photo';
  //const photo = document.querySelector('.temp-photo').content.cloneNode(true);
  export const popupName = document.querySelector('.popup-name');
  export const popupPhotosSelect = '.popup-photos';
  export const popupPhotos = document.querySelector('.popup-photos');
  export const popupFormName = popupName.querySelector('.popup__form');
  export const popupFormPhotos = popupPhotos.querySelector('.popup__form');
  export const name = '.profile__name';
  export const job = '.profile__profil';
  export const nameInput = document.querySelector('#name');
  export const jobInput = document.querySelector('#profil');
  //const namePhotoInput = document.querySelector('#name-photo');
  //const linkInput = document.querySelector('#link');
  export const buttonEdit = document.querySelector('.profile__edit-button');
  export const buttonAdd = document.querySelector('.profile__add-button');
  export const elementPhotos = '.elements';
  export const popupPic = '.popup_pic-opened';
  //const popupTextPic = document.querySelector('.popup__text');
  //const picture = document.querySelector('.popup__img');
  //const closeButtons = document.querySelectorAll('.popup__close');
  //const popupOpenedSelector = document.querySelectorAll('.popup__close');
  export const popupProfileSelecrot = '.popup-name';
  //const profileNameInput = document.querySelectorAll('.popup__input_name');
  //const profileProfilInput = document.querySelectorAll('.popup__input_profil');
  export const userId = {};
  export const popupDeleteSelector = '.popup-delete';
  export const popupAvatarSelector = '.popup-avatar';
  export const popupAvatar = document.querySelector('.popup-avatar');
  export const buttonAvatar = document.querySelector('.profile__avatar-button');
  export const popupFormAvatar = popupAvatar.querySelector('.popup__form');
  export const avatar = '.profile__avatar';
