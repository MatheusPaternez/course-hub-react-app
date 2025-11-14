import axios from "axios";

export default async function Login({ email, password }) {
    try {
        // Platzi Fake Store API for autentication
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url, { email, password });

        const data = response.data;

        const token = data.access_token;

        // Save in local storage
        if (token) localStorage.setItem("authToken", token);

        return data;

    }

    catch (error) {
        // throw so html can show error message
        throw error.response.data;
    }
}