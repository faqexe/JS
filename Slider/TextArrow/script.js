"use strict";

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");

let texts = ["text1", "text2", "text3"];

let i = 0;
slider.innerHTML = texts[i];

left.addEventListener("click", function (e) {
  e.preventDefault();

  --i;

  if (i < 0) {
    i = texts.length - 1;
  }

  slider.innerHTML = texts[i];
});

right.addEventListener("click", function (e) {
  e.preventDefault();

  ++i;

  if (i >= texts.length) {
    i = 0;
  }

  slider.innerHTML = texts[i];
});
