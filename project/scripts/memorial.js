document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FOOTER YEAR
    ========================= */
    const year = document.getElementById("currentyear");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* =========================
       LAST MODIFIED
    ========================= */
    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = "Last Modified: " + document.lastModified;
    }

    /* =========================
       LAZY LOADING IMAGES
    ========================= */
    const images = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const img = entry.target;

                const realSrc = img.getAttribute("data-src");

                if (realSrc) {
                    img.src = realSrc;

                    img.onload = () => {
                        img.style.opacity = "1";
                    };

                    img.style.opacity = "0";
                    img.style.transition = "opacity 0.8s ease";
                }

                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));

});