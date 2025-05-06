import api from "./api"

const registerApi = async function (email, password) {
    try {
        const payload = { email, password };
        const response = await api.post('/auth/register', payload);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const requestOtpApi = async function (email) {
    try {
        const payload = { email };
        const response = await api.post('/auth/request-verify-otp', payload);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}


const verifyOtpApi = async function (id, otp) {
    try {
        const payload = { id, otp };
        const response = await api.post('/auth/verify-otp', payload);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const loginApi = async function (email, password) {
    try {
        const payload = { email, password };
        const response = await api.post('/auth/login', payload);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export {loginApi, registerApi, requestOtpApi, verifyOtpApi };