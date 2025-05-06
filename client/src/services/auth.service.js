import api from "./api"

const registerApi = async function (email, password) {
    try {
        const payload = { email, password };
        const response = await api.post('/auth/register', payload);
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const requestOtpApi = async function (email) {
    try {
        const payload = { email };
        const response = await api.post('/auth/request-otp', payload);
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}


const verifyOtpApi = async function (id, otp) {
    try {
        const payload = { id, otp };
        const response = await api.post('/auth/verify-otp', payload);
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}


export { registerApi, requestOtpApi, verifyOtpApi };