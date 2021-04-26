// переменные модального окна редактирование профиля
const editModal = document.querySelector('.popup_editing_profile');
const openEditModalButton = document.querySelector('.profile__info-adit-button');
const closeEditModalButton = editModal.querySelector('.popup__button-close');
//const closePopupOverLay = document.querySelector('.popup');
const popupConteiner = document.querySelector('.popup__conteiner');

// переменные модального окна добавления карточек
const addCardModal = document.querySelector('.popup_add_cards'); 
const openAddCardModalButton = document.querySelector('.profile__add-button'); 
const closeAddCardModalButton = addCardModal.querySelector('.popup__button-close');


// переменные модального окна откытия фотографии из карточки
const imageModal = document.querySelector('.popup_type_image');
// const openImageModalButton = document.querySelector('.popup_type_image'); изменить класс поиска
const closeImageCardModalButton = imageModal.querySelector('.popup__button-close');
const imageModalImage = imageModal.querySelector('.popup__img');
const imageModalCaption = imageModal.querySelector('.popup__img-caption')



// переменные для редактирование профайла
const textProfileSubtitel = document.querySelector('.profile__info-subtitle');
const textProfiletitel = document.querySelector('.profile__info-title')
const formElement = document.querySelector('.popup__form');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputAbout = document.querySelector('.popup__input_type_about');


      
// общая функция открытия и закрытия модальных окон
function toggleModalWindow(modal) {
  modal.classList.toggle('popup_visible')
}

openEditModalButton.addEventListener('click', () => toggleModalWindow(editModal))
openAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))

closeEditModalButton.addEventListener('click', () => toggleModalWindow(editModal))
closeAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))



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
imagesDescription.alt = item.description;

const removeBtn = newItem.querySelector('.card__remove-button');
removeBtn.addEventListener('click', cardRemove);

  return newItem;
}
//добавление карточек
function handleAdd() {
  const inputText = popupInputNameImg.value;
  const listItem = getItem({titel: inputText});
  templateEl.prepend(listItem);
  popupInputNameImg.value = ''

}

//удаление карточек
function cardRemove(event) {
  const targetEl = event.target;
  const targetItem = targetEl.closest('.card');
  targetItem.remove()
}

render(); 
 
// загрузка фотографий
// const form = document.querySelector('.popup__form-add-card')
// const popupInputNameImg = document.querySelector('.popup__input_type_name-img');        
// const popupTypeUrlLink = document.querySelector('.popup__input_type_url-link'); 

// const formSubmitHandler = e => {
// e.preventDefault()
// const inputValue = addEventListener.value;

// const newItem = templateEl.content.cloneNode(true); 
// const headerEl = newItem.querySelector('.card__titel');
// headerEl.textContent = inputValue;
// }

// form.addEventListener('submit', formSubmitHandler)







































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

// открытие и закрытие попапа
// function openPopup() {

//     editModal.classList.add('popup_visible');
//     popupInputAbout.value = textProfileSubtitel.textContent;
//     popupInputName.value = textProfiletitel.textContent;

// }

// function openPopup2() {
//   addCardModal.classList.add('popup_visible');
// }






// function closePopup() {
//   editModal.classList.remove('popup_visible');
// }

// openEditModalButton.addEventListener('click', openPopup);

// closeEditModalButton.addEventListener('click', closePopup);

// openAddCardModalButton.addEventListener('click', openPopup); //cards
















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

