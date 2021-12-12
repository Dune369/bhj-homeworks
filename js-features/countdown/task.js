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
let time = 3600;

let сountdownTimer = document.getElementById("сountdownTimer");

function reverseScore() {
  let hours = Math.floor((time / 60) / 6);
  let minutes = Math.floor((time / 60));
  let seconds = time % 60;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  сountdownTimer.innerHTML = `${hours}:${minutes}:${seconds}`;
 
  time--;

  if(time < 0){
     clearInterval(id)
  }

}

let id = setInterval(reverseScore, 1000);
