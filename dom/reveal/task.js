
const reveal = document.querySelectorAll('.reveal')

function inViewport( element ){
    return (element.getBoundingClientRect().top > innerHeight || element.getBoundingClientRect().bottom < 0);
}
  
document.addEventListener( 'scroll', () => {
  reveal.forEach((element) => {
    if (!inViewport(element)) {
      element.classList.add('reveal_active')
    } else if (inViewport(element)) {
      element.classList.remove('reveal_active')
    }
  } ) 
})

