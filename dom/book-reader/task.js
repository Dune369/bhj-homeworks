const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');


function addSize(e) {
    e.preventDefault()
    
    if (this.classList.contains('font-size_small')) {
        bookContent.classList.remove('book_fs-big');
        bookContent.classList.add('book_fs-small');
    } else if (this.classList.contains('font-size_big')) {
        bookContent.classList.remove('book_fs-small');
        bookContent.classList.add('book_fs-big');
    } else {
        bookContent.classList.remove('book_fs-big');
        bookContent.classList.remove('book_fs-small');
        bookContent.classList.add('font-size_active');
    }
}


fontSize.forEach((element) => {
    element.addEventListener("click", addSize)
})
