let searchBtn = document.querySelector(".search-box")
let searchInput = document.querySelector("#search")
let pBtn = document.querySelector(".p")
let dropdownBtn = document.querySelector("#dropdown")
let menuBtn = document.querySelector("#menuBtn")
let menuBox = document.querySelector(".menu_box")

menuBtn.addEventListener("click", function(){
    menuBox.classList.toggle("active")
})

pBtn.addEventListener("click", function(){
    dropdownBtn.classList.toggle("active")
})


searchInput.addEventListener("click", function(){
    searchBtn.classList.toggle("active")
})