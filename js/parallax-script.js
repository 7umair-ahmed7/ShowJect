let firstContainer = document.querySelector(".first")

window.addEventListener("scroll",()=>{
    console.log(window.pageYOffset)
    firstContainer.style.backgroundPositionY = window.pageYOffset * 0.7 + "px"
})