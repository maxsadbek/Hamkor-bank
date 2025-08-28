let searchBtn = document.querySelector(".search-box")
let searchInput = document.querySelector("#search")
let pBtn = document.querySelector(".p")
let dropdownBtn = document.querySelector("#dropdown")

pBtn.addEventListener("click", function(){
    dropdownBtn.classList.toggle("active")
})


searchInput.addEventListener("click", function(){
    searchBtn.classList.toggle("active")
})