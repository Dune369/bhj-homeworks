const rotatorCase = document.querySelectorAll('.rotator__case');
let index = 0;

setInterval(function() {
    if (index === (rotatorCase.length - 1)) {
        index = 0;
        rotatorCase.forEach((element) => {
            element.classList.remove('rotator__case_active')
        })
        return rotatorCase[index].classList.add('rotator__case_active');
    }
    rotatorCase[index + 1].classList.add('rotator__case_active');
    rotatorCase[index].classList.remove('rotator__case_active');
    index++
}, 1000)

