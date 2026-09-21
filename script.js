/* =========================================
   DARK MODE
========================================= */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const icon = darkModeBtn.querySelector("i");
    const text = darkModeBtn.querySelector("span");

    if (document.body.classList.contains("dark-mode")) {

        icon.className = "bi bi-sun-fill";
        text.textContent = "Light Mode";

        localStorage.setItem("darkMode", "enabled");

    } else {

        icon.className = "bi bi-moon-fill";
        text.textContent = "Dark Mode";

        localStorage.setItem("darkMode", "disabled");
    }

});


/* =========================================
   LOAD DARK MODE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {

        document.body.classList.add("dark-mode");

        const icon = darkModeBtn.querySelector("i");
        const text = darkModeBtn.querySelector("span");

        icon.className = "bi bi-sun-fill";
        text.textContent = "Light Mode";
    }

});


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = this.getAttribute("data-filter");

        /* Mengubah tombol aktif */
        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");

        });

        this.classList.add("active");
        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary");


        /* Filter project */
        projectItems.forEach(function (project) {

            const category = project.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                project.style.display = "block";

                setTimeout(function () {
                    project.style.opacity = "1";
                }, 10);

            } else {

                project.style.opacity = "0";

                setTimeout(function () {
                    project.style.display = "none";
                }, 200);

            }

        });

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

function showProject(projectName) {

    const modalTitle =
        document.getElementById("projectModalTitle");

    const modalText =
        document.getElementById("projectModalText");

    modalTitle.textContent = projectName;

    modalText.textContent =
        "Project " +
        projectName +
        " merupakan salah satu project latihan yang saya buat untuk mengembangkan kemampuan web development menggunakan HTML, CSS, dan JavaScript.";

    const modalElement =
        document.getElementById("projectModal");

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {

        event.stopPropagation();

        contactForm.classList.add("was-validated");

        return;
    }


    const name =
        document.getElementById("name").value;

    alert(
        "Terima kasih, " +
        name +
        "! Pesan kamu berhasil diisi. Untuk mengirim pesan sungguhan, form ini perlu dihubungkan ke backend atau layanan email."
    );

    contactForm.reset();

    contactForm.classList.remove("was-validated");

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   NAVBAR AUTO CLOSE DI MOBILE
========================================= */

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.getElementById("navbarNav");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
