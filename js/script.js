let hamburgerImage = document.querySelector(".hamburger-image")
let modalContainer = document.querySelector(".modal-contain")
let cancelImage = document.querySelector(".cancel")

hamburgerImage.addEventListener("click", () => {
    modalContainer.style.display = "block";
})


cancelImage.addEventListener("click", () => {
    modalContainer.style.display = "none"
})