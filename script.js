let searchBtn = document.querySelector(".search-box")
let searchInput = document.querySelector("#search")

searchInput.addEventListener("click", function(){
    searchBtn.classList.toggle("active")
})