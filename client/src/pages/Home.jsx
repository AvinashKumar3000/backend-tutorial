import React from 'react';

export default function Home() {
    return (
        <div>

            <div className="relative h-[300px] pt-20">
                <p className="inline bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">All your CMS application template
                </p>
                <p className="mt-3 text-2xl tracking-tight text-slate-400">Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.
                </p>
                <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                    <span className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500">
                        <a to={'/register'}>
                            Create new account
                        </a>
                    </span>
                    <span className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400">
                        <a to={'/login'}>
                            Already  have an account
                        </a>
                    </span>
                </div>
            </div>
            <div className='mt-20'>

            </div>
            <hr />
            <div className='mt-10 w-4xl prose max-w-none prose-slate dark:text-slate-400 dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 dark:prose-lead:text-slate-400 prose-a:font-semibold dark:prose-a:text-sky-400 dark:[--tw-prose-background:var(--color-slate-900)] prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,var(--color-sky-300))] prose-a:hover:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,var(--color-sky-800))] dark:prose-a:hover:[--tw-prose-underline-size:6px] prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10 dark:prose-hr:border-slate-800'>
                <h2 className='text-black font-semibold'>This is your changes</h2>
                <p>
                    Minima vel non iste debitis. Consequatur repudiandae et quod accusamus sit molestias consequatur aperiam. Et sequi ipsa eum voluptatibus ipsam. Et quisquam ut.

                    Qui quae esse aspernatur fugit possimus. Quam sed molestiae temporibus. Eum perferendis dignissimos provident ea et. Et repudiandae quasi accusamus consequatur dolore nobis. Quia reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet praesentium sapiente.

                    Atque eos laudantium. Optio odit aspernatur consequuntur corporis soluta quidem sunt aut doloribus. Laudantium assumenda commodi.
                </p>
            </div>
        </div>
    );
}
