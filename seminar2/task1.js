/*
Задание 1:
Давайте создадим класс для управления банковским счетом. В этом классе будет
приватное свойство для хранения текущего баланса, а также методы для внесения
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет.
Убедитесь, что сумма внесения не отрицательная, что значение является
нормальным числом и дробная часть не превышает двух знаков, в противном случае
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета.
Убедитесь, что сумма внесения не отрицательная, что значение является
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия
не может превышать текущий баланс аккаунта в противном случае выбрасывайте
соответствующую ошибку.
*/

class BankAccount {
  /**
   *
   * @type {number}
   */
  // приватное свойство для хранения баланса
  #balance = 0;
  // геттер  для получения балвнса
  get balance() {
    return this.#balance;
  }

  /**
   *   * @param {number} value
   * метод для внесения денег
   */
  deposit(value) {
    if (value < 0) throw new Error("нет денег");
    this.#balance += value;
    return this.#balance;
  }

  //снятие денег
  withDraw(value) {
    if (this.#balance - value < 0) {
      throw new Error(`${value} can't be taken from this account`);
    }
    this.#balance -= value;
    return this.#balance;
  }

  constructor(initialBalans) {
    if (initialBalans < 0) throw new Error("нет возможности открыть");
    this.#balance = initialBalans;

  }

}

const account = new BankAccount(500);
account.deposit(700);
account.withDraw(200)


console.log(account.balance);
