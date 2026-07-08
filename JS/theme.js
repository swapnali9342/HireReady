// ==========================
// THEME SWITCH
// ==========================

const themeBtn = document.getElementById("themeBtn");
const icon = themeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    icon.className = "bi bi-sun-fill";

} else {

    icon.className = "bi bi-moon-stars-fill";

}

// Toggle theme
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        icon.className = "bi bi-sun-fill";

    } else {

        localStorage.setItem("theme", "light");
        icon.className = "bi bi-moon-stars-fill";

    }

});