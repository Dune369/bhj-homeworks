
const dropdown = document.querySelector('.dropdown')
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))


dropdown.addEventListener("click", openDropdownList)

function openDropdownList(event) {
    event.currentTarget.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
}

dropdownLink.forEach((value) => {
    value.addEventListener("click", (event) => {    
        event.preventDefault();
        dropdownValue.textContent = value.textContent
    })
})







