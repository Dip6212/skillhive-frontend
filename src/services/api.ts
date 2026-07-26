import axios from "axios";

const api = axios.create({
    baseURL: "https://skillhive-backend-t92e.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;