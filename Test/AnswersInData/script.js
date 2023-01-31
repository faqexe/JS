'use strict';

let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#check');

// Проверка по нажатию на Enter
// inputs.forEach(input => {
//    input.addEventListener('keydown', function(event) {
//       if (event.code === 'Enter') {
//          if (this.value === this.dataset.right) {
//             this.classList.add ('right');
//          } else {
//             this.classList.add ('wrong');
//          }
//       }
//    })
// })

// Проверка по нажатию на кнопку
btn.addEventListener('click', function() {
   inputs.forEach(input => {
      if (input.value === input.dataset.right) {
         input.classList.add ('right');
      } else {
         input.classList.add ('wrong');
      }
   })
})