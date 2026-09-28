if (requireRole("employee")) {
    document.addEventListener("DOMContentLoaded", async () => {
        const user = await verifySession("employee");

        if (!user) {
            return;
        }

        document.querySelector("#nav-user-name").textContent = user.name;
        document.querySelector("#welcome-name").textContent = user.name;

        document.querySelector("#logout-button").addEventListener("click", logout);

        await Promise.all([
            loadProfile(),
            loadAdmins()
        ]);
    });
}

function showMessage(message, type = "error") {
    const box = document.querySelector("#message");
    box.textContent = message;
    box.className = `message ${type}`;
}

async function loadProfile() {
    const container = document.querySelector("#profile-content");

    try {
        const data = await apiRequest("/employees/profile");
        const user = data.user;

        container.innerHTML = `
            ${profileRow("Name", user.name)}
            ${profileRow("Email", user.email)}
            ${profileRow("Phone", user.phone)}
            ${profileRow("Department", user.department)}
            ${profileRow("Position", user.position)}
            ${profileRow("Experience", user.experience || "Not specified")}
            ${profileRow("Role", user.role)}
        `;
    } catch (error) {
        container.innerHTML = `<p class="muted">${error.message}</p>`;
        showMessage(error.message);
    }
}

async function loadAdmins() {
    const container = document.querySelector("#admins-content");

    try {
        const data = await apiRequest("/employees/admins");

        if (!data.admins.length) {
            container.innerHTML = `<p class="muted">No admin information is available.</p>`;
            return;
        }

        container.innerHTML = data.admins.map(admin => `
            <article class="admin-card">
                <h3>${escapeHtml(admin.name)}</h3>
                <p>${escapeHtml(admin.position)} · ${escapeHtml(admin.department)}</p>
                <p>${escapeHtml(admin.email)}</p>
                <p>${escapeHtml(admin.phone)}</p>
            </article>
        `).join("");
    } catch (error) {
        container.innerHTML = `<p class="muted">${error.message}</p>`;
        showMessage(error.message);
    }
}

function profileRow(label, value) {
    return `
        <div class="profile-row">
            <span class="profile-label">${escapeHtml(label)}</span>
            <span class="profile-value">${escapeHtml(String(value ?? ""))}</span>
        </div>
    `;
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
