"use strict"

// Таймер обратного отсчёта
let timer = document.getElementById("timer");

let countFuncDown = function () {
  let currentTime = parseFloat(timer.textContent);
  if (currentTime > 0) {
    timer.textContent = currentTime - 1;
  } else {
    clearInterval(timerValue);
    alert('«Вы победили в конкурсе!»');
  }
};

let timerValue = setInterval(countFuncDown, 1000);


// Повышенный уровень сложности #1
