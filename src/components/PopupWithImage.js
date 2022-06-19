import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupText = this._popup.querySelector('.popup__text');
    this._popupImg = this._popup.querySelector('.popup__img');
  }

  open(values) {
    super.open();
    this._popupImg.src = values.link;
    this._popupImg.alt = values.name;
    this._popupText.textContent = values.name;
  }
}