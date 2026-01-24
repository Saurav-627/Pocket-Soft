import React from 'react';

const Work = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-industrial-gray text-black" id="work">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-12 animate-on-scroll">
                    <div className="max-w-3xl">
                        <span className="tag-oversized">Field Operations</span>
                        <h2 className="text-6xl font-black mt-6">Selected Case Studies.</h2>
                    </div>
                    {/* <button className="bg-primary text-black px-8 py-4 brutalist-border-lime brutalist-shadow-lime font-bold uppercase text-lg">
                        View Archive
                    </button> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-on-scroll">
                    <div className="group brutalist-border-lime bg-white text-black">
                        <div className="h-60 bg-cover border-b-4 border-black"
                            style={{ backgroundImage: "url('/pocketpandit.png')" }}></div>
                        <div className="p-10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-4xl font-black normal-case">PocketPandit</h3>
                                <div className="bg-industrial-gray border-2 border-black text-black px-3 py-1 text-xs font-bold uppercase">AI ENGINE</div>
                            </div>
                            <p className="text-xl font-medium mb-8">AI-driven astrological computation engine. Combining legacy wisdom with modern predictive modeling.</p>
                            <button className="w-full py-4 brutalist-border brutalist-shadow-sm bg-primary font-black uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                Launch Case Study
                            </button>
                        </div>
                    </div>
                    <div className="group brutalist-border-lime bg-white text-black">
                        <div className="h-60 bg-cover transition-all border-b-4 border-black"
                            style={{ backgroundImage: "url('/trikoned.png')" }}></div>
                        <div className="p-10">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-4xl font-black normal-case">trikonED</h3>
                                <div className="bg-industrial-gray border-2 border-black text-black px-3 py-1 text-xs font-bold uppercase">ED TECH</div>
                            </div>
                            <p className="text-xl font-medium mb-8">Decentralized education network connecting institutional hubs across world.</p>
                            <button className="w-full py-4 brutalist-border brutalist-shadow-sm bg-primary font-black uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                Launch Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
