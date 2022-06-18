import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(values) {
    super.open();
    this._popupText = this._popup.querySelector('.popup__text');
    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupImg.src = values.link;
    this._popupImg.alt = values.name;
    this._popupText.textContent = values.name;
  }
}