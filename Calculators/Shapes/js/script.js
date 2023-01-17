"use strict";

const ATTENTION_COLOR = "red";
const LABEL_SIZE = "10px";
const LABEL_TEXT = "Заполните поле";

// Квадрат
const boxSide = document.querySelector(".box__side");
const boxButton = document.querySelector(".box__btn");
const boxQuad = document.querySelector(".box__quade");
const boxPerimetr = document.querySelector(".box__perimetr");
const attention = document.querySelector(".box__label");

// Проверка заполненности поля
boxSide.addEventListener("blur", function () {
  if (boxSide.value == "") {
    attention.textContent = LABEL_TEXT;
    attention.style.fontSize = LABEL_SIZE;
    attention.style.color = ATTENTION_COLOR;
  } else if (boxSide.value <= 0) {
    attention.style.fontSize = LABEL_SIZE;
    attention.style.color = ATTENTION_COLOR;
    attention.textContent = "Введите значение больше 0";
  } else {
    attention.textContent = "";
  }
});

// Фокус на поле стирает полученные значения
boxSide.addEventListener("focus", function () {
  boxQuad.textContent = "";
  boxPerimetr.textContent = "";
  boxSide.value = "";
});

boxButton.addEventListener("click", function () {
  if (boxSide.value == "") {
    attention.textContent = "Поле не заполнено";
    attention.style.fontSize = LABEL_SIZE;
    attention.style.color = ATTENTION_COLOR;
  } else if (boxSide.value <= 0) {
    attention.textContent = "Некоректное значение";
  } else {
    boxQuad.textContent = "Площадь квадрата:" + " " + boxSide.value ** 2;
    boxPerimetr.textContent = "Периметр квадрата:" + " " + boxSide.value * 4;
  }
});

// Прямоугольник
const recLong = document.querySelector(".rectangle__long-side");
const recShort = document.querySelector(".rectangle__short-side");
const recButton = document.querySelector(".rectangle__btn");
const recQuad = document.querySelector(".rectangle__quad");
const recPer = document.querySelector(".rectangle__perimetr");
const recLabelOne = document.querySelector(".rec__label-one");
const recLabelTwo = document.querySelector(".rec__label-two");

recLong.addEventListener("blur", function () {
  if (recLong.value == "") {
    recLabelOne.textContent = LABEL_TEXT;
    recLabelOne.style.fontSize = LABEL_SIZE;
    recLabelOne.style.color = ATTENTION_COLOR;
  } else if (recLong.value <= 0) {
    recLabelOne.style.fontSize = LABEL_SIZE;
    recLabelOne.style.color = ATTENTION_COLOR;
    recLabelOne.textContent = "Введите значение больше 0";
  } else {
    recLabelOne.textContent = "";
  }
});

recLong.addEventListener("focus", function () {
  recLong.value = "";
  recQuad.textContent = "";
  recPer.textContent = "";
});

recShort.addEventListener("blur", function () {
  if (recShort.value == "") {
    recLabelTwo.textContent = LABEL_TEXT;
    recLabelTwo.style.fontSize = LABEL_SIZE;
    recLabelTwo.style.color = ATTENTION_COLOR;
  } else if (recShort.value <= 0) {
    recLabelTwo.style.fontSize = LABEL_SIZE;
    recLabelTwo.style.color = ATTENTION_COLOR;
    recLabelTwo.textContent = "Введите значение больше 0";
  } else {
    recLabelTwo.textContent = "";
  }
});

recShort.addEventListener("focus", function () {
  recShort.value = "";
  recQuad.textContent = "";
  recPer.textContent = "";
});

recButton.addEventListener("click", function () {
  if (recLong.value == "") {
    recLabelOne.textContent = "Поле не заполнено";
    recLabelOne.style.fontSize = LABEL_SIZE;
    recLabelOne.style.color = ATTENTION_COLOR;
  } else if (recShort.value == "") {
    recLabelTwo.textContent = "Поле не заполнено";
    recLabelTwo.style.fontSize = LABEL_SIZE;
    recLabelTwo.style.color = ATTENTION_COLOR;
  } else if (recLong.value <= 0) {
    recLabelOne.textContent = "Некорректное значение";
  } else if (recShort.value <= 0) {
    recLabelTwo.textContent = "Некорректное значение";
  } else if (recLong.value == recShort.value) {
    recQuad.textContent =
      "Вы ввели одинаковые значения. Если фигура является квадратом, воспользуйтесь формой выше";
    recQuad.style.color = ATTENTION_COLOR;
  } else {
    recQuad.style.color = "";
    recQuad.textContent =
      "Площадь прямоугольника:" +
      " " +
      Number(recLong.value) * Number(recShort.value);
    recPer.textContent =
      "Периметр прямоугольника" +
      " " +
      2 * (Number(recLong.value) + Number(recShort.value));
  }
});

// Круг
const circleRadius = document.querySelector(".circle__radius");
const pi = 3.14;
const cirLabel = document.querySelector(".circle__label");
const cirButton = document.querySelector(".circle__btn");
const cirQuad = document.querySelector(".circle__quade");
const cirLength = document.querySelector(".circle__length");

circleRadius.addEventListener("blur", function () {
  if (circleRadius.value == "") {
    cirLabel.textContent = LABEL_TEXT;
    cirLabel.style.fontSize = LABEL_SIZE;
    cirLabel.style.color = ATTENTION_COLOR;
  } else if (circleRadius.value <= 0) {
    cirLabel.style.fontSize = LABEL_SIZE;
    cirLabel.style.color = ATTENTION_COLOR;
    cirLabel.textContent = "Введите значение больше 0";
  } else {
    cirLabel.textContent = "";
  }
});

circleRadius.addEventListener("focus", function () {
  cirQuad.textContent = "";
  cirLength.textContent = "";
  circleRadius.value = "";
});

cirButton.addEventListener("click", function () {
  if (circleRadius.value == "") {
    cirLabel.textContent = "Поле не заполнено";
    cirLabel.style.fontSize = LABEL_SIZE;
    cirLabel.style.color = ATTENTION_COLOR;
  } else if (circleRadius.value <= 0) {
    cirLabel.textContent = "Некоректное значение";
  } else {
    cirQuad.textContent =
      "Площадь круга:" + " " + pi * Number(circleRadius.value) ** 2;
    cirLength.textContent =
      "Длинна окружности:" + " " + 2 * pi * Number(circleRadius.value);
  }
});

// Треугольник
const firstSide = document.querySelector(".triangle__first-side");
const secondSide = document.querySelector(".triangle__second-side");
const thirdSide = document.querySelector(".triangle__third-side");
const triangleQuad = document.querySelector(".triangle__square");
const triangleResult = document.querySelector(".triangle__result");
const triLabelOne = document.querySelector(".triangle__label-one");
const triLabelTwo = document.querySelector(".triangle__label-two");
const triLabelThree = document.querySelector(".triangle__label-three");

firstSide.addEventListener("blur", function () {
  if (firstSide.value == "") {
    triLabelOne.textContent = "Заполните поле";
    triLabelOne.style.color = ATTENTION_COLOR;
    triLabelOne.style.fontSize = LABEL_SIZE;
  } else if (firstSide.value <= 0) {
    triLabelOne.style.fontSize = LABEL_SIZE;
    triLabelOne.style.color = ATTENTION_COLOR;
    triLabelOne.textContent = "Введите значение больше 0";
  } else {
    triLabelOne.textContent = "";
    triLabelOne.style.color = "";
    triLabelOne.style.fontSize = "";
  }
});

firstSide.addEventListener("focus", function () {
  firstSide.value = "";
  triangleResult.textContent = "";
});

secondSide.addEventListener("blur", function () {
  if (secondSide.value == "") {
    triLabelTwo.textContent = "Заполните поле";
    triLabelTwo.style.color = ATTENTION_COLOR;
    triLabelTwo.style.fontSize = LABEL_SIZE;
  } else if (secondSide.value <= 0) {
    triLabelTwo.style.fontSize = LABEL_SIZE;
    triLabelTwo.style.color = ATTENTION_COLOR;
    triLabelTwo.textContent = "Введите значение больше 0";
  } else {
    triLabelTwo.textContent = "";
    triLabelTwo.style.color = "";
    triLabelTwo.style.fontSize = "";
  }
});

secondSide.addEventListener("focus", function () {
  secondSide.value = "";
  triangleResult.textContent = "";
});

thirdSide.addEventListener("blur", function () {
  if (thirdSide.value == "") {
    triLabelThree.textContent = "Заполните поле";
    triLabelThree.style.color = ATTENTION_COLOR;
    triLabelThree.style.fontSize = LABEL_SIZE;
  } else if (thirdSide.value <= 0) {
    triLabelThree.style.fontSize = LABEL_SIZE;
    triLabelThree.style.color = ATTENTION_COLOR;
    triLabelThree.textContent = "Введите значение больше 0";
  } else {
    triLabelThree.textContent = "";
    triLabelThree.style.color = "";
    triLabelThree.style.fontSize = "";
  }
});

thirdSide.addEventListener("focus", function () {
  thirdSide.value = "";
  triangleResult.textContent = "";
});

function triQuad() {
  //* Дописать проверку на равносторонний и равнобедренный треугольники
  //* Выводить текст - Треугольник (вид). Воспользуйтесь другой формулой для нахождения его площади
  // Проверка существования треугольника
  if (
    Number(firstSide.value) >
      Number(secondSide.value) + Number(thirdSide.value) ||
    Number(secondSide.value) >
      Number(firstSide.value) + Number(thirdSide.value) ||
    Number(thirdSide.value) > Number(firstSide.value) + Number(secondSide.value)
  ) {
    triangleResult.textContent =
      "Сумма двух сторон не может быть меньше третьей";
    triangleResult.style.color = "red";
  } else {
    // Вычисление по формуле Герона для разностороннего треугольника
    let p =
      (Number(firstSide.value) +
        Number(secondSide.value) +
        Number(thirdSide.value)) /
      2;

    triangleResult.textContent = Math.sqrt(
      p *
        (p - Number(firstSide.value)) *
        (p - Number(secondSide.value)) *
        (p - Number(thirdSide.value))
    );
    triangleResult.style.color = "";
  }
}

triangleQuad.addEventListener("click", function () {
  if (firstSide.value == "") {
    triLabelOne.textContent = "Поле не заполнено";
    triLabelOne.style.color = ATTENTION_COLOR;
    triLabelOne.style.fontSize = LABEL_SIZE;
  } else if (secondSide.value == "") {
    triLabelTwo.textContent = "Поле не заполнено";
    triLabelTwo.style.color = ATTENTION_COLOR;
    triLabelTwo.style.fontSize = LABEL_SIZE;
  } else if (thirdSide.value == "") {
    triLabelThree.textContent = "Поле не заполнено";
    triLabelThree.style.color = ATTENTION_COLOR;
    triLabelThree.style.fontSize = LABEL_SIZE;
  } else if (firstSide.value <= 0) {
    triLabelOne.textContent = "Некорректное значение";
  } else if (secondSide.value <= 0) {
    triLabelTwo.textContent = "Некорректное значение";
  } else if (thirdSide.value <= 0) {
    triLabelThree.textContent = "Некорректное значение";
  } else {
    triQuad();
  }
});
