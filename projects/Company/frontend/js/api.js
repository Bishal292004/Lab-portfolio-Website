const API_BASE_URL = window.API_BASE_URL
    || "https://company-backend-alpha.vercel.app/api";

async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers
    });

    let data = {};

    try {
        data = await response.json();
    } catch {
        data = {
            success: false,
            message: "The server returned an invalid response."
        };
    }

    if (!response.ok) {
        const error = new Error(data.message || "Request failed.");
        error.status = response.status;
        throw error;
    }

    return data;
}
