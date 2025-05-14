const sidebarBtn = document.querySelector('.sidebar__btn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.side__menu');
const logolink = document.querySelector('.logo a');
const submitbutton = document.querySelector('.submit-id');
const languages = document.querySelectorAll(".language-switch a")
const active_language = document.querySelector('.active-lan');


AOS.init();

sidebarBtn.addEventListener('click', function (event) {
    event.preventDefault();
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    sidebar.classList.remove('active');
});
languages.forEach(language  =>{
    language.style.color = "rgb(81 43 212)"
})
animateText();
const data = {
    en: {
        "item": "Welcome to WebDevelopment",
        "itemCenter": "I am a Software Engineer",
        "originalText": "I am a Software Engineer",
        "newText": "I am a WebDeveloper",
        "nav__link1": "Home",
        "nav__link2": "Products",
        "nav__link3": "Creations",
        "nav__link4": "Contact",
        "btn-1": "Donate ☕",
        "item-last": "Hi, I'm Azad Pirverdiyev, a Web Developer and I have been working in this work for 3 years. If you want to work with me or order a website, contact me.",
        "btn-4": "Order",
    },
    ru: {
        "item": "Добро пожаловать в WebDevelopment",
        "itemCenter": "Я инженер-программист.",
        "originalText": "Я инженер-программист.",
        "newText": "Я веб-разработчик.",
        "nav__link1": "Главная",
        "nav__link2": "Продукты",
        "nav__link3": "Творения",
        "nav__link4": "Контакт",
        "btn-1": "Подарить ☕",
        "item-last": "Привет, я Азад Пирвердиев, веб-разработчик, и я работаю в этой сфере 3 года. Если вы хотите сотрудничать со мной или заказать веб-сайт, свяжитесь со мной.",
        "btn-4": "Заказать",
    },
    az: {
        "item": "WebDevelopmentə xoş gəlmisiniz",
        "itemCenter": "Mən proqram mühəndisiyəm",
        "originalText": "Mən proqram mühəndisiyəm",
        "newText": "Mən Veb Tərtibatçıyam",
        "nav__link1": "Ana səhifə",
        "nav__link2": "Məhsullar",
        "nav__link3": "Yaradılışlar",
        "nav__link4": "Əlaqə",
        "btn-1": "☕ Bağışla",
        "item-last": "Salam, mən Azad Pirverdiyev, Veb Tərtibatçısıyam və bu sahədə 3 ildir çalışıram. Əgər mənimlə işləmək və ya veb sayt sifariş etmək istəyirsinizsə, mənimlə əlaqə saxlayın.",
        "btn-4": "Sifariş et",
    }
};


let currentLang = "en";


function language_changer() {
    let lang = active_language.textContent.toLowerCase();

    if (lang === "en") lang = "ru";
    else if (lang === "ru") lang = "az";
    else lang = "en";

    active_language.textContent = lang.toUpperCase();
    currentLang = lang; 


    updateTextContent();
}


function updateTextContent() {
    const langData = data[currentLang];
    if (!langData) return;

    for (const key in langData) {
        const element = document.querySelector(`.${key}`);
        if (element) {
            element.textContent = langData[key];
        }
    }
}


updateTextContent();
active_language.addEventListener("click", language_changer);


//MOBILE LANGUAGE


const mobileBtns = document.querySelectorAll('.active-mobile');
let currentLangMobile = 'en';

function changeLanguageMobile() {
    const langs = ['en', 'ru', 'az'];
    const currentIndex = langs.indexOf(currentLangMobile);
    currentLangMobile = langs[(currentIndex + 1) % langs.length];

    mobileBtns.forEach(btn => {
        btn.textContent = currentLangMobile.toUpperCase();
    });

    function updateTextContent() {
        const langData = data[currentLang];
        if (!langData) return;
    
        for (const key in langData) {
            const element = document.querySelector(`.${key}`);
            if (element) {
                element.textContent = langData[key];
            }
        }
    }
}

mobileBtns.forEach(btn => {
    btn.addEventListener('click', changeLanguageMobile);
});

changeLanguageMobile(); // Sayfa yüklendiğinde başlat


document.querySelector(".scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Yumuşak kaydırma
    });
});

