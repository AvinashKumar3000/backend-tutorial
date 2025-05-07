import api from './api';

const registerApi = async function (email, password) {
    const payload = { email, password };
    const response = await api.post('/auth/register', payload);
    return response.data;
};

const requestOtpApi = async function (email) {
    const payload = { email };
    const response = await api.post('/auth/request-verify-otp', payload);
    return response.data;
};

const requestForgetPass = async function (email) {
    const payload = { email };
    const response = await api.post('/auth/request-reset-password', payload);
    return response.data;
};

const resetPassword = async function (token, newPassword) {
    const payload = { token, newPassword };
    const response = await api.put('/auth/reset-password', payload);
    return response.data;
};

const verifyOtpApi = async function (id, otp) {
    const payload = { id, otp };
    const response = await api.post('/auth/verify-otp', payload);
    return response.data;
};

const loginApi = async function (email, password) {
    const payload = { email, password };
    const response = await api.post('/auth/login', payload);
    return response.data;
};

export { loginApi, registerApi, requestOtpApi, verifyOtpApi, requestForgetPass, resetPassword };
