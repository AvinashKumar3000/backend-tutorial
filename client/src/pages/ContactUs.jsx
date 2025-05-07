import React from 'react';
export default function ContactUs() {
    return (
        <>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                    <h1 class="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
                        <span class="sr-only">DeceptiConf -
                        </span>A design conference for the dark side.
                    </h1>
                    <div class="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                        <p>The next generation of web users are tech-savvy and suspicious. They know how to use dev tools, they can detect a phishing scam from a mile away, and they certainly aren’t accepting any checks from Western Union.
                        </p>
                        <p>At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.
                        </p>
                    </div>
                    <a class="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden" href="#">Get your tickets
                    </a>
                    <dl class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                        <div>
                            <dt class="font-mono text-sm text-blue-600">Speakers
                            </dt>
                            <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">18
                            </dd>
                        </div>
                        <div>
                            <dt class="font-mono text-sm text-blue-600">People Attending
                            </dt>
                            <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">2,091
                            </dd>
                        </div>
                        <div>
                            <dt class="font-mono text-sm text-blue-600">Venue
                            </dt>
                            <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Staples Center
                            </dd>
                        </div>
                        <div>
                            <dt class="font-mono text-sm text-blue-600">Location
                            </dt>
                            <dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Los Angeles
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>

    );

}
