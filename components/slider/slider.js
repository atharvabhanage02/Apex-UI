const sliderBar = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value")
sliderBar.addEventListener("change",()=>{
    sliderValue.innerText = sliderBar.value
})