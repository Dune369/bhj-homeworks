"use strict"
// Убито кротов
let dead = document.getElementById("dead")

// Промах
let lost = document.getElementById("lost")

for (let i = 1; i < 10; i++) {
    function getHole(index) {   
        document.getElementById(`hole${index}`).onclick = function () {
            let hole = document.getElementById(`hole${index}`);

            if (hole.classList.contains('hole_has-mole')) {
                let victoryPoints = dead.textContent = parseFloat(dead.textContent) + 1;
                if (victoryPoints === 10) {
                    alert('Победа!');
                    location.reload();
                }
            } else {
                let lossPoints = lost.textContent = parseFloat(lost.textContent) + 1;
                if (lossPoints === 5) {
                    alert('Поражениe!');
                    location.reload();
                }
            }      
        }
    };
    getHole(i);
}
