// =====================================================
// REGISTRATION FORM
// =====================================================

const registerForm = document.getElementById("registerForm");


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
// REGISTRATION
// -----------------------------------------------------

registerForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Clear previous errors
    clearErrors();


    // Get form values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const studentId =
        document.getElementById("studentId").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const course =
        document.getElementById("course").value;

    const semester =
        document.getElementById("semester").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    let isValid = true;


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (name.length < 3) {

        showError(
            "nameError",
            "Please enter your full name."
        );

        isValid = false;

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        showError(
            "emailError",
            "Please enter a valid email address."
        );

        isValid = false;

    }


    if (studentId.length < 3) {

        showError(
            "studentIdError",
            "Please enter your student/roll number."
        );

        isValid = false;

    }


    const phonePattern =
        /^[0-9]{10}$/;


    if (!phonePattern.test(phone)) {

        showError(
            "phoneError",
            "Phone number must contain 10 digits."
        );

        isValid = false;

    }


    if (!course) {

        isValid = false;

        alert("Please select your course.");

    }


    if (!semester) {

        isValid = false;

        alert("Please select your semester.");

    }


    if (password.length < 6) {

        showError(
            "passwordError",
            "Password must contain at least 6 characters."
        );

        isValid = false;

    }


    if (password !== confirmPassword) {

        showError(
            "confirmPasswordError",
            "Passwords do not match."
        );

        isValid = false;

    }


    if (!isValid) {

        return;

    }


    // -------------------------------------------------
    // USER OBJECT
    // -------------------------------------------------

    const userData = {

        name: name,

        email: email,

        studentId: studentId,

        phone: phone,

        course: course,

        semester: semester,

        password: password

    };


    /*
        FUTURE EXPRESS API

        Later, this section can become:

        fetch("/api/auth/register", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        });

    */


    console.log("Registration data:", userData);


    // -------------------------------------------------
    // FRONTEND DEMO MESSAGE
    // -------------------------------------------------

    const message =
        document.getElementById("registerMessage");


    message.textContent =
        "Registration form is valid. Backend connection will be added later.";

    message.className =
        "form-message success";


});


// =====================================================
// HELPER FUNCTIONS
// =====================================================

function showError(elementId, message) {

    const element =
        document.getElementById(elementId);

    if (element) {

        element.textContent = message;

    }

}


function clearErrors() {

    const errors =
        document.querySelectorAll(".error-message");

    errors.forEach(error => {

        error.textContent = "";

    });


    const message =
        document.getElementById("registerMessage");

    if (message) {

        message.textContent = "";

        message.className = "form-message";

    }

}