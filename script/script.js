// переменные для открытие и закрытие попапа
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__info-adit-button');
let closePopupBtn = document.querySelector('.popup__button-close')
let closePopupOverLay = document.querySelector('.popup');
let popupConteiner = document.querySelector('.popup__conteiner');

let openPopupAddButton = document.querySelector('.profile__add-button'); // 1



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

openPopupAddButton.addEventListener('click', openPopup); //2


// Редактирование имени и информации о себе
function formSubmitHandler(evt) {
    evt.preventDefault();
    textProfileSubtitel.textContent = popupInputAbout.value;
    textProfiletitel.textContent = popupInputName.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);




//загрузка карточек на страницу
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      description: 'Архыз'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      description: 'Архызввв'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      description: 'Архызеее'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      description: 'Архызееккяе'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      description: 'Архызпар'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      description: 'Архызаяпаа'
    }
  ]; 
//добавление карточек из массива 
const listGallery = document.querySelector('.gallery');
const templateEl = document.querySelector('.template');

function render() {
    const html = initialCards
    .map(getItem)
    listGallery.append(...html)
}

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true); //скопирована структура temlate element
  const headerEl = newItem.querySelector('.card__titel');
  headerEl.textContent = item.name;
  
const imagesEl = newItem.querySelector('.card__image');
imagesEl.src = item.link;

const imagesDescription = newItem.querySelector('.card__image');
imagesEl.alt = item.description;

  return newItem;
}
render(); 





















// ниже через createElement
// function getItem(item) {
//   const cardItem = document.createElement('article')
//   cardItem.classList.add('card');
// }


// const listGallery = document.querySelector('.gallery');
// const templateEl = document.querySelector('.template');

// function creatCard(str) {
//   const cotainer = ltemplateEl.cloneNode(true);
// }



// creatCard()









// const userTemplate = document.querySelector('#user').content;
// const usersOnline = document.querySelector('.users-online');

// // клонируем содержимое тега template
// const userElement = userTemplate.querySelector('.user').cloneNode(true);

// // наполняем содержимым
// userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
// userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// // отображаем на странице
// usersOnline.append(userElement); 








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


/*
// работа с js по второму видео
// рендарим карты

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
 const list = document.querySelector('.card__titel')
 const bla = initialCards.forEach((item) => {
//   // creatElement, templatestringers, template

//   const  listItemTemplate = `<article class="card ">
//   <img class="card__image" src="images/sebastien-goldberg-w6AIRxw8XSY-unsplash-min.jpg" alt="фотография Амазонки">
//   <div class="card__description-conteiner ">
//       <h2 class="card__titel">${item}</h2>
//       <button type="button" class="card__like-button"></button>
//   </div>
// </article>`
// list.innerHTML += listItemTemplate

const listItemTempalate = document.querySelector('.list-item-template').content.querySelector('.card');
const listItem = ListItemTempalate.cloneNode(true);
const listItemTitel = listItem.querySelector('.card__titel');
listItemTitel = item;

list.append(listItem);

  // 1 найти/создать шаблон
  // 2  склонировать
  // 3 заполнить данными
  // 4 добавить в дом

 });
*/

// 3 attempt

// const listGallery = document.querySelector('.gallery');
// const tamplateEl = document.querySelector('.template').content;

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 

// initialCards.forEach(function (element) {
// const initialCardsElement = tamplateEl.cloneNode(true);
// initialCardsElement.querySelector('.card')



// });