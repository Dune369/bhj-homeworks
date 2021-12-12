"use strict"
let clickerCounter = document.getElementById("clicker__counter"); // счетчик
let cookie = document.getElementById("cookie"); // картинка

let clicData = cookie.onclick = function() {
    let clicImg = clickerCounter.textContent = parseFloat(clickerCounter.textContent) + 1;
    if ( clicImg % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 180;
     }
}


