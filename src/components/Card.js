export class Card {
  constructor({dataCard, handleCardClick, handleLikeClick, handleDeleteClick, userId},cardSelector) {
    this._nameCard = dataCard.name;
    this._linkCard = dataCard.link;
    this._likesCard = dataCard.likes;
    this._idCard = dataCard._id;
    this._idUserCard = dataCard.owner._id;
    this._userId = userId.id;
    this._cardSelector = cardSelector;
    this._card = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);
    this._like = this._card.querySelector('.elements__item-like');
    this._photoPic = this._card.querySelector('.elements__item-pic');
    this._trashButton = this._card.querySelector('.elements__trash-button')
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeletePopup = handleDeleteClick;
    this._isLiked = false;
    this._userLikes = this._card.querySelector('.elements__item-likesCheck');
    this._userLikes.textContent = this._likesCard.length;
  }
  

  removeCard() {
    this._card.remove();
    this._card = null;
  }

  _deleteButtonClick() {
    if (this._userId !== this._idUserCard ) {
      this._trashButton.remove();
    }
  }

  _toggleLikeCard() {
      this._like.classList.toggle('elements__item-like_active');
    }
  

  setLikes(likes) {
    console.log(likes);
    this._likesCard = likes;
    this._userLikes.textContent = this._likesCard.length;
    this.isLiked();
  };

  isLiked() {
    this._likesCard.forEach((item) => {
      console.log('вторая');
      console.log(this._userId);
      console.log(item._id);
      if (item._id === this._userId) {
        console.log('lf');
        this._isLiked = true;
        return this._isLiked
      }
      
    })

  }
  checkLiked(){
    this.isLiked();
    if (this._isLiked){
      this._isLiked = false;
      return true
    }
    else {
      return false
    }
  }

  getId() {
    return this._idCard
  }

  _setEvent() {
    this._trashButton.addEventListener('click', () => {
      this._handleDeletePopup(this);
    });
    this._like.addEventListener('click', () => {
      this._toggleLikeCard();
      this._handleLikeClick(this);
    });
    this._photoPic.addEventListener('click', () => {
      this._handleCardClick({link: this._linkCard, name: this._nameCard});
    });
  }

  createCard() {
    this.isLiked();
    this._deleteButtonClick();
    this._setEvent();
    this._card.querySelector('.elements__item-title').textContent = this._nameCard;
    if (this._isLiked) {
      console.log(13);
      this._like.classList.add('elements__item-like_active');
    }
    this._photoPic.src = this._linkCard;
    this._photoPic.alt = this._nameCard;
    return this._card;
  }
}
