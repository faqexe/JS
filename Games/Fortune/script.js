"use strict";

let timer = document.querySelector("#timer");
let text = document.querySelector("#text");
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");

let startID;

btnStart.addEventListener("click", function func() {
  let count = 0;
  startID = setInterval(() => {
    timer.textContent = ++count;

    if (count >= 20) {
      count = 0;
    }
  }, 50);

  this.removeEventListener("click", func);

  btnStart.classList.add("dis");
  btnStop.classList.remove("dis");
});

btnStop.addEventListener("click", () => {
  clearInterval(startID);

  for (let i in dataFort) {
    if (timer.textContent == i) {
      timer.classList.add("dis");
      text.textContent = dataFort[i];
      if (i % 2 == 0) {
        text.style.color = "red";
      } else {
        text.style.color = "green";
      }
    }
  }
  btnStop.classList.add("dis");
});

let dataFort = {
  1: "Не отказывайте себе в том, что дарит вам улыбку",
  2: "Если долго ждать, можно состариться",
  3: "Любое дело начинается с веры в себя",
  4: "Завидуя, ты разрушаешь собственную душу",
  5: "Любой успех дела определяется его целью",
  6: "Некоторые вещи слишком тяжелы, чтобы тянуть их за собой",
  7: "Даже в пятницу на работе можно найти счастье",
  8: "Оглянитесь назад, чтобы понять, в какой момент свернули не в ту сторону.",
  9: "Не ждите чудес, чудите сами!",
  10: "Искушение — это не возможно. Не путайте!",
  11: "Не откладывай на завтра то, что не планируешь делать никогда",
  12: "Нет большей ошибки, чем быть всегда правым",
  13: "Не отказывай себе в удовольствии",
  14: "Глупость — самый большой враг человека",
  15: "Рискни! Судьба улыбается отчаянным",
  16: "Перекладывание ответственности на кого-то еще никого не спасло",
  17: "Ты можешь гораздо больше, чем думаешь",
  18: "Следует быть смелее не только в мыслях, но и в действиях",
  19: "Сейчас самое время вступить на неизведанную территорию",
  20: "Иногда стоит отпустить что-то старое, чтобы обрести новое",
};
