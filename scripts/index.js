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
const buttonSave = document.querySelector('.popup__save');
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

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  //Спасибо)
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
  document.querySelector('#saveAdd').classList.add('popup__save_invalid');
  document.querySelector('#saveAdd').setAttribute('disabled', true);
  openPopup(popupPhotos);
}); 

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupName);
}

function handlePhotosFormSubmit(evt) {
  evt.preventDefault();
  elementPhotos.prepend(addPhoto(linkInput.value, namePhotoInput.value));
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

function addPhoto(link, name) {
  const photo = document.querySelector('.temp-photo').content.cloneNode(true);
  const photoPic = photo.querySelector('.elements__item-pic');
  photoPic.src = link;
  photoPic.alt = name;
  photo.querySelector('.elements__item-title').textContent = name;
  photo.querySelector('.elements__item-like').addEventListener('click', toggleLike)
  photo.querySelector('.elements__trash-button').addEventListener('click', deleteCard);
  photoPic.addEventListener('click', openImagePopup);
  return photo;
}

initialCards.forEach(function (item) {
  elementPhotos.append(addPhoto(item.link, item.name));
});

function toggleLike(evt) {
  evt.target.classList.toggle('elements__item-like_active');
};

function deleteCard(evt) {
  evt.target.closest('.elements__item').remove();
}

function openImagePopup(evt) {
  picture.src = evt.target.src;
  picture.alt = evt.target.alt;
  popupTextPic.textContent = picture.alt;
  openPopup(popupPic);
};

function offActivePopupKey(event) {
  if (event.keyCode === 27) {
    closePopup(document.querySelector('.popup_opened'));
  }
}
