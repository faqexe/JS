"use strict";

const toggle = document.querySelectorAll(".toggle");

toggle.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    let spoiler = elem.parentElement.nextElementSibling;
    spoiler.classList.toggle("active");
  });
});
