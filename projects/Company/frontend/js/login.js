const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const messageBox = document.querySelector("#message");

function showMessage(message, type = "error") {
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
}

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;

    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    try {
        const data = await apiRequest("/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        });

        saveAuth(data);

        if (data.user.role === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "employee-dashboard.html";
        }
    } catch (error) {
        showMessage(error.message);
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = "Login";
    }
});
