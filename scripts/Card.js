export class Card {
  constructor(dataCard, cardSelector, openImagePopup) {
    this._nameCard = dataCard.name;
    this._linkCard = dataCard.link;
    this._cardSelector = cardSelector;
    this._card = this._cardSelector.querySelector('.elements__item').cloneNode(true);
    this._openImagePopup = openImagePopup;
  }

  _removeButton() {
    this._card.remove();
    this._card = null;
  }

  _toggleLikeCard() {
    this._card.querySelector('.elements__item-like').classList.toggle('elements__item-like_active');
  }



  _setEvent() {
    this._card.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._removeButton();
    });
    this._card.querySelector('.elements__item-like').addEventListener('click', () => {
      this._toggleLikeCard();
    });
    this._card.querySelector('.elements__item-pic').addEventListener('click', () => {
      this._openImagePopup(this._linkCard, this._nameCard);
    });
  }

  createCard() {
    this._setEvent();
    this._card.querySelector('.elements__item-title').textContent = this._nameCard;
    const photoPic = this._card.querySelector('.elements__item-pic');
    photoPic.src = this._linkCard;
    photoPic.alt = this._nameCard;
    return this._card;
  }
}
