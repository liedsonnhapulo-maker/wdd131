let reviews = localStorage.getItem("reviewsCount");

if (!reviews) {
    reviews = 0;
}

reviews = Number(reviews) + 1;

localStorage.setItem("reviewsCount", reviews);

const counter = document.getElementById("counter");
if (counter) {
    counter.textContent = `Total reviews submitted: ${reviews}`;
}

const year = document.getElementById("currentyear");
if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = document.lastModified;
}