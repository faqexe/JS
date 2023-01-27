"use strict";

const parent = document.querySelector("#parent");
const links = parent.querySelectorAll(".menu a");
const tabs = parent.querySelectorAll(".tab");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();

    // Ищем активную ссылку и удаляем ей класс
    let link = parent.querySelector(".menu a.active");
    link.classList.remove("active");

    // Ищем активную вкладку и удаляем ей класс
    let tab = parent.querySelector(".tab.active");
    tab.classList.remove("active");

    // По клику на ссылку добавляем ей класс для активации
    this.classList.add("active");
    // После активации ссылки добавляем класс активации вкладке
    tabs[i].classList.add("active");
  });
}
