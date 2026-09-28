function saveAuth(data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
}

function getToken() {
    return localStorage.getItem("token");
}

function getStoredUser() {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch {
        return null;
    }
}

function setupNavigation() {
    const accountNav = document.querySelector("#account-nav");
    const profileToggle = document.querySelector("#profile-toggle");
    const profileDropdown = document.querySelector("#profile-dropdown");
    const user = getStoredUser();

    if (accountNav && user) {
        const dashboardLink = document.createElement("a");
        dashboardLink.className = "btn btn-primary";
        dashboardLink.href = user.role === "admin"
            ? "admin-dashboard.html"
            : "employee-dashboard.html";
        dashboardLink.textContent = "My Dashboard";

        const profileLink = document.createElement("a");
        profileLink.className = "btn btn-outline";
        profileLink.href = dashboardLink.href;
        profileLink.textContent = user.name || "Profile";

        accountNav.replaceChildren(profileLink, dashboardLink);
    }

    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener("click", () => {
            const isOpen = !profileDropdown.classList.contains("hidden");
            profileDropdown.classList.toggle("hidden", isOpen);
            profileToggle.setAttribute("aria-expanded", String(!isOpen));
        });

        document.addEventListener("click", event => {
            if (!event.target.closest(".profile-menu")) {
                profileDropdown.classList.add("hidden");
                profileToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

function requireLogin() {
    if (!getToken()) {
        window.location.href = "login.html";
        return false;
    }

    return true;
}

function requireRole(role) {
    const user = getStoredUser();

    if (!requireLogin()) {
        return false;
    }

    if (!user || user.role !== role) {
        window.location.href = user?.role === "admin"
            ? "admin-dashboard.html"
            : "employee-dashboard.html";
        return false;
    }

    return true;
}

async function verifySession(role) {
    if (!requireLogin()) {
        return null;
    }

    try {
        const data = await apiRequest("/auth/me");

        if (role && data.user.role !== role) {
            window.location.href = data.user.role === "admin"
                ? "admin-dashboard.html"
                : "employee-dashboard.html";
            return null;
        }

        localStorage.setItem("user", JSON.stringify({
            id: data.user._id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role
        }));

        return data.user;
    } catch (error) {
        if (error.status === 401) {
            logout();
        }

        return null;
    }
}

document.addEventListener("DOMContentLoaded", setupNavigation);
