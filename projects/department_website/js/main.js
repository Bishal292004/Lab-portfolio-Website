const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => navMenu.classList.toggle("show"));
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("show"));
    });
}

function getToken() {
    return localStorage.getItem("studentToken");
}

function isLoggedIn() {
    return Boolean(getToken());
}

function updateNavigation() {
    const loggedIn = isLoggedIn();

    document.querySelectorAll(".auth-only").forEach(el => {
        el.style.display = loggedIn ? "" : "none";
    });

    document.querySelectorAll(".guest-only").forEach(el => {
        el.style.display = loggedIn ? "none" : "";
    });

    const currentPage = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link[data-page]").forEach(link => {
        link.classList.toggle(
            "active",
            (currentPage === "index.html" && link.dataset.page === "home") ||
            (currentPage === "about.html" && link.dataset.page === "about") ||
            (currentPage === "dashboard.html" && link.dataset.page === "dashboard")
        );
    });

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) logoutButton.addEventListener("click", logout);
}

function logout() {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentData");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", updateNavigation);
