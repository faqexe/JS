"use strict";

let parent = document.querySelector("#test");
let check = document.querySelector("#button");

let answers = ["ответ 1", "ответ 2", "ответ 3"];

let questions = ["вопрос 1?", "вопрос 2?", "вопрос 3?"];

//? по заходу на страницу нам необходимо перебрать массив вопросов и сформировать HTML код каждого вопроса - родительский див, абзац с текстом и инпут для ответа. Копка должна проверить правильность ответов.

function getHtml() {
  for (let i = 0; i < questions.length; i++) {
    let div = document.createElement("div");
    parent.appendChild(div);
    let par = document.createElement("p");
    par.textContent = questions[i];
    let input = document.createElement("input");
    div.insertAdjacentElement("afterbegin", par);
    div.insertAdjacentElement("beforeend", input);
  }
}
getHtml();

let inputs = document.querySelectorAll('input');

check.addEventListener("click", function () {
  for (let i = 0; i < answers.length; i++) {
    if (inputs[i].value === answers[i]) {
      inputs[i].classList.add("right");
    } else {
      inputs[i].classList.add("wrong");
    }
  }
});
