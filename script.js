
const hamburger = document.getElementById("hamburger");
const gnav = document.getElementById("gnav");
const links = document.querySelectorAll("#gnav a");

// Close menu when a link is clicked
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        hamburger.classList.remove("active");
        gnav.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

// Toggle menu
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    gnav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !gnav.contains(e.target)) {
        hamburger.classList.remove("active");
        gnav.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});

// Back to Top Buttonß
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// loader


//header bar
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
});

// ===== Scroll Fade Animation =====
const animateTargets = document.getElementsByClassName("animate");

function scrollFade() {
    let windowHeight = window.innerHeight;

    for (let i = 0; i < animateTargets.length; i++) {
        let elementTop = animateTargets[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            animateTargets[i].classList.add("is-show");
        }
    }
}

window.addEventListener("scroll", scrollFade);
window.addEventListener("load", scrollFade);
