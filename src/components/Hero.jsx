import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const AnimatedGrid = () => {
    const gridRef = useRef(null);
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const updateGrid = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const blockSize = 40;
            const cols = Math.ceil(width / blockSize);
            const rows = Math.ceil(height / blockSize);

            const colors = ["#30d527", "#666666"];
            const newBlocks = [];
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    newBlocks.push({
                        id: `${i}-${j}`,
                        x: i * blockSize,
                        y: j * blockSize,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        col: i,
                        row: j
                    });
                }
            }
            setBlocks(newBlocks);
        };

        updateGrid();
        window.addEventListener('resize', updateGrid);
        return () => window.removeEventListener('resize', updateGrid);
    }, []);

    useEffect(() => {
        if (blocks.length === 0) return;

        const ctx = gsap.context(() => {
            const handleMouseMove = (e) => {
                const rect = gridRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const col = Math.floor(x / 40);
                const row = Math.floor(y / 40);

                const el = gridRef.current.querySelector(`.block-${col}-${row}`);
                if (el) {
                    gsap.to(el, {
                        opacity: 0.7,
                        duration: 0.1,
                        overwrite: 'auto',
                        onComplete: () => {
                            gsap.to(el, {
                                opacity: 0,
                                duration: 0.8,
                                delay: 0.1
                            });
                        }
                    });
                }
            };

            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, gridRef);

        return () => ctx.revert();
    }, [blocks]);

    return (
        <div ref={gridRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <svg width="100%" height="100%" className="absolute inset-0">
                {blocks.map((block) => (
                    <rect
                        key={block.id}
                        x={block.x}
                        y={block.y}
                        width="39"
                        height="39"
                        fill={block.color}
                        className={`grid-block block-${block.col}-${block.row} opacity-0`}
                    />
                ))}
            </svg>
        </div>
    );
};

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
        <section className="relative bg-white pt-12 pb-32 px-6 md:px-12 grid-pattern border-b-4 border-deep-gray overflow-hidden">
            <AnimatedGrid />
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                <div className="lg:col-span-7 flex flex-col gap-10 animate-on-scroll">
                    <div>
                        <span className="tag-oversized mb-4">Nepal Based // Global Scale</span>
                        <h1 className="text-4xl md:text-5xl font-black leading-[0.9] mt-3 uppercase tracking-tighter">
                            Building <span ref={wordRef} className="bg-primary px-4 inline-block min-w-[200px] text-black">Powerful</span> <br /> Digital Systems.
                        </h1>
                    </div>
                    <p className="text-2xl font-medium max-w-2xl leading-tight border-l-8 border-primary pl-6">
                        POCKETSOFT engineers high-performance software. We don't just build apps; we architect the digital future with brutal precision.
                    </p>
                    <div className="flex flex-wrap gap-6 text-black">
                        <a href="#" className="bg-black text-white px-10 py-5 border-[4px] border-primary brutalist-shadow-lime text-xl font-bold uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            Initiate Project
                        </a>
                        <a href="#work" className="bg-white text-black px-10 py-5 brutalist-border brutalist-shadow text-xl font-bold uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-industrial-gray transition-all">
                            View Projects
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-5 relative animate-on-scroll">
                    <div className="absolute -inset-0 bg-primary -z-10 translate-x-4 translate-y-4 shadow-[0_0_20px_rgba(48,213,39,0.3)]"></div>
                    <div className="brutalist-border overflow-hidden bg-industrial-gray">
                        <div className="w-full aspect-[4/3] bg-center bg-cover"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4qKk-68XJA2liySrJ04WXxjvXiWIWbjQVpHk-zZK4z1g4298BIRms0gZYGIENA3BWrsmf9qLakFFDEmjYngnmN6HLj6bxx1xXhAnesHfS4B1COdptq-WbTIOojzLrJtT467-Gt5uRU5vk2oH4-noqf1NI0Isd1WUZPp_W3c0Nf3mleGY8XIYs7Hgcf9fdgSryV_yoiXpZj7wBhJCqDt7mX3oedPmgeEc8USl4XbPLgQawD0g43JOMNZAYk0uEepQnFwGfMc3jjo1w')" }}></div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-white border-4 border-primary p-8 brutalist-shadow">
                        <p className="text-5xl font-black text-black"><span ref={countRef}>0</span>+</p>
                        <p className="text-xs font-bold uppercase tracking-widest mt-2">Successful Deployments</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
