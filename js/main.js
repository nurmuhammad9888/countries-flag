let elDark = document.querySelector(".sitenav__link");
let elBody = document.querySelector("body");
let elBack = document.querySelector(".hero-main__arrow");
let elLabel = document.querySelector(".hero_label");
let elsectIcon = document.querySelector(".hero__select")

elDark.addEventListener("click" , function (){
    elBody.classList.toggle("dark")
    elLabel.classList.toggle("hero_label-show")
    elsectIcon.classList.toggle("hero__select-show")
})
elDark.addEventListener("click" , function (){
    elBack.classList.toggle("hero-main__arrow-show")
})