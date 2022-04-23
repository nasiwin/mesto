const popupName = document.querySelector('.popup-name');
const popupPhotos = document.querySelector('.popup-photos');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#profil');
const namePhotoInput = document.querySelector('#name-photo');
const linkInput = document.querySelector('#link');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupOpen = document.querySelector('.popup__opened'); 
const close = document.querySelector('.popup__close');
const closePhoto = document.querySelector('.popup__close_photo');
const closePic = document.querySelector('.popup__close_pic');
const elements = document.querySelector('.elements');
const popupPic = document.querySelector('.popup_pic-opened');
console.log(popupPic);

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


editButton.addEventListener('click', function () {
  popupOpenClose(popupName);
}); 

addButton.addEventListener('click', function () {
  popupOpenClose(popupPhotos);
}); 

function formSubmitPopupName(evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  Job.textContent = jobInput.value;
  popupOpenClose(popupName);
}

function formSubmitPopupPhotos(evt) {
  evt.preventDefault();
  elements.prepend(addPhoto(linkInput.value, namePhotoInput.value));
  linkInput.value = '';
  namePhotoInput.value = '';
  popupOpenClose(popupPhotos);
}

function popupOpenClose(evt) {
  evt.classList.add('popup_opened');
}
close.addEventListener('click', function () {
    popupName.classList.remove('popup_opened');
});

closePhoto.addEventListener('click', function () {
  popupPhotos.classList.remove('popup_opened');
});

closePic.addEventListener('click', function () {
  popupPic.classList.remove('popup_opened');
});

popupName.addEventListener('submit', formSubmitPopupName);
popupPhotos.addEventListener('submit', formSubmitPopupPhotos); 

function addPhoto(link, name) {
  const photo = document.querySelector('.temp-photo').content.cloneNode(true);
  const photoPic = photo.querySelector('.elements__item-pic');
  photoPic.src = link;
  photoPic.alt = name;
  photo.querySelector('.elements__item-title').textContent = name;
  photo.querySelector('.elements__item-like').addEventListener('click', like)
  photo.querySelector('.elements__trash-button').addEventListener('click', trash);
  photoPic.addEventListener('click', picOpened);
  return photo;
}

initialCards.forEach(function (evt) {
  
  elements.append(addPhoto(evt.link, evt.name));
});

function like(evt) {
  evt.target.classList.toggle('elements__item-like_active');
};

function trash(evt) {
  evt.target.closest('.elements__item').remove();
}
const pic = document.querySelector('.popup__img');
function picOpened(evt) {
  
  
  pic.src = evt.target.src;
  console.log(pic.src);
  pic.alt = evt.target.alt;
  console.log(pic.alt);
  document.querySelector('.popup__text').textContent = pic.alt;
  console.log(document.querySelector('.popup__text').textContent);
  popupOpenClose(popupPic);
};
