let searchBtn = document.querySelector(".search-box");
let searchInput = document.querySelector("#search");
let pBtn = document.querySelector(".p");
let dropdownBtn = document.querySelector("#dropdown");
let menuBtn = document.querySelector("#menuBtn");
let menuBox = document.querySelector(".menu_box");
let closeBtn = document.querySelector("#closeBtn")
let moonBtn = document.querySelector(".moon")
let sunBtn = document.querySelector(".sun")

moonBtn.addEventListener("click", function () {
    document.body.classList.add("dark")
    document.body.classList.remove("sun")

})

sunBtn.addEventListener("click", function () {
    document.body.classList.add("sun")
    document.body.classList.remove("dark")

})

menuBtn.addEventListener("click", function () {
    menuBox.classList.toggle("active");
});

pBtn.addEventListener("click", function () {
    dropdownBtn.classList.toggle("active");
});

// search
searchInput.addEventListener("click", function () {
    searchBtn.classList.toggle("active");
});



// tugmalar
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
