/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            // Use getBoundingClientRect to ensure absolute position regardless of parent
            sectionTop = current.getBoundingClientRect().top + window.scrollY - window.innerHeight / 3, // activate when 1/3th from top
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })

    // Force active on contact if scroll reached the absolute bottom
    if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight - 15) {
        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active-link'));
        const contactLink = document.querySelector('.nav__menu a[href*="contact"]');
        if (contactLink) contactLink.classList.add('active-link');
    }
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*===== TYPING ANIMATION =====*/
if (document.querySelector('.auto-type')) {
    const typed = new Typed('.auto-type', {
        strings: ['Welcome to <br> my <span class="home__title-color">personal</span> website.'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: false,
        showCursor: true,
        cursorChar: '|'
    });
}

/*===== PARTICLES JS ANIMATION =====*/
// if (document.getElementById('tsparticles')) {
//     tsParticles.load("tsparticles", {
//         fpsLimit: 60,
//         interactivity: {
//             events: {
//                 onHover: { enable: true, mode: "grab" },
//                 onClick: { enable: true, mode: "push" },
//                 resize: true
//             },
//             modes: {
//                 grab: { distance: 140, links: { opacity: 1 } },
//                 push: { quantity: 4 }
//             }
//         },
//         particles: {
//             color: { value: "#4070F4" }, // Using var(--first-color) equivalent
//             links: {
//                 color: "#4070F4",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.5,
//                 width: 1
//             },
//             move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: { default: "bounce" },
//                 random: false,
//                 speed: 2,
//                 straight: false
//             },
//             number: { density: { enable: true, area: 800 }, value: 80 },
//             opacity: { value: 0.5 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 3 } }
//         },
//         detectRetina: true
//     });
// }

if (document.getElementById('tsparticles')) {
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, links: { opacity: 1 } },
                push: { quantity: 4 }
            }
        },
        particles: {
            color: { value: "#4070F4" }, // Using var(--first-color) equivalent
            links: {
                color: "#4070F4",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
    }).then(container => {
        // Deteksi apakah section home sedang terlihat di layar
        const homeSection = document.getElementById('home');
        const particleDisplay = document.getElementById('tsparticles');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    container.play(); // Animasi berjalan saat di Home
                    particleDisplay.style.opacity = "1";
                    particleDisplay.style.visibility = "visible";
                } else {
                    container.pause(); // Animasi berhenti saat user scroll ke About/Skills dll
                    particleDisplay.style.opacity = "0";
                    particleDisplay.style.visibility = "hidden";
                }
            });
        }, { threshold: 0.1 });

        if (homeSection) observer.observe(homeSection);
    });
}

/*===== PROJECTS SWIPER SLIDER =====*/
if (document.querySelector('.projects-swiper')) {
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        speed: 600,
        mousewheel: {
            forceToAxis: true,
            releaseOnEdges: true
        },
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.proj-next-btn',
            prevEl: '.proj-prev-btn',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

