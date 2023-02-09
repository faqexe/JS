"use strict";

let slider = document.querySelector("#slider");

let left = document.querySelector("#left");
let right = document.querySelector("#right");

let texts = ["1.png", "2.png", "3.png"];

let i = 0;

let timerId = setInterval(() => {
  slider.src = texts[i];
  ++i;

  if (i >= texts.length) {
    i = 0;
  }
}, 2000);

left.addEventListener("click", function (e) {
  e.preventDefault();

  --i;

  if (i < 0) {
    i = texts.length - 1;
  }

  slider.src = texts[i];
});

right.addEventListener("click", function (e) {
  e.preventDefault();

  ++i;

  if (i >= texts.length) {
    i = 0;
  }

  slider.src = texts[i];
});
