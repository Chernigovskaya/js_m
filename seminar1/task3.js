/*
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не
являются стандартными массивами, но похожи на них. Однако у таких коллекций
нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы
научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.

Задание 3:
Напишите функцию, которая собирает все элементы <div> на странице, преобразует
их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите отфильтрованный результат в консоль.
*/

function getAllDivs() {
    return Array.from(document.querySelectorAll('div')).filter(el => el.dataset.active);
  }
  
  getAllDivs().forEach(el => console.log(el.outerHTML))
  getAllDivs().forEach(el => console.log(el.textContent))



  

//   const divElements = Array.from(document.querySelectorAll('div'));

// // const activeDivs = divElements.filter(element => element.hasAttribute('data-active'));
// const activeDivs = divElements.filter(element => element.dataset.active);

// activeDivs.forEach(element => {
// console.log(element);
// });