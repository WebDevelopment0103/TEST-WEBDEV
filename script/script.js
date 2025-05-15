const sidebarBtn = document.querySelector('.sidebar__btn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.side__menu');
const logolink = document.querySelector('.logo a');
const submitbutton = document.querySelector('.submit-id');
const toggleSwitch = document.querySelector('#checkbox');

function updateTheme() {
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        var logos = document.querySelectorAll('.logo img, .logo__wrapper img'); // hem üst hem alt logolar
        logos.forEach(function (logo) {
            if (currentTheme === 'light-mode') {
                var cubes = document.querySelectorAll('.animate-spin-slow');
                cubes.forEach(function (cube) {
                    cube.src = '/img/light-cube.png';
                });
                logo.src = '/img/weblogo-dark.png'; // light mod için koyu logo
                document.querySelectorAll('.theme-icon').forEach(icon => icon.src = '/img/light-mode.png');
                document.querySelectorAll(".info__rectancle__wrapper button p").forEach(element => {
                    element.style.color = 'white';
                });
                document.querySelectorAll(".btn-1 a").forEach(donate => {
                    donate.style.color = '#fff';
                })
                document.querySelectorAll(".btn-4 a").forEach(order => {
                    order.style.color = '#fff';
                })
                document.querySelectorAll(".info__rectancle__wrapper button").forEach(button => {
                    button.style.border = 'none';
                })
                document.querySelectorAll(".info__rectancle__wrapper button h1 ").forEach(h1 => {
                    h1.style.color = '#fff';
                })
                document.querySelectorAll(".btn-2 a").forEach(h1 => {
                    h1.style.color = '#fff';
                })
                document.querySelectorAll(".project-action a p").forEach(link => {
                    link.style.color = '#fff';
                })
                document.querySelectorAll(".web-button").forEach(app => {
                    app.style.color = '#fff';
                })
                document.querySelectorAll(".hovered a").forEach(background => {
                    background.style.color = 'white';
                });
                document.querySelectorAll(".card").forEach(card => {
                    card.style.backgroundColor = '#D9D9D9';
                });
                document.querySelectorAll(".page-info ul li").forEach(li => {
                    li.style.color = 'black';
                });
                document.querySelectorAll(".price-info h1").forEach(h1 => {
                    h1.style.color = 'black';
                });
                document.querySelectorAll(".project-description h1").forEach(description => {
                    description.style.color = 'white';
                });
                document.querySelectorAll(".web-button").forEach(button => {
                    button.style.color = 'white';
                });
                document.querySelectorAll(".project-used h1").forEach(used => {
                    used.style.color = 'white';
                });
                document.querySelectorAll(".app-form-group label h2").forEach(label => {
                    label.style.color = 'white';
                });
                document.querySelectorAll(".app-title span").forEach(title => {
                    title.style.color = 'white';
                });
                document.querySelectorAll(".container h1").forEach(container => {
                    container.style.color = 'white';
                });
                document.querySelectorAll(".techs").forEach(techs => {
                    techs.style.backgroundColor = 'white';
                });
                document.querySelectorAll(".tech h1").forEach(titles => {
                    titles.style.color = 'black';
                });
                document.querySelectorAll(".text__wrapper h1").forEach(text => {
                    text.style.color = 'black';
                });
                document.querySelectorAll(".comment-text h1").forEach(comment => {
                    comment.style.color = 'black';
                });
                document.querySelectorAll(".words__wrapper h1").forEach(word => {
                    word.style.color = 'black';
                });
                document.querySelectorAll('.scroll-down img').forEach(img => {
                    img.src = '/img/down-arrow-black.png';
                });
                document.querySelectorAll('.social-instagram a i').forEach(social => {
                    social.style.color = '#000';
                });
                document.querySelectorAll('.social-github a i').forEach(social => {
                    social.style.color = '#000';
                });
                document.querySelectorAll('.social-linkedin a i').forEach(social => {
                    social.style.color = '#000';
                });
                document.querySelectorAll('.social-reddit a i').forEach(social => {
                    social.style.color = '#000';
                });
                document.querySelectorAll('.nav__link i').forEach(icon => {
                    icon.style.color = '#000';
                });
                document.querySelectorAll('.hovered i , .hovered p').forEach(icon => {
                    icon.style.color = '#fff';
                });

            } else {
                logos.forEach(logo => {
                    logo.src = '/img/Weblogo 1.png'; // dark mod için açık logo
                });
                var cubes = document.querySelectorAll('.animate-spin-slow');
                cubes.forEach(function (cube) {
                    cube.src = '/img/3d cube (2).png';
                });
                document.querySelectorAll('.theme-icon').forEach(icon => icon.src = '/img/dark-mode.png');
                document.querySelectorAll(".info__rectancle__wrapper button p").forEach(element => {
                    element.style.color = '';
                });
                document.querySelectorAll(".hovered a").forEach(background => {
                    background.style.color = '';
                });
                document.querySelectorAll('.scroll-down img').forEach(img => {
                    img.src = '/img/down-arrow-white.png';
                });
                document.querySelectorAll(".card").forEach(card => {
                    card.style.backgroundColor = '';
                });
                document.querySelectorAll(".page-info ul li").forEach(li => {
                    li.style.color = '';
                });
                document.querySelectorAll(".price-info h1").forEach(h1 => {
                    h1.style.color = '';
                });
                document.querySelectorAll(".project-description h1").forEach(description => {
                    description.style.color = '';
                });
                document.querySelectorAll(".info__rectancle__wrapper button").forEach(button => {
                    button.style.border = '';
                })
                document.querySelectorAll(".web-button").forEach(button => {
                    button.style.color = '';
                });
                document.querySelectorAll(".project-used h1").forEach(used => {
                    used.style.color = '';
                });
                document.querySelectorAll(".app-form-group label h2").forEach(label => {
                    label.style.color = '';
                });
                document.querySelectorAll(".app-title span").forEach(title => {
                    title.style.color = '';
                });
                document.querySelectorAll(".container h1").forEach(container => {
                    container.style.color = '';
                });
                document.querySelectorAll(".techs").forEach(techs => {
                    techs.style.backgroundColor = '';
                });
                document.querySelectorAll(".tech h1").forEach(titles => {
                    titles.style.color = '';
                });
                document.querySelectorAll(".text__wrapper h1").forEach(text => {
                    text.style.color = '';
                });
                document.querySelectorAll(".comment-text h1").forEach(comment => {
                    comment.style.color = '';
                });
                document.querySelectorAll(".words__wrapper h1").forEach(word => {
                    word.style.color = '';
                });
                document.querySelectorAll('.social-instagram a i').forEach(social => {
                    social.style.color = '#fff';
                });
                document.querySelectorAll('.social-github a i').forEach(social => {
                    social.style.color = '#fff';
                });
                document.querySelectorAll('.social-linkedin a i').forEach(social => {
                    social.style.color = '#fff';
                });
                document.querySelectorAll('.social-reddit a i').forEach(social => {
                    social.style.color = '#fff';
                });
                document.querySelectorAll('.nav__link i').forEach(icon => {
                    icon.style.color = '#fff';
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', updateTheme);

document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', function () {
        var isLightMode = document.body.classList.contains('light-mode');
        if (isLightMode) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
        updateTheme();
    });
});


function animateText() {
    var text = document.getElementById('text');
    var originalText = 'I am a Software Engineer';
    var newText = 'I am a WebDeveloper';
    var flag = false;

    setInterval(function () {
        text.classList.add('hidden');

        setTimeout(function () {
            if (flag) {
                text.textContent = originalText;
            } else {
                text.textContent = newText;
            }
            text.classList.remove('hidden');
            flag = !flag;
        }, 900);
    }, 3000);
}
animateText();



document.querySelector(".scroll-down").addEventListener("click", () => {
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Yumuşak kaydırma
    });
});

