let allUsers = [];

if (requireRole("admin")) {
    document.addEventListener("DOMContentLoaded", async () => {
        const user = await verifySession("admin");

        if (!user) {
            return;
        }

        document.querySelector("#nav-user-name").textContent = user.name;
        document.querySelector("#logout-button").addEventListener("click", logout);

        document.querySelector("#search-input").addEventListener("input", (event) => {
            renderUsers(event.target.value);
        });

        document.querySelector("#close-modal").addEventListener("click", closeModal);
        document.querySelector("#cancel-edit").addEventListener("click", closeModal);
        document.querySelector("#edit-form").addEventListener("submit", saveEmployee);

        await loadEmployees();
    });
}

function showMessage(message, type = "error") {
    const box = document.querySelector("#message");
    box.textContent = message;
    box.className = `message ${type}`;
}

function showEditMessage(message, type = "error") {
    const box = document.querySelector("#edit-message");
    box.textContent = message;
    box.className = `message ${type}`;
}

async function loadEmployees() {
    const tbody = document.querySelector("#employee-table-body");

    try {
        const data = await apiRequest("/admin/employees");
        allUsers = data.employees;

        document.querySelector("#employee-count").textContent = allUsers.length;
        renderUsers();
    } catch (error) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9">${escapeHtml(error.message)}</td>
            </tr>
        `;

        if (error.status === 401) {
            logout();
        } else {
            showMessage(error.message);
        }
    }
}

function renderUsers(searchTerm = "") {
    const tbody = document.querySelector("#employee-table-body");
    const term = searchTerm.trim().toLowerCase();

    const users = allUsers.filter(user => {
        const searchable = [
            user.name,
            user.email,
            user.phone,
            user.department,
            user.position,
            user.role
        ].join(" ").toLowerCase();

        return searchable.includes(term);
    });

    if (!users.length) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9">No matching users found.</td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${escapeHtml(user.name)}</td>
            <td>${escapeHtml(user.email)}</td>
            <td>${escapeHtml(user.phone)}</td>
            <td>${escapeHtml(user.department)}</td>
            <td>${escapeHtml(user.position)}</td>
            <td>${escapeHtml(user.experience || "Not specified")}</td>
            <td><span class="role-badge">${escapeHtml(user.role)}</span></td>
            <td>${formatDate(user.createdAt)}</td>
            <td>
                <div class="actions">
                    <button class="btn btn-secondary small-btn" onclick="openEditModal('${user._id}')">
                        Edit
                    </button>
                    <button class="btn btn-danger small-btn" onclick="deleteUser('${user._id}')">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

function openEditModal(id) {
    const user = allUsers.find(item => item._id === id);

    if (!user) {
        return;
    }

    document.querySelector("#edit-id").value = user._id;
    document.querySelector("#edit-name").value = user.name;
    document.querySelector("#edit-phone").value = user.phone;
    document.querySelector("#edit-department").value = user.department;
    document.querySelector("#edit-position").value = user.position;
    document.querySelector("#edit-role").value = user.role;

    document.querySelector("#edit-message").className = "message hidden";
    document.querySelector("#edit-modal").classList.remove("hidden");
}

function closeModal() {
    document.querySelector("#edit-modal").classList.add("hidden");
}

async function saveEmployee(event) {
    event.preventDefault();

    const id = document.querySelector("#edit-id").value;

    const updates = {
        name: document.querySelector("#edit-name").value.trim(),
        phone: document.querySelector("#edit-phone").value.trim(),
        department: document.querySelector("#edit-department").value.trim(),
        position: document.querySelector("#edit-position").value.trim(),
        role: document.querySelector("#edit-role").value
    };

    try {
        const data = await apiRequest(`/admin/employees/${id}`, {
            method: "PUT",
            body: JSON.stringify(updates)
        });

        const index = allUsers.findIndex(user => user._id === id);

        if (index !== -1) {
            allUsers[index] = data.employee;
        }

        renderUsers(document.querySelector("#search-input").value);
        closeModal();
        showMessage(data.message, "success");
    } catch (error) {
        showEditMessage(error.message);
    }
}

async function deleteUser(id) {
    const user = allUsers.find(item => item._id === id);

    if (!user) {
        return;
    }

    const confirmed = window.confirm(
        `Delete ${user.name}'s account? This action cannot be undone.`
    );

    if (!confirmed) {
        return;
    }

    try {
        const data = await apiRequest(`/admin/employees/${id}`, {
            method: "DELETE"
        });

        allUsers = allUsers.filter(item => item._id !== id);
        document.querySelector("#employee-count").textContent = allUsers.length;
        renderUsers(document.querySelector("#search-input").value);
        showMessage(data.message, "success");
    } catch (error) {
        showMessage(error.message);
    }
}

function formatDate(value) {
    if (!value) {
        return "-";
    }

    return new Date(value).toLocaleDateString();
}

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
