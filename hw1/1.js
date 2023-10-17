"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musics = [
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: "1973",
  },
  {
    title: "Bat Out of Hell",
    artist: "Meat Loaf",
    year: "1977",
  },
  {
    title: "Their Greatest Hits ",
    artist: "Eagles",
    year: "1976",
  },
];

class MusicCollections {
  constructor(musics) {
    this.musics = musics;
  }
  *[Symbol.iterator]() {
    for (const music of this.musics) {
      yield music;
    }
  }
}

const musicsCollect = new MusicCollections(musics);
for (const musicsCollect of musics) {
  // console.log(musicsCollect);
  console.log(
    `Название альбома - ${musicsCollect.title} Исполнитель- ${musicsCollect.artist} (Год выпуска - ${musicsCollect.year})`
  );
}
