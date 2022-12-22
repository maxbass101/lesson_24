"use strict"
/*
let usersNames = ["Вася", "Петя", "Оля", "Никита"];
usersNames.forEach(userName => {
   console.log(userName);
});
*/

// Метод добавления элемента в крнец массива push
/*
let usersNames = ["Вася", "Петя", "Оля"];
usersNames.push("Никита");
console.log(usersNames);
*/

// Проверка является ли массивом
/*
console.log(Array.isArray(usersNames));

const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lasttChild = bodyElement.lastElementChild;

console.log(firstChild);
console.log(lasttChild);
*/

// Изменение документа
/*
const listItems = document.querySelectorAll('.list__item');
listItems.forEach(listItem => {
   console.log(listItem.textContent);
});
listItems.forEach((listItem, index) => {
   listItem.innerHTML = `Индекс: ${index}`;
});
*/

// Создание объектов
/*
let newObject = document.createElement('div');
newObject.innerHTML = `<span class="big">Привет!</span>`;
console.log(newObject);

const page = document.querySelector('.page');
page.before(newObject);
*/

// УРОК №8 ========================================
// Задача №1. Кто попадёт в консоль первым Вася или Коля?
/*
function showNmae() {
   console.log('Вася!');
}

setTimeout(showNmae, 0);
console.log('Коля!');
*/

// Задача №2. Верно ли вызвана функция
/*
showMeassage();
function showMessage() {
   console.log('Сообщение');
}
*/

// Задача №3. Верно ли вазвана функция
/*
showMeassage();
let showMeassage = function() {
   console.log('Сообщение');
};
*/

// Задача №4. Как решть проблему?
/*
let showMessage;
if(2 > 1) {
   showMessage = function() {
      console.log('Сообщение');
   };
}
showMessage();
*/
// ================================================

// УРОК №12 ========================================
// Задача №1. Каое число (длинну) мы получим?
/*
let arr = ["Ваня", "Иштван", "Оля"];
console.log(`Массив arr: ${arr}`);
let newArr = arr;
console.log(`Массив newArr: ${newArr}`);
newArr.push("Петя");
console.log(`Массив arr после push: ${arr}`);
console.log(`Массив newAarr после push: ${newArr}`);
console.log(arr.length);
*/

// Задача №2
// let users = ["Ваня", "Иштван"];
// добавте "Оля" в конец
/*
users.push("Оля");
console.log(users);
*/

// замените значение "Иштван" на "Петя"
// код для поиска должен работать с любой длинной
/*
let index = users.indexOf('Иштван');
console.log(index);
if (index >= 0) {
   users.splice(index, 1, "Петя");
   console.log(users);
} else {
   console.log("Элемент не найден");
}
*/

// удалите первый элемент массива и покажите его
/*
let removed = users.splice(1, 1);
console.log(removed);

// вставьте "Маша" и "Паша" в начало массива
users.unshift("Маша", "Паша");
console.log(users);
*/
// ===================================================

// Задача №3. Удалить элемент "Иштван" и вернуть его в переменную
/*
let arr = ["Иштван", "Ваня", "Максим", "Оля", "Петя"];
let element = arr.indexOf('Иштван');
let removedElement;
console.log(element);
if (element >= 0) {
   removedElement = arr.splice(element, 1);
   console.log(`Удалённый элемент: ${removedElement}`);
} else {
   console.log("Элемент не найден");
}
*/

// Задача №4 Сделать из строки массив
/*
let str = "Ваня,Иштван,Оля,Давид";
let strArr = str.split(',');
console.log(strArr);
if (Array.isArray(strArr)) {
   console.log("Массив")
} else {
   console.log("Не массив");
}
*/

// Задача №5. Чему равен previosValue в начале работы метода?
/*
let arr5 = [9, 2, 8,];
let reduceValue = arr5.reduce(function (previosValue, item, index, array){
   console.log(previosValue);
});
*/
// console.log(reduceValue);
//===========================================================

// УРОК №13 =================================================
//console.log("УРОК №13 ===================================");
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
/*
<div data-say-hi="yes">Привет!</div>
*/
/*
let lessonText = document.querySelector('[data-say-hi]');
let dataValue = lessonText.getAttribute('data-say-hi');
console.log(dataValue);
*/

// Задача №2.
// Получить в переменную элемент с текстом Йончи
/*
<ul>
   <li>Корчи</li>
   <li>Йончи</li>
</ul>
*/
/*
let textElementContent;
const textElement = document.querySelectorAll('li');
for (const item of textElement) {
   if (item.textContent == "Йончи") {
      textElementContent = item;
   } 
}
console.log(textElementContent.textContent);
*/

// Задача №3.
// Получить в переменную коллекцию элементов с классом like
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/
/*
let elems = document.querySelectorAll('.like');
for (let item of elems) {
   console.log(item);
}
*/

// Задача №4.
// Куда добавится <li>Текст</li> ?


// JS
/*
const list = document.querySelectorAll('ul');
list[0].insertAdjacentHTML (
   'beforeend',
   '<li>Текст</li>'
);
*/
/*
// HTML
<ul>
   <li>Пункт №1</li>
   <li>Пункт №2</li>
</ul>
*/
//"beforeend" - вставить html в конец list
/*
если применить querySelector или 
обратиться к ul как к list[0]
то <li>Текст</li> добавится в конец объекта list
*/
//===========================================================

// УРОК №14 =================================================
console.log("УРОК №14 ===================================");
// Задача №1.
// Узнать ширину полосы прокрутки
// 1. Узнаю доступную ширину окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
console.log(`Доступная ширина окна: ${mainElementWidth}px`);

// 2. Узнаю ширину окна вместе с полосой прокрутки
const windowWidth = window.innerWidth;
console.log(`Ширина окна вместе с полосой прокрутки: ${windowWidth}px`);

// 3. 
let lineScrollWidth = windowWidth - mainElementWidth;
console.log(`Ширина полосы прокрутки: ${lineScrollWidth}px`);

// Задача №2.
// Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы
/*
function setScrollTo() {
   window.scrollTo(0, 100);
   const windowScrollTop = window.pageYOffset;
   console.log(`Скрол на ${windowScrollTop}px`);
}
setTimeout(setScrollTo, 1000);
*/

// Задача №3.
// Получите координаты любых трёх элементов на странице
const title = document.querySelector('h1');
const getTitleCoord = title.getBoundingClientRect();
console.log(getTitleCoord);

const displayNone = document.querySelector('.display-none');
const getDisplayNoneCoord = displayNone.getBoundingClientRect();
console.log(getDisplayNoneCoord);

const image2 = document.querySelector('.image2');
const getImage2TopCoord = image2.getBoundingClientRect().top;
const getImage2TopDocumentCoord = getImage2TopCoord + window.pageYOffset;
console.log(getImage2TopDocumentCoord);
//===========================================================