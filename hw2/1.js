"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library {
  #books = new Set();
  constructor(newBook) {
    if (new Set(newBook).size !== newBook.length) {
      throw new Error("Есть дубликаты в списке.");
    }
    newBook.forEach(book => {
        this.#books.add(book)
    });;
  }
  get allBooks() {
    return this.#books;
  }

  hasBook(title) {
    return this.#books.has(title);
  }
  addBook(title) {
    if (this.hasBook(title)) {
        throw new Error(`Книга ${title} уже есть в библиотеке`);
    }
    this.#books.add(title);
}
removeBook(title) {
    if (!this.hasBook(title)) {
        throw new Error(`Книги ${title} нет в списках`);
    }
    this.#books.delete(title);
}
}

// const library = new Library(['Book1', 'Book2', 'Book3','Book3']); //Есть дубликаты в списке.
const library = new Library(["Book1", "Book2", "Book3"]);
console.log(library);
library.addBook('Book4');
console.log(library);
// library.addBook('Book4'); // Книга Book4 уже есть в библиотеке
library.removeBook('Book4')
console.log(library);
// library.removeBook('Book14') // Книги Book14 нет в списках
