"use strict";
//! Дорабоать функцию поиска в массиве

let field = document.querySelector("#field");
let message = document.querySelector("#message");
let cities = [];

field.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    let word = field.value.toLowerCase();
    // первая буква из поля ввода
    let firstChar = word.charAt(0);

    let check = cities.some((word) => cities.includes(word, 1));

    if (cities.length === 0) {
      cities.push(word);
      message.textContent = "Переход хода";
      message.style.color = "green";
      // Проверка совпадения букв
    } else {
      cities.unshift(word);
      // ищем последнюю букву в предыдущем элементе массива
      // let lastChar = cities[cities.length - 2].toString().slice(-1);
      let lastChar = cities[1].toString().slice(-1);

      if (lastChar === firstChar) {
        message.textContent = "Переход хода";
        message.style.color = "green";
      } else {
        message.textContent = "Не совпадает";
        message.style.color = "red";
        cities.shift();
      }
    }

    //** Рабочий код проверки */
    // проверка на такое же слово в массиве
    // if (cities.some((city) => city === field.value.toLowerCase())) {
    //   message.textContent = "Такой город уже был";
    // } else {
    //   cities.push(field.value.toLowerCase());
    //   message.textContent = "Переход хода";
    // }

    console.log(cities);
  }
});
