// переменные для открытие и закрытие попапа
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__info-adit-button');
let closePopupBtn = document.querySelector('.popup__button-close')
let closePopupOverLay = document.querySelector('.popup');
let popupConteiner = document.querySelector('.popup__conteiner');

// переменные для редактирование имени и информации о себе
let textProfileSubtitel = document.querySelector('.profile__info-subtitle');
let textProfiletitel = document.querySelector('.profile__info-title')
let formElement = document.querySelector('.popup__form');
let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputAbout = document.querySelector('.popup__input_type_about');

// открытие и закрытие попапа
function openPopup() {
    popup.classList.add('popup_visible')
    popupInputAbout.value = textProfileSubtitel.textContent;
    popupInputName.value = textProfiletitel.textContent;
}

function closePopup() {
    popup.classList.remove('popup_visible');
}

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);



// Редактирование имени и информации о себе
function formSubmitHandler(evt) {
    evt.preventDefault();
    textProfileSubtitel.textContent = popupInputAbout.value;
    textProfiletitel.textContent = popupInputName.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

























//код до замечаний на удаление
// openPopupBtn.addEventListener('click', function () {
//     openPopup();
// });

// closePopupBtn.addEventListener('click', function () {
//     closePopup();
// });

// closePopupOverLay.addEventListener('click', function (event) {
//     closePopup();
// });





//исключительно для практики перед 6 пр:

