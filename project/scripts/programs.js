document.addEventListener("DOMContentLoaded", function () {

    // ===== CURRENT YEAR =====
    const year = new Date().getFullYear();
    document.getElementById("currentyear").textContent = year;

    // ===== LAST MODIFIED DATE =====
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent =
        "Last Modified: " + lastModified;

});