"use strict";

// Приветствие
alert('Приветствую на игре "Угадай число"!');
alert("Давай познакомимся!");

// Узнаем имя
const getName = prompt("Как тебя зовут?", " ");
if (getName) {
  alert(`Привет, ${getName}!`);
} else {
  // Если игрок нажал клавишу отмены
  alert(`Привет, аноним!`);
}

alert(
  "Я загадал число. Попробуй угадать его, введя значение от 0 до 100 в поле на странице"
);

// Функция для получения целого рандомного числа
const getRandomValue = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getForm = document.querySelector("#number");
const button = document.querySelector("#btn");

// Присваиваем новой переменной рандомное число
const n = getRandomValue(0, 100);
// Оставляем подсказку в консоле
console.log(n);

button.addEventListener("click", function () {
  if (getForm.value == "") {
    alert("Ничего не введено");
  } else if (getForm.value < n) {
    alert("Загаданное число больше");
  } else if (getForm.value > n) {
    alert("Загаданное число меньше");
  } else {
    alert("Вы угадали!!!");
    let question = confirm("Начать заново?");
    if (question) {
      // Перезагружает страницу
      window.location.reload();
    } else {
      alert("Игра окончена. Спасибо за участие!");
      // Блокируются форма ввода и кнопка проверки
      getForm.disabled = true;
      button.disabled = true;
    }
  }
});

const refreshPage = document.querySelector("#reload");

refreshPage.addEventListener("click", () => window.location.reload());
