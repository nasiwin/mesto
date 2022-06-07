export class Card {
  constructor(dataCard, cardSelector, openImagePopup) {
    this._nameCard = dataCard.name;
    this._linkCard = dataCard.link;
    this._cardSelector = cardSelector;
    this._card = this._cardSelector.querySelector('.elements__item').cloneNode(true);
    this._openImagePopup = openImagePopup;
    this._like = this._card.querySelector('.elements__item-like');
    this._photoPic = this._card.querySelector('.elements__item-pic');
  }

  _removeButton() {
    this._card.remove();
    this._card = null;
  }

  _toggleLikeCard() {
    this._like.classList.toggle('elements__item-like_active');
  }



  _setEvent() {
    this._card.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._removeButton();
    });
    this._like.addEventListener('click', () => {
      this._toggleLikeCard();
    });
    this._card.querySelector('.elements__item-pic').addEventListener('click', () => {
      this._openImagePopup(this._linkCard, this._nameCard);
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
