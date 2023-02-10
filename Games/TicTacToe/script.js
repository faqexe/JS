"use strict";

let cells = document.querySelectorAll("#field td");

// Вводим счетчик ходов
let count = 0;

function start(cells) {
  for (let i of cells) {
    i.addEventListener("click", function func() {
      // Чередеование символов при каждом ходе
      count % 2 === 0 ? (i.textContent = "X") : (i.textContent = "O");

      // Убираем возможность в клетке менять знаки кликом
      this.removeEventListener("click", func);

      // Определение победителя
      function isVictory(cells) {
        // Массив с комбинациями ячеек
        let combs = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        for (let comb of combs) {
          if (
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ""
          ) {
            return true;
          }
        }
        return false;
      }
      // Параметром принимается массив ячеек
      if (isVictory(cells)) {
         // Имя победителя
        alert(`Победил ${this.textContent}!`);
      } else if (count == 8) {
        alert("Ничья!");
      }
      // Каждый ход счетчик прибавляется
      count++;
    });
  }
}

start(cells);

let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
   location.reload();
})
