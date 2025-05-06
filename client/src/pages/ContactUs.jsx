import React from 'react';

export default function ContactUs() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="-mx-6 rounded-4xl bg-zinc-600 px-6 py-20 sm:mx-0 sm:py-32 md:px-12" style={{opacity: 1}}>
                    <div className="mx-auto max-w-4xl">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">Tell us about your project
                            </h2>
                            <div className="mt-6 flex">
                                <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200" href="/contact">
                                    <span className="relative top-px">Say Hej
                                    </span>
                                </a>
                            </div>
                            <div className="mt-10 border-t border-white/10 pt-10">
                                <h3 className="font-display text-base font-semibold text-white">Our offices
                                </h3>
                                <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                    <li>
                                        <address className="text-sm not-italic text-neutral-300">
                                            <strong className="text-white">Copenhagen</strong>
                                            <br />1 Carlsberg Gate
                                            <br />1260, København, Denmark
                                        </address>
                                    </li>
                                    <li>
                                        <address className="text-sm not-italic text-neutral-300">
                                            <strong className="text-white">Billund
                                            </strong>
                                            <br />24 Lego Allé
                                            <br />7190, Billund, Denmark
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
