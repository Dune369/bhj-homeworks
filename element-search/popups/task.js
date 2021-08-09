"use strict"
const modalMain = document.querySelector('#modal_main');
const showSuccess = document.querySelector('.show-success')
const modalSuccess = document.querySelector('#modal_success');


const modalClose = document.querySelectorAll('.modal__close')
const divyArray = Array.from(modalClose)

divyArray.filter((element) => !element.classList.contains('show-success'))
    .forEach((element) => {
        element.onclick = function() {
            modalMain.classList.remove("modal_active")
            modalSuccess.classList.remove("modal_active")
        }
    })

showSuccess.onclick = function() {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active")
}