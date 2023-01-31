"use strict";

let inputs = document.querySelectorAll("input");
let btn = document.querySelector("#button");

let answers = ["ответ 1", "ответ 2", "ответ 3"];

btn.addEventListener("click", function () {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === answers[i]) {
      inputs[i].classList.add("right");
    } else {
      inputs[i].classList.add("wrong");
    }
  }
});
