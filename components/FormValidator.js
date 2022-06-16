export class FormValidator {
  constructor(setting, form) {
    this._setting = setting;
    this._form = form;
    this._buttonElement = this._form.querySelector(this._setting.submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._setting.inputSelector);
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValid(inputElement);
        this._toggleButtonState();
      });
    });
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  };

  _hideInputError(inputElement) {
    const formError = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._setting.inputErrorClass);
    formError.classList.remove(this._setting.errorClass);
    formError.textContent = '';
  };

  _checkValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement) {
    const formError = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._setting.inputErrorClass);
    formError.textContent = inputElement.validationMessage;
    formError.classList.add(this._setting.errorClass);
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._buttonElement.classList.add(this._setting.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._setting.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    };
  };

  disableValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };
  enableValidation() {
    this._setEventListeners();
  };
}
