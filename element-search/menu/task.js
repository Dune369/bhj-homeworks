"use strict"

const menuLink = document.querySelectorAll('.menu__link');
const menuArray = Array.from(menuLink)

menuArray.forEach((elements) => {
    elements.onclick = function () {
        if(!elements.nextElementSibling === null){
            elements.nextElementSibling.classList.toggle("menu_active")
        return false
        }
     
    };
})



