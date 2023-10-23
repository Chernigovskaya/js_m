/*
Задание 2:
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов.
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для
своего гарнитура. После того как пользователь собрал свой комплект и сохраняет
свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта
их индивидуальные настройки автоматически загружаются, и они видят ранее
созданный мебельный комплект.

1. Создайте базовую HTML-структуру с различными элементами мебели (например,
стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой
мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить
комплект", которая сохраняет текущий выбор пользователя в куки.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры
из куки и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные
настройки (очистить куки).
*/

const STORAGE_KEY = "kitchen";
const setDataInLocalStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};

const getDataFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return false;
  }
};

const delDataFromLocalStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
};


const kitchenForm = document.querySelector(".kitchen");

const tableColor = document.querySelector("#tableColor");
const tableDesign = document.querySelector("#tableDesign");

const chairColor = document.querySelector("#chairColor");
const chairDesign = document.querySelector("#chairDesign");

const sofaColor = document.querySelector("#sofaColor");
const sofaDesign = document.querySelector("#sofaDesign");

const saveOrder = () => {
  const table = {
    color: tableColor.value,
    design: tableDesign.value,
  };
  const chair = {
    color: chairColor.value,
    design: chairDesign.value,
  };
  const sofa = {
    color: sofaColor.value,
    design: sofaDesign.value,
  };
  setDataInLocalStorage({
    table, chair, sofa
  });
};

kitchenForm.addEventListener("submit", e => {
  e.preventDefault();
  saveOrder();
});

const delBtn = document.querySelector("#delBtn");
delBtn.addEventListener("click", delDataFromLocalStorage);

const setDataInForm = () => {
  const data = getDataFromLocalStorage();
  console.log(data);
  if (!data) return;
  tableColor.value = data.table.color;
  tableDesign.value = data.table.design;
  chairColor.value = data.chair.color;
  chairDesign.value = data.chair.design;
  sofaColor.value = data.sofa.color;
  sofaDesign.value = data.sofa.design;

};

document.addEventListener("DOMContentLoaded", setDataInForm);