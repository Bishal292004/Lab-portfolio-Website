const registerForm = document.getElementById("registerForm");

if (registerForm) {
  document.querySelectorAll(".password-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.target);
      input.type = input.type === "password" ? "text" : "password";
      button.textContent = input.type === "password" ? "Show" : "Hide";
    });
  });

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearRegisterErrors();

    const data = {
      fullName: value("fullName"),
      email: value("email").toLowerCase(),
      studentID: value("studentID"),
      dob: value("dob"),
      phone: value("phone"),
      gender: value("gender"),
      course: value("course"),
      bloodGroup: value("bloodGroup"),
      address: value("address"),
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
    };

    let valid = true;

    if (data.fullName.length < 3) {
      error("fullNameError", "Enter your full name.");
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      error("emailError", "Enter a valid email address.");
      valid = false;
    }
    if (data.studentID.length < 3) {
      error("studentIDError", "Enter your student ID.");
      valid = false;
    }
    if (!/^[0-9]{10}$/.test(data.phone)) {
      error("phoneError", "Phone number must contain 10 digits.");
      valid = false;
    }
    if (!data.dob) {
      error("dobError", "Select your date of birth.");
      valid = false;
    }
    if (!data.gender) {
      error("genderError", "Select your gender.");
      valid = false;
    }
    if (!data.course) {
      error("courseError", "Select your course.");
      valid = false;
    }
    if (!data.bloodGroup) {
      error("bloodGroupError", "Select your blood group.");
      valid = false;
    }
    if (data.address.length < 5) {
      error("addressError", "Enter your address.");
      valid = false;
    }
    if (data.password.length < 6) {
      error("passwordError", "Password must contain at least 6 characters.");
      valid = false;
    }
    if (data.password !== data.confirmPassword) {
      error("confirmPasswordError", "Passwords do not match.");
      valid = false;
    }

    if (!valid) return;

    delete data.confirmPassword;
    setRegisterMessage("Creating your account...", "");

    try {
      const response = await fetch(`https://department-website-backend.vercel.app/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setRegisterMessage(result.message || "Registration failed.", "error");
        return;
      }

      localStorage.setItem("studentToken", result.token);
      localStorage.setItem("studentData", JSON.stringify(result.student));
      window.location.href = "dashboard.html";
    } catch (err) {
      setRegisterMessage(
        "Cannot connect to the backend. Make sure the server is running.",
        "error",
      );
    }
  });
}

function value(id) {
  return document.getElementById(id).value.trim();
}

function error(id, message) {
  document.getElementById(id).textContent = message;
}

function clearRegisterErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((e) => (e.textContent = ""));
  setRegisterMessage("", "");
}

function setRegisterMessage(message, type) {
  const element = document.getElementById("registerMessage");
  if (element) {
    element.textContent = message;
    element.className = `form-message ${type}`;
  }
}
