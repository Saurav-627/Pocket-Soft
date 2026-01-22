import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-50"></div>
            <div className="max-w-[1400px] mx-auto bg-industrial-gray text-black p-16 md:p-32 brutalist-border-lime brutalist-shadow relative z-10 text-center animate-on-scroll">
                <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.8] uppercase">System Ready.<br />Initiate?</h2>
                <p className="text-2xl md:text-3xl font-medium mb-16 max-w-4xl mx-auto text-black uppercase tracking-tighter">Turn your vision into a global-scale digital product today.</p>
                <button className="bg-primary text-black px-12 py-6 brutalist-border font-black text-2xl uppercase hover:scale-105 transition-all">
                    Contact PocketSoft
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
