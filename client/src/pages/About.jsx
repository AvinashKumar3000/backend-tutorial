import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function About() {
    const {count, incr,decr} = useContext(DataContext);
    
    return (
        <main>
            <h1>the count: <span>{count}</span></h1>

            <button className='mr-2 bg-amber-600' onClick={() => incr()}>increment</button>
            <button className='mr-2 bg-amber-600' onClick={() => decr()}>decrement</button>

            <article className='flex h-full flex-col pt-16 pb-10'>
                <div className='flex-auto prose dark:prose-invert [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl lg:[html_:where(&>*)]:mx-[calc(50%-min(50%,var(--container-lg)))] lg:[html_:where(&>*)]:max-w-3xl'>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>About Us</h1>
                    <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                        To get started, create a new application in your <a href="#" style={{ color: '#0070f3', textDecoration: 'underline' }}>developer settings</a>, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our <a href="#" style={{ color: '#0070f3', textDecoration: 'underline' }}>integrations directory</a> to reach the Protocol community.
                    </p>
                    <section style={{ marginTop: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Our Mission</h2>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                            Our mission is to empower developers by providing the tools and resources they need to build innovative solutions. We believe in fostering a community where creativity and collaboration thrive.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
