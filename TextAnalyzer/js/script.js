"use strict";

const text = document.querySelector("#textarea");
const countWords = document.querySelector("#words");
const countSymbols = document.querySelector("#symbols");
const countSpaces = document.querySelector("#spaces");
const countPercent = document.querySelector("#percent");

const checkOne = document.querySelector("#check1");
const checkTwo = document.querySelector("#check2");
const checkThree = document.querySelector("#check3");
const checkFour = document.querySelector("#check4");

const checks = document.querySelectorAll('input[type="checkbox"]');
//? Если переключать от нижнего к верхнему происходит вывод
//? Убираются, только при снятии всех галок
//? Поднимать строки при их активации
checks.forEach((check) => {
  check.addEventListener("click", function () {
    if (checkOne.checked) {
      countWords.textContent =
        "Количество слов: " + text.value.split(" ").length;
      if (text.value == "") {
        countWords.textContent = "Нет слов";
      }
    } else if (checkTwo.checked) {
      countSymbols.textContent = "Количество символов: " + text.value.length;
      countWords.textContent = "";
    } else if (checkThree.checked) {
      countSpaces.textContent =
        "Количество символов без учета пробелов: " +
        text.value.replace(/\s/g, "").length;
      countWords.textContent = "";
    } else if (checkFour.checked) {
      // Процентное содержание символов и вывод их в таблицу
      let onePercent = Math.floor(100 / text.value.length);
      let obj = [...text.value].reduce(
        (total, amount) => ({
          ...total,
          [amount]: !total[amount] ? onePercent : total[amount] + onePercent,
        }),
        {}
      );
      countPercent.innerHTML = `<table class = "tb"><td>Символ</td><td>Процентное содержание (%)</td></table>`;
      countWords.textContent = "";
      // countWords.style.display = 'none';

      for (let key in obj) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${key}</td><td>${obj[key]}</td>`;
        document.querySelector(".tb").appendChild(row);
      }
    } else {
      countWords.textContent = "Не выбран ни один фильтр";
      countSymbols.textContent = "";
      countSpaces.textContent = "";
      countPercent.innerHTML = "";
    }
  });
});
