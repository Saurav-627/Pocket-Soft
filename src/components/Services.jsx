import React from 'react';

const Services = () => {
    return (
        <section className="py-6 md:py-8 px-4 md:px-8 lg:px-12 bg-white" id="services">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-8 md:mb-12 animate-on-scroll">
                    <span className="tag-oversized mb-4 md:mb-6 text-xs md:text-sm">Capabilities List</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mt-3 md:mt-4">Technological Stack.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black animate-on-scroll">
                    <div className="p-6 md:p-8 lg:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-primary transition-colors group">
                        <span className="material-symbols-outlined text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 block">code_blocks</span>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">Software<br />Engineering</h3>
                        <p className="text-base md:text-lg font-medium mb-6 md:mb-10">We build monoliths and microservices that survive the test of scale. No bloat, just performance.</p>
                        <div className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm font-bold uppercase">
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Architecture Review</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Fullstack Deploy</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Cloud Scaling</div>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 lg:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-primary transition-colors group">
                        <span className="material-symbols-outlined text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 block">neurology</span>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">AI &amp;<br />Automation</h3>
                        <p className="text-base md:text-lg font-medium mb-6 md:mb-10">Integrating neural networks and automated logic to eliminate human bottlenecks in your workflow.</p>
                        <div className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm font-bold uppercase">
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> LLM Customization</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Workflow Auto</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Data Modeling</div>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 lg:p-12 hover:bg-primary transition-colors group">
                        <span className="material-symbols-outlined text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 block">cloud_sync</span>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">Cloud &amp;<br />DevOps</h3>
                        <p className="text-base md:text-lg font-medium mb-6 md:mb-10">Scalable cloud infrastructure and automated deployment pipelines. From AWS to Kubernetes, we architect for growth.</p>
                        <div className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm font-bold uppercase">
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Cloud Migration</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> CI/CD Pipelines</div>
                            <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Infrastructure as Code</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
