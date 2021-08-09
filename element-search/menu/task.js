"use strict"

const menuLink = document.querySelectorAll('.menu__link');
const menuArray = Array.from(menuLink)

menuArray.forEach((elements) => {
    elements.onclick = function () {
        elements.nextElementSibling.classList.toggle("menu_active")
        return false
    };
})


