"use strict";

const input = document.querySelector("#text");

const buttons = document.querySelectorAll(".btn");

// Функция клика по каждой кнопке и занесения
// ее значения в инпут
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.textContent.toLowerCase();
  });
});

// Удадение последнего символа в строке
const back = document.querySelector("#back");
back.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

// Переводит введеные символы в верхний регистр
const caps = document.querySelector("#caps");
caps.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

// Пробел
const space = document.querySelector("#space");
space.addEventListener("click", () => {
  input.value += " ";
});

// Tab - добавляет 4 пробела
const tab = document.querySelector("#tab");
tab.addEventListener("click", () => {
  input.value += " " + " " + " " + " ";
});