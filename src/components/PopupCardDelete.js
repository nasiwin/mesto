import Popup from './Popup.js';

export default class PopupCardDelete extends Popup {
  constructor(popupSelector, handleButtonClick) {
    console.log(popupSelector);
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__save');
    this._handleButtonClick = handleButtonClick;
  }

  open(card) {
    this._card = card;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._handleButtonClick(this._card);
    });
  }
}