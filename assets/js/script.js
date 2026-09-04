// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// Tutup menu setelah memilih halaman

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ===============================
// BACK TO TOP
// ===============================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// COUNTER
// ===============================

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.target);

            let number = 0;

            const speed = target / 80;

            function updateCounter() {

                number += speed;

                if (number < target) {

                    counter.textContent =
                        Math.ceil(number);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        });

    }, {
        threshold: .5
    });


counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".service-card, .project, .about-description"
    );


const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    }, {
        threshold: .1
    });


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all .8s ease";

    revealObserver.observe(element);

});