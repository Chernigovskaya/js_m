"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// function newOrder...

// const shefCooks = new Map();
// shefCooks.set("Олег", ["Пицца Маргарита", "Пицца Пепперони", "Пицца Три сыра"]);
// shefCooks.set("Андрей", ["Суши Филадельфия", "Суши Калифорния", "Суши Чизмаки","Суши Сеякемаки",]);
// shefCooks.set("Анна", "Десерт Чизкейк")
// console.log(shefCooks);
const cooks = ["Олег", "Андрей", "Анна"];
const specialization = ["Пицца", "Суши", "Десерты"];
const cooksSpecial = new Map();
cooks.forEach((cook, idx) => cooksSpecial.set(cook, specialization[idx]));
console.log(cooksSpecial);

const dishesChef = new Map();

dishesChef.set("Пицца Маргарита", "Олег");
dishesChef.set("Пицца Пепперони", "Олег");
dishesChef.set("Пицца Три сыра", "Олег");
dishesChef.set("Суши Филадельфия", "Андрей");
dishesChef.set("Суши Калифорния", "Андрей");
dishesChef.set("Суши Чизмаки", "Андрей");
dishesChef.set("Суши Сеякемаки", "Андрей");
dishesChef.set("Десерт Тирамису", "Анна");
dishesChef.set("Десерт Чизкейк", "Анна");
console.log(dishesChef);


const orders = new Map;
const newOrder1 = new Set().add('Пицца Маргарита')
.add('Суши Чизмаки').add("Десерт Тирамису");
const newOrder2 = new Set().add('Суши Чизмаки');

orders.set('Ivan', newOrder1);
orders.set('Egor', newOrder2);


function findChefForCooks(name) {
  const chefName = dishesChef.get(name);
  return chefName ? `Повар ${chefName} готовит ${name}` : "Блюдо не найдено";
}

console.log(`заказ:  ${[...orders.get('Ivan')]}`); //заказ:  Пицца Маргарита,Суши Чизмаки,Десерт Тирамису
console.log(findChefForCooks("Суши Сеякемаки")); //Повар Андрей готовит Суши Сеякемаки
console.log(findChefForCooks("Суши Скемаки")); //Блюдо не найдено

console.log(`заказ:  ${[...orders.get('Egor')]}`);



