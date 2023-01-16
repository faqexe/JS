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
});

boxButton.addEventListener("click", function () {
  boxQuad.textContent = "Площадь квадрата:" + " " + boxSide.value ** 2;
  boxPerimetr.textContent = "Периметр квадрата:" + " " + boxSide.value * 4;
});

// Прямоугольник
const recLong = document.querySelector(".rectangle__long-side");
const recShort = document.querySelector(".rectangle__short-side");
const recSquare = document.querySelector(".rectangle__square");
const recPerimetr = document.querySelector(".rectangle__perimetr");
const recResult = document.querySelector(".rectangle__result");

function recQuad() {
  recResult.textContent = Number(recLong.value) * Number(recShort.value);
}

function recPer() {
  recResult.textContent = 2 * (Number(recLong.value) + Number(recShort.value));
}

recLong.addEventListener("blur", function () {
  if (recLong.value == "") {
    recResult.textContent = "Заполните поле";
    recResult.style.color = ATTENTION_COLOR;
    recLong.style.borderColor = ATTENTION_COLOR;
  } else {
    recResult.textContent = "";
    recResult.style.color = "";
    recLong.style.borderColor = "";
  }
});

recShort.addEventListener("blur", function () {
  if (recShort.value == "") {
    recResult.textContent = "Заполните поле";
    recResult.style.color = ATTENTION_COLOR;
    recShort.style.borderColor = ATTENTION_COLOR;
  } else {
    recResult.textContent = "";
    recResult.style.color = "";
    recShort.style.borderColor = "";
  }
});

recSquare.addEventListener("click", recQuad);
recPerimetr.addEventListener("click", recPer);

// Круг
const circleRadius = document.querySelector(".circle__radius");
const pi = 3.14;
const circleSquare = document.querySelector(".circle__square");
const circleLength = document.querySelector(".circle__length");
const circleResult = document.querySelector(".circle__result");

function cirQuad() {
  circleResult.textContent = pi * Number(circleRadius.value) ** 2;
}

function cirLen() {
  circleResult.textContent = 2 * pi * Number(circleRadius.value);
}

circleRadius.addEventListener("blur", function () {
  if (circleRadius.value == "") {
    circleResult.textContent = "Заполните поле";
    circleResult.style.color = ATTENTION_COLOR;
    circleRadius.style.borderColor = ATTENTION_COLOR;
  } else {
    circleResult.textContent = "";
    circleResult.style.color = "";
    circleRadius.style.borderColor = "";
  }
});

circleSquare.addEventListener("click", cirQuad);
circleLength.addEventListener("click", cirLen);

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
