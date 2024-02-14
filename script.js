const container = document.querySelector(".container")
const button = document.querySelector(".button")
const reset = document.querySelector('.reset')

button.addEventListener('click', function(){
    button.style.display = "none"
    container.style.display = "block"
    reset.style.display = "block"
})