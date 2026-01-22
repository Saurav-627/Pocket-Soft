import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const wordRef = useRef(null);
    const countRef = useRef(null);
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

        // Counter Animation
        const counter = { val: 0 };
        gsap.to(counter, {
            val: 50,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: countRef.current,
                start: "top 95%",
                toggleActions: "play none none none"
            },
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = Math.ceil(counter.val);
                }
            }
        });

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-white pt-12 pb-32 px-6 md:px-12 grid-pattern border-b-4 border-black">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col gap-10 animate-on-scroll">
                    <div>
                        <span className="tag-oversized mb-4">Nepal Based // Global Scale</span>
                        <h1 className="text-4xl md:text-5xl font-black leading-[0.9] mt-3">
                            Building <span ref={wordRef} className="bg-primary px-4 inline-block min-w-[200px]">Powerful</span> <br /> Digital Systems.
                        </h1>
                    </div>
                    <p className="text-2xl font-medium max-w-2xl leading-tight border-l-8 border-primary pl-6">
                        POCKETSOFT engineers high-performance software. We don't just build apps; we architect the digital future with brutal precision.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a href="#" className="bg-black text-white px-10 py-5 brutalist-border-lime brutalist-shadow-lime text-xl font-bold uppercase hover:scale-[1.02] transition-transform">
                            Initiate Project
                        </a>
                        <a href="#work" className="bg-white text-black px-10 py-5 brutalist-border brutalist-shadow text-xl font-bold uppercase hover:scale-[1.02] transition-transform">
                            View Projects
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-5 relative animate-on-scroll">
                    <div className="absolute -inset-4 bg-primary brutalist-border -z-10 translate-x-4 translate-y-4"></div>
                    <div className="brutalist-border overflow-hidden bg-industrial-gray">
                        <div className="w-full aspect-[4/3] bg-center bg-cover"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4qKk-68XJA2liySrJ04WXxjvXiWIWbjQVpHk-zZK4z1g4298BIRms0gZYGIENA3BWrsmf9qLakFFDEmjYngnmN6HLj6bxx1xXhAnesHfS4B1COdptq-WbTIOojzLrJtT467-Gt5uRU5vk2oH4-noqf1NI0Isd1WUZPp_W3c0Nf3mleGY8XIYs7Hgcf9fdgSryV_yoiXpZj7wBhJCqDt7mX3oedPmgeEc8USl4XbPLgQawD0g43JOMNZAYk0uEepQnFwGfMc3jjo1w')" }}></div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-white brutalist-border p-8 brutalist-shadow">
                        <p className="text-5xl font-black text-black"><span ref={countRef}>0</span>+</p>
                        <p className="text-xs font-bold uppercase tracking-widest mt-2">Successful Deployments</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
