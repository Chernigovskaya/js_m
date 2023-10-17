// Задание 1:
// Необходимо создать механизм для безопасного добавления метаданных к объектам
// книг с использованием ключей типа Symbol. Для чего необходимо:
//     1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут
// необходимы для работы кода ниже.

// Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

const reviewSymbol = Symbol.for('review');
const ratingSymbol = Symbol.for('rating');
const tagsSymbol = Symbol.for('tags');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getAverageRating() {
    if (!this[ratingSymbol].length) return null;
    return this[ratingSymbol].reduce((a, x) => a + x, 0) / this[ratingSymbol].length;
  }

  reviewsCount() {
    return this[reviewSymbol]?.length || 0;
  }

  hasTag(str) {
    return this[tagsSymbol]?.includes(str) || false;
  }

  /**
   * Метод извлекает из объекта book значение под свойством metadataType
   * и возвращает его.
   * @param {Book} book
   * @param {Symbol} metadataType
   * @returns {Array}
   */
  static getMetadata(book, metadataType) {
    return book[metadataType]
  }

  /**
   * Метод добавляет в свойство book массив под ключом metadataType,
   * со значением data внутри. Если массив под данным свойством уже существует,
   * тогда data просто будет добавлен в данный массив.
   * @param {Book} book
   * @param {Symbol} metadataType
   * @param {any} data
   */
  static addMetadata(book, metadataType, data) {
    Array.isArray(book[metadataType]) ? book[metadataType].push(data) : book[metadataType] = [data];
  }
}

const book = new Book("George Orwell", "1984");
Book.addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
Book.addMetadata(book, reviewSymbol, "Книга отстой, не покупайте ее.");
Book.addMetadata(book, ratingSymbol, 5);
Book.addMetadata(book, ratingSymbol, 4);
Book.addMetadata(book, ratingSymbol, 4);
Book.addMetadata(book, tagsSymbol, "novel");
Book.addMetadata(book, tagsSymbol, "dystopia");

// --- Вывод метаданных для книги

// ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
console.log(Book.getMetadata(book, reviewSymbol));
console.log(Book.getMetadata(book, ratingSymbol)); // [5, 4, 4]
console.log(Book.getMetadata(book, tagsSymbol)); // ["novel", "dystopia"]

console.log(book.getAverageRating()); // 4.3
console.log(book.hasTag("novel")); // true
console.log(book.hasTag("blockbuster")); // false
console.log(book.reviewsCount()); // 2