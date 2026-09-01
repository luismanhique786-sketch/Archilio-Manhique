/* ================= LOADER ================= */

const loader = document.getElementById("loader");

const loaderBar = document.getElementById("loaderBar");


window.addEventListener("load", () => {

    setTimeout(() => {

        loaderBar.style.width = "100%";

    }, 100);


    setTimeout(() => {

        loader.classList.add("hide");

    }, 1500);

});



/* ================= MENU MOBILE ================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("open");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });



/* ================= ANIMAÇÃO AO SCROLL ================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });



/* ================= MENU ATIVO ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        "#desktopNav a"
    );


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});