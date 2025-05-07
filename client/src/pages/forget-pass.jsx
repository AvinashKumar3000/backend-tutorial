import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { requestForgetPass, resetPassword } from '../services/auth.service';
import { CustomLoading } from '../components/common/Loading';

export default function ForgetPass() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (pass.trim() !== '' && pass === confirmPass) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [pass, confirmPass]);

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email) {
            alert('Please enter a valid email.');
            return;
        }
        try {
            setLoading(true);
            const requestToken = await requestForgetPass(email);
            if (!requestToken.status) throw new Error(requestToken.message);

            const passToken = prompt('Enter the token sent to your email');
            if (!passToken) {
                alert('token is required');
                return;
            }

            const verifyRes = await resetPassword(passToken, pass);

            if (verifyRes.status) {
                alert('reset Password successful!');
                navigate('/login');
            } else {
                alert('Invalid OTP, please try again.');
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-6xl">🔐</div>
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Forget password
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
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                New Password
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
            <CustomLoading loading={loading}/>
        </>
    );
}
