import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-industrial-gray text-black border-t-4 border-primary py-6 md:py-8 px-4 md:px-8 lg:px-12 animate-on-scroll">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <img src="/logo.png" alt="PocketSoft Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain mix-blend-multiply" />
                        </div>
                        <p className="text-base md:text-lg opacity-80 leading-snug mb-6 md:mb-8 text-black">
                            Premium software &amp; IT solutions. <br />Engineered in Kathmandu. <br />Deployed Globally.
                        </p>
                        <div className="flex gap-3 md:gap-4">
                            {['share', 'hub', 'alternate_email'].map(icon => (
                                <a key={icon} className="size-10 md:size-12 brutalist-border border-black flex items-center justify-center hover:bg-primary hover:text-black transition-all" href="#">
                                    <span className="material-symbols-outlined text-black text-lg md:text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-black text-lg md:text-xl mb-6 md:mb-10 border-b-2 border-primary pb-3 md:pb-4">SERVICES</h5>
                        <ul className="flex flex-col gap-4 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-widest text-black">
                            {['Software Dev', 'AI Integrations', 'UX Systems', 'Cloud Architecture'].map(item => (
                                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black text-lg md:text-xl mb-6 md:mb-10 border-b-2 border-primary pb-3 md:pb-4">COMPANY</h5>
                        <ul className="flex flex-col gap-4 md:gap-6 text-xs md:text-sm font-bold uppercase tracking-widest text-black">
                            {['Mission Log', 'The Architects', 'Careers', 'Secure Contact'].map(item => (
                                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black text-lg md:text-xl mb-6 md:mb-10 border-b-2 border-primary pb-3 md:pb-4">LOCATION</h5>
                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6 text-black">
                            <span className="material-symbols-outlined text-primary text-xl md:text-2xl">location_on</span>
                            <p className="font-bold uppercase tracking-tighter text-base md:text-lg leading-tight">Kathmandu, Nepal <br /><span className="text-xs md:text-sm opacity-60">HQ Operations</span></p>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4 text-black">
                            <span className="material-symbols-outlined text-primary text-xl md:text-2xl">mail</span>
                            <p className="font-bold text-xs md:text-sm">HELLO@POCKETSOFT.COM</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 md:pt-12 border-t border-black/60 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 font-mono text-[10px] md:text-xs tracking-[0.1em] uppercase opacity-90 text-black">
                    <p>© 2026 POCKETSOFT CORE SYSTEMS. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8 md:gap-12">
                        <a className="hover:text-black hover:opacity-100" href="#">Privacy Protocol</a>
                        <a className="hover:text-black hover:opacity-100" href="#">Usage Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
