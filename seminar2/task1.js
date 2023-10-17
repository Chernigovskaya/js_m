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
    #balance = 0;
    get balance() {
      return this.#balance;
    }
  
    /**
     *   * @param {number} value
     */
    deposit(value) {
      this.#validate(value);
      this.#balance += value;
    }
    withDraw(value) {
      this.#validate(value);
      if (this.#balance - value < 0) {
        throw new Error(`${value} can't be taken from this account`)
      }
      this.#balance -= value;
    }
  
    #validate(value) {
      if (!Number.isFinite(value)){
        throw new TypeError(`${value} must be finite number`)
      }
      if (value < 0) {
        throw new RangeError(`${value} must be greater than 0`)
      }
      if ((value * 100) !== Math.trunc(value * 100)) {
        throw new Error(`${value} must be 2 digits after point`)
      }
      return true;
    }
  }
  
  const account = new BankAccount();
  
  try {
    account.deposit(1000);
    account.deposit(-1000);
  } catch (e) {
    console.log(e)
  }
  
  try {
    account.withDraw(500);
  } catch (e) {
    console.log(e)
  }
  
  console.log(account.balance)