import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../components/common/Footer';

export default function SessionExpired() {
    const navigate = useNavigate();
    return (
        <>
            <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-[79vh]">
                <div class="text-center">
                    <p class="text-base font-semibold text-teal-600">401</p>
                    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl uppercase">
                        Unauthorized
                    </h1>
                    <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Your session has been expired
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={() => navigate('/login')}
                        >
                            Login again
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
