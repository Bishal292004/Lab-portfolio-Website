const token = localStorage.getItem("studentToken");

if (!token) {
    window.location.href = "login.html";
} else {
    loadDashboard();
}

async function loadDashboard() {
    try {
        const response = await fetch(`https://department-website-backend.vercel.app/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await response.json();

        if (!response.ok) {
            localStorage.removeItem("studentToken");
            localStorage.removeItem("studentData");
            window.location.href = "login.html";
            return;
        }

        localStorage.setItem("studentData", JSON.stringify(data.student));
        renderDashboard(data.student);
    } catch (error) {
        const cached = localStorage.getItem("studentData");
        if (cached) {
            renderDashboard(JSON.parse(cached));
            showDashboardMessage("Live profile refresh failed. Showing your saved profile data.", "error");
        } else {
            showDashboardMessage("Unable to load your dashboard.", "error");
        }
    }
}

function renderDashboard(student) {
    document.getElementById("dashboardName").textContent = student.fullName.split(" ")[0];
    document.getElementById("profileName").textContent = student.fullName;
    document.getElementById("profileCourse").textContent = student.course;
    document.getElementById("profileInitials").textContent = initials(student.fullName);

    document.getElementById("dStudentID").textContent = student.studentID;
    document.getElementById("dEmail").textContent = student.email;
    document.getElementById("dPhone").textContent = student.phone;
    document.getElementById("dDob").textContent = formatDate(student.dob);
    document.getElementById("dGender").textContent = student.gender;
    document.getElementById("dCourse").textContent = student.course;
    document.getElementById("dBlood").textContent = student.bloodGroup;
    document.getElementById("dAddress").textContent = student.address;

    const button = document.getElementById("dashboardLogout");
    button.addEventListener("click", () => {
        localStorage.removeItem("studentToken");
        localStorage.removeItem("studentData");
        window.location.href = "index.html";
    });
}

function initials(name) {
    return name.split(/\s+/).slice(0, 2).map(word => word[0]).join("").toUpperCase();
}

function formatDate(dateString) {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit", month: "long", year: "numeric"
    });
}

function showDashboardMessage(message, type) {
    const element = document.getElementById("dashboardMessage");
    if (element) {
        element.textContent = message;
        element.className = `form-message ${type}`;
    }
}
