const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

const nav = document.querySelector("nav");

const button = document.createElement("button");
button.innerHTML = "☰";
button.classList.add("hamburger");

document.querySelector("header").insertBefore(button, nav);

button.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        button.innerHTML = "✕";
    } else {
        button.innerHTML = "☰";
    }
});