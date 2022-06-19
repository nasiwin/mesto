export class Card {
  constructor({dataCard, handleCardClick}, cardSelector) {
    this._nameCard = dataCard.name;
    this._linkCard = dataCard.link;
    this._cardSelector = cardSelector;
    this._card = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);
    this._like = this._card.querySelector('.elements__item-like');
    this._photoPic = this._card.querySelector('.elements__item-pic');
    this._handleCardClick = handleCardClick;
  }
  

  _removeCard() {
    this._card.remove();
    this._card = null;
  }

  _toggleLikeCard() {
    this._like.classList.toggle('elements__item-like_active');
  }



  _setEvent() {
    this._card.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._removeCard();
    });
    this._like.addEventListener('click', () => {
      this._toggleLikeCard();
    });
    this._photoPic.addEventListener('click', () => {
      this._handleCardClick({link: this._linkCard, name: this._nameCard});
    });
  }

  createCard() {
    this._setEvent();
    this._card.querySelector('.elements__item-title').textContent = this._nameCard;
    
    this._photoPic.src = this._linkCard;
    this._photoPic.alt = this._nameCard;
    return this._card;
  }
}
