// index.js

import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'; 
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';
import PopupCardDelete from '../components/PopupCardDelete.js';

import {
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
  userId,
  popupProfileSelecrot,
  popupAvatarSelector,
  buttonAvatar,
  popupFormAvatar,
  avatar
} from '../utils/constants.js';

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: '81dfcd0d-09f2-41d4-baf1-d7216e006f64',
    'Content-Type': 'application/json'
  }
});



const popupPicOpen = new PopupWithImage(popupPic);
popupPicOpen.setEventListeners();
const userInfo = new UserInfo({name: name, job: job, avatar: avatar});
const cardArr = new Section({renderer: element => {
    cardArr.addItem(createNewCard(element));
  }}, elementPhotos);

  api.getAllData()
  .then(([item, cards]) => {
    userInfo.setUserInfo(item.name, item.about, item.avatar);
    userId.id = item._id;
    cardArr.render(cards.reverse());
  })
  .catch(err => {
    console.log(`Ошибка получения данных: ${err}`);
  });

const popupAddCardForm = new PopupWithForm(popupPhotosSelect, (element) => {
  popupAddCardForm.UX(true);
  api.getNewCard(element)
    .then((res) => {
      
      cardArr.addItem(createNewCard(res));
      popupAddCardForm.close();
    })
    .catch((err) => {
      console.log(`Ошибка отправки данных карточки: ${err}`);
    })
    .finally(() => popupAddCardForm.UX(false));
})

popupAddCardForm.setEventListeners();

const popupEditProfilForm = new PopupWithForm(popupProfileSelecrot, (element) => {
  popupEditProfilForm.UX(true);
  api.getRenameProfile(element)
        .then((item) => {
          
          userInfo.setUserInfo(item.name, item.about, item.avatar);
          popupEditProfilForm.close();
        })
        .catch(err => console.log(`Ошибка обновления данных: ${err}`))
        .finally(() => {
          popupEditProfilForm.UX(false);
        })
  
});

popupEditProfilForm.setEventListeners();

const popupAvatarProfilForm = new PopupWithForm(popupAvatarSelector, (element) => {
  popupAvatarProfilForm.UX(true);
    api.setProfileAvatar(element)
      .then((item) => {
        
        userInfo.setUserInfo(item.name, item.about, item.avatar);
        popupAvatarProfilForm.close();
      })
      .catch(err => console.log(`Ошибка аватара: ${err}`))
      .finally(() => {
        popupAvatarProfilForm.UX(false);
      })
  },
  );

popupAvatarProfilForm.setEventListeners();



const validationFormName = new FormValidator(validationSetting, popupFormName);
const validationFormPhotos = new FormValidator(validationSetting, popupFormPhotos);
const validationFormAvatar = new FormValidator(validationSetting, popupFormAvatar);

buttonAvatar.addEventListener('click', () => {
  validationFormAvatar.disableValidation(); 
  popupAvatarProfilForm.open();
});

buttonEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  validationFormName.disableValidation(); 
  popupEditProfilForm.open();
});


buttonAdd.addEventListener('click', () => {
  validationFormPhotos.disableValidation(); 
  popupAddCardForm.open();
}); 


function handleCardClick(data) {
  popupPicOpen.open(data);
};



const handleLikeClick = (item) => {
  /*console.log(item.getId());
  console.log(item.checkLiked());*/
  if (item.checkLiked() === false) {
    api.getCardLike(item.getId())
      .then(dataLikes => {
        item.setLikes(dataLikes.likes);
      })
      .catch(err => console.log(`Ошибка установки лайка: ${err}`))
    
  } else {
    api.deleteCardLike(item.getId())
      .then(likesCard => {
        item.setLikes(likesCard.likes);
      })
      .catch(err => console.log(`Ошибка удаления лайка: ${err}`))
  }
}

const popupDeleteCard = new PopupCardDelete('.popup-delete', (element) => {
  console.log(element);
  api.deleteCard(element._idCard)
    .then(() => {
      element.removeCard();
      popupDeleteCard.close();
    })
    .catch(err => console.log(`Ошибка удалния карточки: ${err}`))
});

popupDeleteCard.setEventListeners()

const handleDeleteClick = (element) => {
  popupDeleteCard.open(element);
}

function createNewCard(item) { 
  return new Card(
    {dataCard: item, 
    handleCardClick,
    handleLikeClick, 
    handleDeleteClick,
    userId},
    photoSelector,
    ).createCard();
}

/*function createNewCard(item) {
  return new Card({dataCard: item, handleCardClick}, photoSelector).createCard();
};*/

validationFormName.enableValidation();
validationFormPhotos.enableValidation();
validationFormAvatar.enableValidation();
//rd /s /q dist &&