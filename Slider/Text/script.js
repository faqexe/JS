"use strict";

const block = document.querySelector("#slider");

let texts = ["text1", "text2", "text3"];

let i = 0;

let timerId = setInterval(() => {
  block.textContent = texts[i];
  ++i;

  if (i >= texts.length) {
    i = 0;
  }
}, 1000);
