"use strict";

let parent = document.querySelector("#test");
let check = document.querySelector("#button");

//? Вопросы и ответы находятся в объекте
// let questions = {
//   "Вопрос 1?": "ответ 1",
//   "Вопрос 2?": "ответ 2",
//   "Вопрос 3?": "ответ 3",
// };

// function getHtml() {
//   for (let key in questions) {
//     let div = document.createElement("div");
//     parent.appendChild(div);
//     let par = document.createElement("p");
//     par.textContent = key;
//     let input = document.createElement("input");
//     div.insertAdjacentElement("afterbegin", par);
//     div.insertAdjacentElement("beforeend", input);
//   }
// }
// getHtml();

// let inputs = document.querySelectorAll("input");

// check.addEventListener("click", function () {
//   for (let i = 0; i < inputs.length; i++) {
//     let answer = inputs[i].value;
//     let question = inputs[i].previousElementSibling.innerHTML;

//     for (let key in questions) {
//       if (question == key) {
//         if (answer == questions[key]) {
//           inputs[i].classList.add("right");
//         } else {
//           inputs[i].classList.add("wrong");
//         }
//       }
//     }
//   }
// });

//? Вопросы и ответы находятся в массиве с объектами
let questions = [
  {
    text: "вопрос 1?",
    right: "ответ 1",
  },
  {
    text: "вопрос 2?",
    right: "ответ 2",
  },
  {
    text: "вопрос 3?",
    right: "ответ 3",
  },
];

function getHtml() {
  for (let i = 0; i < questions.length; i++) {
    let div = document.createElement("div");
    parent.appendChild(div);
    let par = document.createElement("p");
    par.textContent = questions[i].text;
    let input = document.createElement("input");
    div.insertAdjacentElement("afterbegin", par);
    div.insertAdjacentElement("beforeend", input);
  }
}
getHtml();

let inputs = document.querySelectorAll("input");

check.addEventListener("click", function () {
  inputs.forEach((input) => {
    let answer = input.value;
    let question = input.previousElementSibling.innerHTML;

    questions.forEach((elem) => {
      if (question === elem.text) {
        if (answer === elem.right) {
          input.classList.add("right");
        } else {
          input.classList.add("wrong");
        }
      }
    });
  });
});
