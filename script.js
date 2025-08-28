let searchBtn = document.querySelector(".search-box");
let searchInput = document.querySelector("#search");
let pBtn = document.querySelector(".p");
let dropdownBtn = document.querySelector("#dropdown");
let menuBtn = document.querySelector("#menuBtn i");
let menuBox = document.querySelector(".menu_box");
let moonBtn = document.querySelector(".moon")
let sunBtn = document.querySelector(".sun")

moonBtn.addEventListener("click", function () {
    document.html.classList.add("dark")
    document.html.classList.remove("sun")

})

sunBtn.addEventListener("click", function () {
    document.html.classList.add("sun")
    document.html.classList.remove("dark")

})

menuBtn.addEventListener("click", function () {
    menuBox.classList.toggle("active");

    if (menuBtn.classList.contains("ri-menu-line")) {
        menuBtn.classList.remove("ri-menu-line");
        menuBtn.classList.add("ri-close-line");
    } else {
        menuBtn.classList.remove("ri-close-line");
        menuBtn.classList.add("ri-menu-line");
    }
});
pBtn.addEventListener("click", function () {
    dropdownBtn.classList.toggle("active");
});

searchInput.addEventListener("click", function () {
    searchBtn.classList.toggle("active");
});



const uzBtn = document.getElementById('uz');
const ruBtn = document.getElementById('ru');
const currentLangEl = document.getElementById('p');
const allTranslatable = document.querySelectorAll('[data-uz]');
const searchField = document.querySelector('.search-input');

function setLang(lang) {
    allTranslatable.forEach(el => {
        let text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });

    if (searchField) {
        let ph = searchField.getAttribute(`data-${lang}`);
        if (ph) searchField.placeholder = ph;
    }

    if (currentLangEl) {
        currentLangEl.textContent = (lang === 'uz') ? currentLangEl.getAttribute('data-uz') : currentLangEl.getAttribute('data-ru');
    }

    document.documentElement.lang = (lang === 'uz') ? 'uz' : 'ru';

    localStorage.setItem('site_lang', lang);
}

if (uzBtn) uzBtn.addEventListener('click', () => setLang('uz'));
if (ruBtn) ruBtn.addEventListener('click', () => setLang('ru'));

document.addEventListener('DOMContentLoaded', () => {
    let saved = localStorage.getItem('site_lang') || 'uz';
    setLang(saved);
});
