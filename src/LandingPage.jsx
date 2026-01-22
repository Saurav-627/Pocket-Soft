import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const wordRef = useRef(null);
    const words = ["Powerful", "Global", "Secure", "Rapid"];

    useEffect(() => {
        // Word Rotator
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (wordRef.current) {
                gsap.to(wordRef.current, {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        currentIndex = (currentIndex + 1) % words.length;
                        wordRef.current.innerText = words[currentIndex];
                        gsap.fromTo(wordRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.3 }
                        );
                    }
                });
            }
        }, 2500);

        // Scroll Animations
        // We select all elements with the class 'animate-on-scroll'
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach((el) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Refresh ScrollTrigger slightly after mount to ensure layout is settled
        ScrollTrigger.refresh();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-12 py-6">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="size-12 bg-primary brutalist-border flex items-center justify-center">
                            <span className="material-symbols-outlined text-black font-black text-3xl">terminal</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tighter">POCKETSOFT_</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-12">
                        <a className="text-sm font-bold uppercase hover:bg-primary px-2 py-1 transition-colors" href="#services">_Services</a>
                        <a className="text-sm font-bold uppercase hover:bg-primary px-2 py-1 transition-colors" href="#work">_Work</a>
                        <a className="text-sm font-bold uppercase hover:bg-primary px-2 py-1 transition-colors" href="#about">_About</a>
                        <a className="text-sm font-bold uppercase hover:bg-primary px-2 py-1 transition-colors" href="#team">_Team</a>
                    </nav>
                    <button className="bg-primary px-8 py-3 brutalist-border brutalist-shadow-sm font-bold uppercase text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        Start Project
                    </button>
                </div>
            </header>

            <main>
                <section className="relative bg-white pt-24 pb-32 px-6 md:px-12 grid-pattern border-b-4 border-black">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-10 animate-on-scroll">
                            <div>
                                <span className="tag-oversized mb-8">Nepal Based // Global Scale</span>
                                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mt-6">
                                    Building <span ref={wordRef} className="bg-primary px-4 inline-block min-w-[300px]">Powerful</span> Digital Systems.
                                </h1>
                            </div>
                            <p className="text-2xl font-medium max-w-2xl leading-tight border-l-8 border-primary pl-6">
                                POCKETSOFT engineers high-performance software. We don't just build apps; we architect the digital future with brutal precision.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-black text-white px-10 py-5 brutalist-border-lime brutalist-shadow-lime text-xl font-bold uppercase hover:scale-[1.02] transition-transform">
                                    Initiate Project
                                </button>
                                <button className="bg-white text-black px-10 py-5 brutalist-border brutalist-shadow text-xl font-bold uppercase hover:scale-[1.02] transition-transform">
                                    View Dossier
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative animate-on-scroll">
                            <div className="absolute -inset-4 bg-primary brutalist-border -z-10 translate-x-4 translate-y-4"></div>
                            <div className="brutalist-border overflow-hidden bg-black">
                                <div className="w-full aspect-[4/5] bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4qKk-68XJA2liySrJ04WXxjvXiWIWbjQVpHk-zZK4z1g4298BIRms0gZYGIENA3BWrsmf9qLakFFDEmjYngnmN6HLj6bxx1xXhAnesHfS4B1COdptq-WbTIOojzLrJtT467-Gt5uRU5vk2oH4-noqf1NI0Isd1WUZPp_W3c0Nf3mleGY8XIYs7Hgcf9fdgSryV_yoiXpZj7wBhJCqDt7mX3oedPmgeEc8USl4XbPLgQawD0g43JOMNZAYk0uEepQnFwGfMc3jjo1w')" }}></div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white brutalist-border p-8 brutalist-shadow">
                                <p className="text-5xl font-black text-black">50+</p>
                                <p className="text-xs font-bold uppercase tracking-widest mt-2">Successful Deployments</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-soft-gray py-32 px-6 md:px-12 border-b-4 border-black" id="about">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative animate-on-scroll">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="brutalist-border brutalist-shadow bg-white overflow-hidden">
                                    <div className="aspect-[3/4] bg-cover bg-center grayscale"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbg-RarqBOgE7ywGG0SGqEoeBy1naSBPER3dwgTIWYbtAE6fQFwB8viCFxoicC5BQ-Tc7YHLrpMiyKJrwo92elruCig1TBafwhF3WkQIKCdi7eeXkNqRg_YiKB3Lu3nMgTkY7tyr3q2x1vZay4n-txH58-oqC2KbKl3NlBA3LP7T87BFH8xscVSbgfscpHSI7BzlaDDEcHxBILANYzWY7rP_RfgwS7PqBC6_qOZTVHmoeB3g3AG0jIye7pNuq2vL14ruB4FzRB7PvZ')" }}></div>
                                </div>
                                <div className="brutalist-border-lime brutalist-shadow-lime bg-white overflow-hidden mt-12">
                                    <div className="aspect-[3/4] bg-cover bg-center grayscale"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUjsi-UreiRZx8mWzT0PEYSnwLOHO2t9H44Mguv2ryn0CJhY8NHzDq_GTbfUPunILH3JDkrli1OW2B5MdAdRXvanQSjSSRpVkT6M_nHeTLSG-7Y4ABhjA7dqT8U02q_08vgOMe9EFPfAymvy0VMbl5QMo_TTFtBJrKqfU8BuCdfKyApSwgs7Q1gsYZ4Iv6iMCfQgY5ftzLF5f0_bnkS2bnB6GUhJS44Z_jQ6VrtDgqFHrkkg6FO2-oJ_1QXWKwVj5ZqhHSvawdc11z')" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 animate-on-scroll">
                            <span className="tag-oversized w-fit">Identity_Report</span>
                            <h2 className="text-5xl font-black">Kathmandu Origins.<br />Universal Standards.</h2>
                            <div className="space-y-6 text-xl leading-snug">
                                <p>We are a strike team of developers and designers based in Nepal, operating on a global frequency. We bridge the gap between high-level engineering and radical design.</p>
                                <p>PocketSoft represents the evolution of IT services: raw energy combined with disciplined technical architecture.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="p-6 bg-white brutalist-border brutalist-shadow-sm">
                                    <span className="material-symbols-outlined text-4xl mb-4">public</span>
                                    <h4 className="font-bold text-lg mb-2">Global_Ops</h4>
                                    <p className="text-sm font-medium">Synchronized with international markets 24/7.</p>
                                </div>
                                <div className="p-6 bg-white brutalist-border brutalist-shadow-sm">
                                    <span className="material-symbols-outlined text-4xl mb-4">memory</span>
                                    <h4 className="font-bold text-lg mb-2">Top_Tier</h4>
                                    <p className="text-sm font-medium">Vetted engineers from the elite 1% talent pool.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-12 bg-white" id="services">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-24 animate-on-scroll">
                            <span className="tag-oversized mb-6">Capabilities_List</span>
                            <h2 className="text-6xl font-black mt-4">Technological Stack.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black animate-on-scroll">
                            <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-primary transition-colors group">
                                <span className="material-symbols-outlined text-6xl mb-8 block">code_blocks</span>
                                <h3 className="text-3xl font-black mb-6">Software<br />Engineering</h3>
                                <p className="text-lg font-medium mb-10">We build monoliths and microservices that survive the test of scale. No bloat, just performance.</p>
                                <div className="space-y-3 font-mono text-sm font-bold uppercase">
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Architecture_Review</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Fullstack_Deploy</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Cloud_Scaling</div>
                                </div>
                            </div>
                            <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-primary transition-colors group">
                                <span className="material-symbols-outlined text-6xl mb-8 block">neurology</span>
                                <h3 className="text-3xl font-black mb-6">AI &amp;<br />Automation</h3>
                                <p className="text-lg font-medium mb-10">Integrating neural networks and automated logic to eliminate human bottlenecks in your workflow.</p>
                                <div className="space-y-3 font-mono text-sm font-bold uppercase">
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> LLM_Customization</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Workflow_Auto</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Data_Modeling</div>
                                </div>
                            </div>
                            <div className="p-12 hover:bg-primary transition-colors group">
                                <span className="material-symbols-outlined text-6xl mb-8 block">layers_clear</span>
                                <h3 className="text-3xl font-black mb-6">UX/UI<br />Design</h3>
                                <p className="text-lg font-medium mb-10">Interface design that favors clarity and function over fluff. High-contrast, high-impact results.</p>
                                <div className="space-y-3 font-mono text-sm font-bold uppercase">
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Design_Systems</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> User_Experience</div>
                                    <div className="flex items-center gap-2"><span className="size-2 bg-black"></span> Rapid_Prototyping</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-12 bg-black text-white" id="work">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 animate-on-scroll">
                            <div className="max-w-2xl">
                                <span className="tag-oversized">Field_Operations</span>
                                <h2 className="text-6xl font-black mt-6">Selected Case Studies.</h2>
                            </div>
                            <button className="bg-primary text-black px-8 py-4 brutalist-border-lime brutalist-shadow-lime font-bold uppercase text-lg">
                                View_Archive
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 animate-on-scroll">
                            <div className="group brutalist-border-lime bg-white text-black">
                                <div className="aspect-video bg-cover bg-center grayscale group-hover:grayscale-0 transition-all border-b-4 border-black"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkRFefQV3VsDRvGeV1tdC4F5CIkxMl0FublqQFgw7LI_8CM_P67qOpDGpQI_Cz-_dKyjirGov2c3n3BvTrp0AHo9A6RxSyz3MarBS_ZIleu9bfy-AG1ye9Af6uwhOfdqCelOo0dFwSTBcqj9Mryc4-xEFYnNuD6CJF7zJV6c_7MHoZfZycrHhx9cOrdLwWsFE7z7sZ3R6oM7oBvgUaNpx-rDPXsZ-R0uMF3kfO4cDM73Wy8VpA3yHeHCioNU0SuN2V-3-WE8LBiIam')" }}></div>
                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-4xl font-black">POCKET_PANDIT</h3>
                                        <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase">AI_ENGINE</span>
                                    </div>
                                    <p className="text-xl font-medium mb-8">AI-driven astrological computation engine. Combining legacy wisdom with modern predictive modeling.</p>
                                    <button className="w-full py-4 brutalist-border bg-primary font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                        Launch_Case_Study
                                    </button>
                                </div>
                            </div>
                            <div className="group brutalist-border-lime bg-white text-black">
                                <div className="aspect-video bg-cover bg-center grayscale group-hover:grayscale-0 transition-all border-b-4 border-black"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbkmO_nKWObyjnYWl3WFK7FpakcDwKGHx4bqturWLsus4ClhUiGFpQYmormCyf9nCy3FJJfytJtJVcKs_Gfp6KtI6KOp_zGeZTPJWpLN890yihvhuIj0hVg4Bd0qMaQdnZZ88Lolo6C_KuPli2DScYRqDSeGAolc7befI21GcU_uXn9OioReN39FogA_yD-aEcWCmiPUL-L3jKn4R-R9na-VbcZ--VtdhOPkeMSMie5Vo4ITbKnGAm7BbYyfLTZX4bRGgR2wz-gTd-')" }}></div>
                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-4xl font-black">TRIKON_ED</h3>
                                        <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase">ED_TECH</span>
                                    </div>
                                    <p className="text-xl font-medium mb-8">Decentralized education network connecting institutional hubs across four continents.</p>
                                    <button className="w-full py-4 brutalist-border bg-primary font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                                        Launch_Case_Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-12 bg-soft-gray overflow-hidden border-y-4 border-black" id="team">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-center mb-24 animate-on-scroll">
                            <span className="tag-oversized mx-auto">Core_Unit</span>
                            <h2 className="text-6xl font-black mt-6 uppercase">The Architects.</h2>
                        </div>
                        <div className="flex gap-12 overflow-x-auto pb-12 snap-x no-scrollbar animate-on-scroll">
                            {[
                                { name: "Saroj Shrestha", role: "Chief Technology Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxteyLJEWsH69QiIbx-BcY3HvK5c7lpiuPb0sEZPZEUZ00ZT7bDn3jCh6fme6WATxuoCc8fAdw4CFi5-gbdUII2UTNsno2Fan55fPidoe3J9t_aki5oeXmciURnVmZ6hmOTi-9RSYfGn1nK9cp6oXtzOj8SMmtc7TlS4491s3Dj-CFrEAjGAEGnevzUaEdice9z5FbxiX-CQ4BnNJ2z2hghdfw-29_jAFLOpGSWEo1dZRxoOIr33gadO7IuP08k3yPQj-9f2Lgg-SP" },
                                { name: "Anjali Karki", role: "Head of UI/UX", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkwxr9GPFYjL8guY1XqZc9VBTphdlkNTBSdJVEyQpbRndJV0csWfSbqpOLyRpvbIy9ddgLG7yN3JRU1hwifccFP2g-ppPRvfRmDPxkKGqy7jF_cz3bX32zIOn4AG2nxgsPz2KyrjMYhXa1tcCV7ZByO_2iDl-FHF8Eed6-Q_eXIaLN5DJUD9LKz6MTekLTpN2jUQ-4i2xXmpJeJhSfvIhMfaghWy8VBC94QDIsLZoAvO-4rytqfbSQotTdgxX3LXx5n1aSeO3Lb3oj" },
                                { name: "Rohan Pandey", role: "Lead Engineer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc2MlmmycUjZMZqxFy5J0CSKma_K3W-EgQ_3L5qUZ8hVvrP7LfR-VfHu-Wma4jt73mRc8ecb0Ozf0gqpWTmiz_O5BEhsUv7wIUpsiKAsatk7pQ-euef7Z0JuoqobSJJve7vJCRwxeZgVDgkjzMgdzjTJGPpyirNs_-v0mRuhrxji6D9HURfNHu4pT6jdXbp-ZGRpG-d4Tk3dYS3zI0iRNq8VTVgWSVb7TgoXr-dkMuq-Mupbb-E2SxTnJuE-RGgfaYxuCVraaLeyxn" },
                                { name: "Nira Bajracharya", role: "Product Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAul7jUMlAsVwUahEyuzLZXx-KKySvs1GPkH32hHJTBny2mc4BPEs1OmMIVf9M-AL4LqNJDG18EouYHQXsRASM5AhUAXU9zrPdMnnFHpRr4_rCMdTx2idptneauB8e6aYSxIAhjZI3vgar4ay3DE88ZEzb4YNqeJO-o8zZXnHfA47CROb8wLbxdBLtnBNzhCJpw7tj4DFe-bwSLprD4A3QFTTUiYi3i9wEXYoQ9LhEI5O--BihuQRXvRLuh-NoLU36ocILePu5A9k2c" },
                            ].map((member, i) => (
                                <div key={i} className="min-w-[320px] snap-center bg-white brutalist-border brutalist-shadow p-8">
                                    <div className="aspect-square bg-cover bg-center grayscale border-4 border-black mb-8" style={{ backgroundImage: `url('${member.img}')` }}></div>
                                    <h4 className="text-2xl font-black mb-1">{member.name}</h4>
                                    <p className="text-primary bg-black inline-block px-2 py-1 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
                                    <div className="flex gap-6 border-t-2 border-black pt-6">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">terminal</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">database</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 grid-pattern opacity-50"></div>
                    <div className="max-w-[1400px] mx-auto bg-black text-white p-16 md:p-32 brutalist-border-lime brutalist-shadow relative z-10 text-center animate-on-scroll">
                        <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.8] uppercase">System Ready.<br />Initiate?</h2>
                        <p className="text-2xl md:text-3xl font-medium mb-16 max-w-4xl mx-auto text-primary uppercase tracking-tighter">Turn your vision into a global-scale digital product today.</p>
                        <button className="bg-primary text-black px-12 py-6 brutalist-border font-black text-2xl uppercase hover:scale-105 transition-all">
                            Contact_PocketSoft
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bg-black text-white border-t-4 border-primary py-24 px-6 md:px-12 animate-on-scroll">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="size-10 bg-primary brutalist-border flex items-center justify-center">
                                    <span className="material-symbols-outlined text-black font-black">terminal</span>
                                </div>
                                <h2 className="text-2xl font-black tracking-tighter">POCKETSOFT</h2>
                            </div>
                            <p className="text-lg opacity-80 leading-snug mb-10">
                                Premium software &amp; IT solutions. <br />Engineered in Kathmandu. <br />Deployed Globally.
                            </p>
                            <div className="flex gap-4">
                                {['share', 'hub', 'alternate_email'].map(icon => (
                                    <a key={icon} className="size-12 brutalist-border border-white flex items-center justify-center hover:bg-primary hover:text-black transition-all" href="#">
                                        <span className="material-symbols-outlined">{icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-black text-xl mb-10 border-b-2 border-primary pb-4">SERVICES_</h5>
                            <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
                                {['Software_Dev', 'AI_Integrations', 'UX_Systems', 'Cloud_Architecture'].map(item => (
                                    <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black text-xl mb-10 border-b-2 border-primary pb-4">COMPANY_</h5>
                            <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
                                {['Mission_Log', 'The_Architects', 'Careers', 'Secure_Contact'].map(item => (
                                    <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-black text-xl mb-10 border-b-2 border-primary pb-4">LOCATION_</h5>
                            <div className="flex items-start gap-4 mb-6">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <p className="font-bold uppercase tracking-tighter text-lg leading-tight">Kathmandu, Nepal <br /><span className="text-sm opacity-60">HQ Operations</span></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <p className="font-bold">HELLO@POCKETSOFT.COM</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
                        <p>© 2024 POCKETSOFT_CORE_SYSTEMS. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-12">
                            <a className="hover:text-white hover:opacity-100" href="#">Privacy_Protocol</a>
                            <a className="hover:text-white hover:opacity-100" href="#">Usage_Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
