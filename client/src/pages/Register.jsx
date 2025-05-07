import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false); // default false

    const { loading, register, sendOtp, verifyOtp } = useAuth();

    useEffect(() => {
        if (isEmailVerified && pass.trim() !== '' && pass === confirmPass) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [pass, confirmPass, isEmailVerified]);

    async function handleSendOtp() {
        if (!email) {
            alert('Please enter a valid email.');
            return;
        }
        try {
            const reqOtpRes = await sendOtp(email);
            if (!reqOtpRes.status) throw new Error(reqOtpRes.message);

            const userOtp = prompt('Enter the OTP sent to your email');
            if (!userOtp) {
                alert('OTP is required');
                return;
            }

            const verifyRes = await verifyOtp(reqOtpRes.data.id, userOtp);

            if (verifyRes.status) {
                alert('Email verified successfully!');
                setIsEmailVerified(true);
            } else {
                alert('Invalid OTP, please try again.');
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const res = await register(email, pass);
            if (!res.status) throw new Error(res.message);
            alert(result.message || 'Registration successful!');
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="text-center text-6xl">🎍</div>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Create your new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2 flex justify-around">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="block w-[70%] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                disabled={loading || isEmailVerified}
                                className="cursor-pointer flex w-[28%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isEmailVerified ? 'Verified' : 'Send OTP'}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            autoComplete="new-password"
                            className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            required
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            autoComplete="new-password"
                            className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            style={{
                                cursor: !isValid ? 'not-allowed' : 'pointer',
                                color: !isValid ? 'red' : 'white',
                            }}
                        >
                            Register Now
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already have an account?{' '}
                    <Link to={'/login'} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
