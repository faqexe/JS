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
  } else if (recShort.value == "") {
    recLabelTwo.textContent = "Поле не заполнено";
  } else if (recLong.value <= 0) {
    recLabelOne.textContent = "Некорректное значение";
  } else if (recShort.value <= 0) {
    recLabelTwo.textContent = "Некорректное значение";
  } else {
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
const triangleQuad = document.querySelector(".triangle__squre");
const triangleResult = document.querySelector(".triangle__result");

firstSide.addEventListener("blur", function () {
  if (firstSide.value == "") {
    triangleResult.textContent = "Заполните поле";
    triangleResult.style.color = ATTENTION_COLOR;
    firstSide.style.borderColor = ATTENTION_COLOR;
  } else {
    triangleResult.textContent = "";
    triangleResult.style.color = "";
    firstSide.style.borderColor = "";
  }
});

secondSide.addEventListener("blur", function () {
  if (secondSide.value == "") {
    triangleResult.textContent = "Заполните поле";
    triangleResult.style.color = ATTENTION_COLOR;
    secondSide.style.borderColor = ATTENTION_COLOR;
  } else {
    triangleResult.textContent = "";
    triangleResult.style.color = "";
    secondSide.style.borderColor = "";
  }
});

thirdSide.addEventListener("blur", function () {
  if (thirdSide.value == "") {
    triangleResult.textContent = "Заполните поле";
    triangleResult.style.color = ATTENTION_COLOR;
    thirdSide.style.borderColor = ATTENTION_COLOR;
  } else {
    triangleResult.textContent = "";
    triangleResult.style.color = "";
    thirdSide.style.borderColor = "";
  }
});

function triQuad() {
  // Проверка существования треугольника
  if (
    firstSide.value < Number(secondSide.value) + Number(thirdSide.value) &&
    secondSide.value < Number(thirdSide.value) + Number(thirdSide.value) &&
    thirdSide.value < Number(thirdSide.value) + Number(secondSide.value)
  ) {
    // Вычисление по формуле Герона
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
  } else {
    triangleResult.textContent =
      "Сумма двух сторон не может быть меньше третьей";
    triangleResult.style.color = "red";
  }
}

triangleQuad.addEventListener("click", triQuad);
