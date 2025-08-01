let countContainer = document.querySelector(".count")
let incrementBtn = document.getElementById("increment")
let decrementBtn = document.getElementById("decrement")
let resetBtn = document.getElementById("reset")
let saveBtn = document.getElementById("save")

const saveCount = () => {
    localStorage.setItem("countValueSave", JSON.stringify(countContainer.innerText))
}

const getData = () => {

    let obtValue = localStorage.getItem("countValueSave");
    if (obtValue) {
        countContainer.innerText = JSON.parse(obtValue);

    }

}

getData()

incrementBtn.addEventListener("click", (e) => {
    let countValue = parseInt(countContainer.innerText)
    console.log(typeof countValue)
    countValue += 1;
    countContainer.innerText = countValue;
    console.log(countValue)

})

decrementBtn.addEventListener("click", (e) => {
    let countValue = parseInt(countContainer.innerText)
    console.log(typeof countValue)
    countValue -= 1;
    countContainer.innerText = countValue;
    console.log(countValue)

})

resetBtn.addEventListener("click", (e) => {
    countContainer.innerText = 0;

})
saveBtn.addEventListener("click", () => {
    saveCount()
})

