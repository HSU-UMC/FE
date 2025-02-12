import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const API = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
