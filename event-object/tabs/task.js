'use strict'
const tab = document.querySelectorAll('.tab')
const tabContent = document.querySelectorAll('.tab__content');


tab.forEach((tab, i) => {
    tab.addEventListener('click', function() {
        hideTab();
        this.classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active')

    })
})


function hideTab() {
    tab.forEach((item) => {
        item.classList.remove('tab_active');
    });
    
    tabContent.forEach((item) => {
        item.classList.remove('tab__content_active');
    })
}




