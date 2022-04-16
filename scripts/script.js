let Name = document.querySelector('.profile__name');
let Job = document.querySelector('.profile__profil');
let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#profil');
let EditButton = document.querySelector('.profile__edit-button');
let close = document.querySelector('.popup__close');

EditButton.addEventListener('click', function () {
  formElement.classList.add('popup_opened');
}); 

function formSubmitHandler(evt) {
  evt.preventDefault(); 
  Name.textContent = nameInput.value;
  Job.textContent = jobInput.value;
  formElement.classList.remove('popup_opened');
}

close.addEventListener('click', function () {
  const popup = document.querySelector('.popup_opened')
  formElement.classList.remove('popup_opened');
});

formElement.addEventListener('submit', formSubmitHandler); 
