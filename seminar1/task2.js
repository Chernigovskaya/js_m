/*
Задание 2:
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

class Library {
  constructor(books) {
    this.books = books;
  }

  *[Symbol.iterator]() {
    for (const book of this.books) {
      yield book;
    }
  }
}

const library = new Library(books);
for (const libraryElement of library) {
  console.log(libraryElement);
}
//   [Symbol.iterator]() {
//     let current = 0;
//     const to = this.books.length;

//     return {
//       next: () => {
//         if (current === to) {
//           return { done: true, value: undefined };
//         }
//         return this.books[current++];
//       },
//     };
//   }
// }

// const library = new Library(books);

const newObj = library[Symbol.iterator]();
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());
console.log(newObj.next());
