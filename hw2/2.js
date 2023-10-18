"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/

const reviews = document.getElementById('reviews');
const reviewInput = document.getElementById('reviewInput');
const addReviewButton = document.getElementById('reviewAdd');
const productsSelect = document.querySelector("#productField");


const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

initialData.forEach(item => {
  const field = `<option value="${item.product}">${item.product}</option>`;
  productsSelect.insertAdjacentHTML("beforeend", field);
});

function addReview(text) {
  const newReview = document.createElement('div');
  newReview.textContent = text;
  reviews.appendChild(newReview);
}
addReviewButton.addEventListener('click', () => {
  const text = reviewInput.value;
  
  try {
    validateReviewLength(text);
    addReview(`Новый отзыв: ${text}`);
    reviewInput.value = ''; 
  } catch (error) {
    console.log(error.message);
  }
});

function validateReviewLength(text) {
  if (text.length < 50 || text.length > 500) {
    throw new Error('Отзыв должен содержать от 50 до 500 символов.');
  }
}

