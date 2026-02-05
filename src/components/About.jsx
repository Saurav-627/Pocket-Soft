import React from 'react';

const About = () => {
    return (
        <section className="bg-soft-gray py-6 md:py-8 px-4 md:px-8 lg:px-12 border-b-4 border-black" id="about">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
                <div className="relative animate-on-scroll">
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="brutalist-border brutalist-shadow bg-white overflow-hidden">
                            <div className="aspect-[3/4] bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbg-RarqBOgE7ywGG0SGqEoeBy1naSBPER3dwgTIWYbtAE6fQFwB8viCFxoicC5BQ-Tc7YHLrpMiyKJrwo92elruCig1TBafwhF3WkQIKCdi7eeXkNqRg_YiKB3Lu3nMgTkY7tyr3q2x1vZay4n-txH58-oqC2KbKl3NlBA3LP7T87BFH8xscVSbgfscpHSI7BzlaDDEcHxBILANYzWY7rP_RfgwS7PqBC6_qOZTVHmoeB3g3AG0jIye7pNuq2vL14ruB4FzRB7PvZ')" }}></div>
                        </div>
                        <div className="brutalist-border-lime brutalist-shadow-lime bg-white overflow-hidden mt-8 md:mt-12">
                            <div className="aspect-[3/4] bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUjsi-UreiRZx8mWzT0PEYSnwLOHO2t9H44Mguv2ryn0CJhY8NHzDq_GTbfUPunILH3JDkrli1OW2B5MdAdRXvanQSjSSRpVkT6M_nHeTLSG-7Y4ABhjA7dqT8U02q_08vgOMe9EFPfAymvy0VMbl5QMo_TTFtBJrKqfU8BuCdfKyApSwgs7Q1gsYZ4Iv6iMCfQgY5ftzLF5f0_bnkS2bnB6GUhJS44Z_jQ6VrtDgqFHrkkg6FO2-oJ_1QXWKwVj5ZqhHSvawdc11z')" }}></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:gap-8 animate-on-scroll">
                    <span className="tag-oversized w-fit text-xs md:text-sm">Identity Report</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">Nepal Origins.<br />Universal Standards.</h2>
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl leading-snug">
                        <p>We are a strike team of developers and designers based in Nepal, operating on a global frequency. We bridge the gap between high-level engineering and radical design.</p>
                        <p>PocketSoft represents the evolution of IT services: raw energy combined with disciplined technical architecture.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
                        <div className="p-4 md:p-6 bg-white brutalist-border brutalist-shadow-sm">
                            <span className="material-symbols-outlined text-3xl md:text-4xl mb-3 md:mb-4">public</span>
                            <h4 className="font-bold text-base md:text-lg mb-2">Global Ops</h4>
                            <p className="text-xs md:text-sm font-medium">Synchronized with international markets 24/7.</p>
                        </div>
                        <div className="p-4 md:p-6 bg-white brutalist-border brutalist-shadow-sm">
                            <span className="material-symbols-outlined text-3xl md:text-4xl mb-3 md:mb-4">memory</span>
                            <h4 className="font-bold text-base md:text-lg mb-2">Top Tier</h4>
                            <p className="text-xs md:text-sm font-medium">Vetted engineers from the elite 1% talent pool.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
