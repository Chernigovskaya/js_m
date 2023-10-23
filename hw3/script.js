// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productInput = document.querySelector("#productInput");
const reviewInput = document.querySelector("#reviewInput");
const reviewAdd = document.querySelector("#reviewAdd");

reviewAdd.addEventListener('click', () => {
    const product = productInput.value.trim();
    const review = reviewInput.value.trim();

    if (product && review) {
        setReviewInLocalStorage(product, review);
        productInput.value = '';
        reviewInput.value = '';
    } else {
        alert('Введите название продукта и отзыв');
    }
});


const setReviewInLocalStorage = (product, review) => {
    
  try {
    localStorage.setItem(product, JSON.stringify(review));
    return true;
    getReviewFromLocalStorage()
  } catch (e) {
    return false;
  }
};

const getReviewFromLocalStorage = (product) => {
  try {
    return JSON.parse(localStorage.getItem(product));
  } catch (e) {
    return false;
  }
};

const deleteReviewFromStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
};


// не получилось удалить одно что то
// const deleteReviewFromStorage = (product) => {
//     try {
//       localStorage.removeItem(product);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   };
  

const delBtn = document.querySelector("#delBtn");
delBtn.addEventListener("click", deleteReviewFromStorage);


console.log(localStorage);

for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        console.log(key,': ', localStorage[key]);
        
    }
}
