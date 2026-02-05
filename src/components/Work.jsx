import React from 'react';

const Work = () => {
    return (
        <section className="py-6 md:py-8 px-4 md:px-8 lg:px-12 bg-industrial-gray text-black" id="work">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6 md:gap-12 animate-on-scroll">
                    <div className="max-w-3xl">
                        <span className="tag-oversized text-xs md:text-sm">Field Operations</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mt-4 md:mt-6">Selected Case Studies.</h2>
                    </div>
                    {/* <button className="bg-primary text-black px-8 py-4 brutalist-border-lime brutalist-shadow-lime font-bold uppercase text-lg">
                        View Archive
                    </button> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 animate-on-scroll">
                    <div className="group brutalist-border-lime bg-white text-black">
                        <div className="h-48 md:h-60 bg-cover border-b-4 border-black"
                            style={{ backgroundImage: "url('/pocketpandit.png')" }}></div>
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black normal-case">PocketPandit AI</h3>
                                <div className="bg-industrial-gray border-2 border-black text-black px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold uppercase">AI ENGINE</div>
                            </div>
                            <p className="text-base md:text-lg lg:text-xl font-medium mb-6 md:mb-8">AI-driven astrological computation engine. Combining legacy wisdom with modern predictive modeling.</p>
                            <a href="https://pocketpandit.ai" target="_blank" className="w-full block text-center py-3 md:py-4 brutalist-border brutalist-shadow-sm bg-primary font-black uppercase text-sm md:text-base tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                Launch Case Study
                            </a>
                        </div>
                    </div>
                    <div className="group brutalist-border-lime bg-white text-black">
                        <div className="h-48 md:h-60 bg-cover transition-all border-b-4 border-black"
                            style={{ backgroundImage: "url('/trikoned.png')" }}></div>
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black normal-case">trikonED</h3>
                                <div className="bg-industrial-gray border-2 border-black text-black px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold uppercase">ED TECH</div>
                            </div>
                            <p className="text-base md:text-lg lg:text-xl font-medium mb-6 md:mb-8">Decentralized education network connecting institutional hubs across world.</p>
                            <a href="https://trikoned.com" target="_blank" className="w-full block text-center py-3 md:py-4 brutalist-border brutalist-shadow-sm bg-primary font-black uppercase text-sm md:text-base tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                Launch Case Study
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
