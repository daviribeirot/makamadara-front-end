import axios from "axios";

async function signIn(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-in`, { email, password });
    return response.data;
}

async function signUp(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user`, { email, password });
    return response.data;
}

export {
    signIn,
    signUp,
}