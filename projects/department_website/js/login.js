// =====================================================
// LOGIN FORM
// =====================================================

const loginForm =
    document.getElementById("loginForm");


// -----------------------------------------------------
// PASSWORD SHOW / HIDE
// -----------------------------------------------------

const passwordToggles =
    document.querySelectorAll(".password-toggle");


passwordToggles.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.getAttribute("data-target");

        const passwordInput =
            document.getElementById(targetId);


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            button.textContent = "Hide";

        } else {

            passwordInput.type = "password";

            button.textContent = "Show";

        }

    });

});


// -----------------------------------------------------
// LOGIN
// -----------------------------------------------------

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    clearLoginErrors();


    const identifier =
        document
            .getElementById("identifier")
            .value
            .trim();


    const password =
        document
            .getElementById("loginPassword")
            .value;


    let isValid = true;


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (identifier.length < 3) {

        showLoginError(
            "identifierError",
            "Enter your email or student/roll number."
        );

        isValid = false;

    }


    if (password.length === 0) {

        showLoginError(
            "loginPasswordError",
            "Please enter your password."
        );

        isValid = false;

    }


    if (!isValid) {

        return;

    }


    // -------------------------------------------------
    // LOGIN DATA
    // -------------------------------------------------

    const loginData = {

        identifier: identifier,

        password: password

    };


    /*
        FUTURE EXPRESS API

        Later this can become:

        fetch("/api/auth/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(loginData)
        });

    */


    console.log("Login data:", loginData);


    // -------------------------------------------------
    // FRONTEND DEMO
    // -------------------------------------------------

    const message =
        document.getElementById("loginMessage");


    message.textContent =
        "Login form is valid. Backend authentication will be added later.";

    message.className =
        "form-message success";

});


// =====================================================
// HELPER FUNCTIONS
// =====================================================

function showLoginError(elementId, message) {

    const element =
        document.getElementById(elementId);

    if (element) {

        element.textContent = message;

    }

}


function clearLoginErrors() {

    const errors =
        document.querySelectorAll(".error-message");

    errors.forEach(error => {

        error.textContent = "";

    });


    const message =
        document.getElementById("loginMessage");


    if (message) {

        message.textContent = "";

        message.className = "form-message";

    }

}