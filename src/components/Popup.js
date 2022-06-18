export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    _closeOverlay(evt) {
      if (evt.target.classList.contains('popup__opened')) {
        this.close(evt.target);
      }
    }
  
    setEventListeners() {
      this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
      this._popup.addEventListener('click', this._closeOverlay.bind(this));   
    };
  
    open() {
      this._popup.classList.add('popup__opened');
      document.addEventListener('keyup', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup__opened');
      document.removeEventListener('keyup', this._handleEscClose);
    }
  }