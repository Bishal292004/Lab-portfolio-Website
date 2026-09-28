const loginForm = document.getElementById("loginForm");

if (loginForm) {
    document.querySelectorAll(".password-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const input = document.getElementById(button.dataset.target);
            input.type = input.type === "password" ? "text" : "password";
            button.textContent = input.type === "password" ? "Show" : "Hide";
        });
    });

    loginForm.addEventListener("submit", async event => {
        event.preventDefault();
        clearLoginErrors();

        const identifier = document.getElementById("identifier").value.trim();
        const password = document.getElementById("loginPassword").value;
        let valid = true;

        if (identifier.length < 3) {
            showLoginError("identifierError", "Enter your email or student ID.");
            valid = false;
        }
        if (!password) {
            showLoginError("loginPasswordError", "Please enter your password.");
            valid = false;
        }
        if (!valid) return;

        setLoginMessage("Logging in...", "");

        try {
            const response = await fetch(`https://department-website-backend.vercel.app/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ identifier, password })
            });

            const data = await response.json();

            if (!response.ok) {
                setLoginMessage(data.message || "Login failed.", "error");
                return;
            }

            localStorage.setItem("studentToken", data.token);
            localStorage.setItem("studentData", JSON.stringify(data.student));

            window.location.href = "dashboard.html";
        } catch (error) {
            setLoginMessage("Cannot connect to the backend. Make sure the server is running.", "error");
        }
    });
}

function showLoginError(id, message) {
    const element = document.getElementById(id);
    if (element) element.textContent = message;
}

function clearLoginErrors() {
    document.querySelectorAll(".error-message").forEach(e => e.textContent = "");
    setLoginMessage("", "");
}

function setLoginMessage(message, type) {
    const element = document.getElementById("loginMessage");
    if (element) {
        element.textContent = message;
        element.className = `form-message ${type}`;
    }
}
