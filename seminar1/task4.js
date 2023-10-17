/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.

Необходимо:
1. Создать Map объект, который будет использоваться для хранения соответствия
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные
студентом.
*/
const teachers = ['Foo', 'Bar', 'Baz', 'Spam', 'Egg'];
const lessons = ['Lorem1', 'Lorem2', 'Lorem3', 'Lorem4', 'Lorem5'];

const lessonsTeacher = new Map();
const studentLessons = new Map();

teachers.forEach((teacher, idx) => lessonsTeacher.set(teacher, lessons[idx]));
console.log(lessonsTeacher)

const ivan = {
  name: "Иван",
};
const ivan1 = {
  name: "Иван1",
};
const ivan2 = {
  name: "Иван2",
};
const ivan3 = {
  name: "Иван3",
};
const ivan4 = {
  name: "Иван4",
};

const ivans = [ivan, ivan1, ivan2, ivan3, ivan4];

ivans.forEach(ivan => studentLessons.set(ivan, new Set([...lessons].sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * lessons.length)))))

console.log(studentLessons)

// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по Lorem2: **вывести учителя по математике**`);
lessonsTeacher.forEach((lesson, teacher) => {
   if (lesson === 'Lorem2')
     console.log(teacher)
})
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(', ')}`);