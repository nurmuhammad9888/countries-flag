let elDark = document.querySelector(".sitenav__link");
let elBody = document.querySelector("body");
let elBack = document.querySelector(".hero-main__arrow");

elDark.addEventListener("click" , function (){
    elBody.classList.toggle("dark")
    elBack.classList.toggle("hero-main__arrow-show")
})