const registerForm = document.querySelector("#register-form");
const registerButton = document.querySelector("#register-button");
const messageBox = document.querySelector("#message");

function showMessage(message, type = "error") {
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
}

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        name: document.querySelector("#name").value.trim(),
        email: document.querySelector("#email").value.trim(),
        password: document.querySelector("#password").value,
        confirmPassword: document.querySelector("#confirmPassword").value,
        phone: document.querySelector("#phone").value.trim(),
        department: document.querySelector("#department").value.trim(),
        position: document.querySelector("#position").value.trim(),
        experience: document.querySelector("#experience").value
    };

    if (data.password !== data.confirmPassword) {
        showMessage("Passwords do not match.");
        return;
    }

    if (data.password.length < 8) {
        showMessage("Password must contain at least 8 characters.");
        return;
    }

    registerButton.disabled = true;
    registerButton.textContent = "Creating account...";

    try {
        const result = await apiRequest("/auth/register", {
            method: "POST",
            body: JSON.stringify(data)
        });

        showMessage(result.message, "success");
        registerForm.reset();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1200);
    } catch (error) {
        showMessage(error.message);
    } finally {
        registerButton.disabled = false;
        registerButton.textContent = "Register";
    }
});
