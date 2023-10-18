/*
Задание 2:
Мы создаем приложение. У нас планируется два вида пользователей, обычные и
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.

1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать
соответствующий ответ из функции (в свободном формате).
*/

class User {

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  class PremiumUser extends User {
    premiunAccount = new Date().setFullYear(new Date().getFullYear() + 1) //срок действия на год вперед
  }

  
  class RegularUser extends User {
    constructor(firstName, lastName) {
      super(firstName, lastName);
    }
  }

  function getAccountInfo(user) {
    if (user instanceof User) {
        const prem = user?.premiunAccount;
        if (prem) {
            console.log('премиум действителен до ' + prem);
        } else {
            console.log('нет премиума');
        }
    } else {
        console.log('не определен');
    }
  }

  const user1 = new PremiumUser();
  const user2 = new RegularUser();
  const user3 = new Object();
  getAccountInfo(user1);
  getAccountInfo(user2);
  getAccountInfo(user3);

  
//   /**
//    *
//    * @param {PremiumUser | RegularUser} user
//    */
//   const getAccountInfo = (user) => user instanceof PremiumUser ? 'Premium user' : 'DNISHEBROD!!!!';
  
//   const me = new PremiumUser('Elijah', 'Shcherbakov');
//   const notMe = new RegularUser('name', 'no name');
  
//   console.log(getAccountInfo(me));
//   console.log(getAccountInfo(notMe));