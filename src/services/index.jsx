import axios from "axios";

async function signIn(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-in`, { email, password });
    return response.data;
}

async function signUp(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user`, { email, password });
    return response.data;
}

async function createAttendance(name, description, config) {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/attendance`, { name, description }, config);
    return response.data;
}

async function getUserHistory(config) {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/attendance`, config);
    return response.data;
}

export {
    signIn,
    signUp,
    createAttendance,
    getUserHistory,
}