"use strict";

let field = document.querySelector("#field");
let message = document.querySelector("#message");

let cities = [];

field.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    message.textContent = "";
    message.style.color = "";
    let firstChar = field.value.toLowerCase().charAt(0);
    //  cities.push(field.value.toLowerCase());

    if (cities.some((city) => city === field.value.toLowerCase())) {
      message.textContent = "Такой город уже был";
    } else {
      cities.push(field.value.toLowerCase());
      message.textContent = "Переход хода";
    }

    // первая буква из поля ввода
    //  let firstChar = field.value.toLowerCase().charAt(0);
    //  console.log(firstChar);
    // Проверка совпадения букв
    if (cities.length > 1) {
      // ищем последнюю букву в последнем элементе массива
      let lastChar = cities[cities.length - 2].toString().slice(-1);

      if (lastChar !== firstChar) {
        //   message.textContent = "Переход хода";
        //   message.style.color = "green";
        message.textContent = "Не совпадает";
        message.style.color = "red";
      }
      // else {
      // //   cities.pop();
      //   message.textContent = "Не совпадает";
      //   message.style.color = "red";
      // }
    }

    //  console.log(cities);

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

//! Доделать проверку массива на совпадения
