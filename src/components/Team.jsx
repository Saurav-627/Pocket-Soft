import React, { useRef } from 'react';

const Team = () => {
    const scrollRef = useRef(null);

    const teamMembers = [
        { name: "Lekhnath Rijal", role: "Lead Engineer", img: "/default-avatar.png" },
        { name: "Sijal Shrestha", role: "QA Engineer", img: "/default-avatar.png" },
        { name: "Rabin Phaiju", role: "Fullstack Developer", img: "/default-avatar.png" },
        { name: "Shesan Rijal", role: "Logic Builder", img: "/default-avatar.png" },
        { name: "Saurav Luitel", role: "Frontend Developer", img: "/default-avatar.png" },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 px-6 md:px-12 bg-soft-gray overflow-hidden border-y-4 border-black" id="team">
            <div className="max-w-[1500px] mx-auto">
                <div className="text-center mb-12 animate-on-scroll">
                    <span className="tag-oversized mx-auto">Core Unit</span>
                    <h2 className="text-6xl font-black mt-6 uppercase">The Architects.</h2>
                </div>

                <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x mandatory no-scrollbar pb-8 animate-on-scroll scroll-smooth">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="min-w-[320px] md:min-w-[350px] snap-start bg-white brutalist-border brutalist-shadow p-8 shrink-0">
                            <div className="aspect-square bg-cover bg-center grayscale border-4 border-black mb-8" style={{ backgroundImage: `url('${member.img}')` }}></div>
                            <h4 className="text-2xl font-black mb-1">{member.name}</h4>
                            <p className="bg-industrial-gray text-black border border-black inline-block px-2 py-1 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
                            <div className="flex gap-6 border-t-2 border-black pt-6">
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary">terminal</span>
                                <span className="material-symbols-outlined cursor-pointer hover:text-primary">database</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 justify-center mt-4 animate-on-scroll">
                    <button onClick={() => scroll('left')} className="bg-white border-2 border-black p-2 hover:bg-black hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button onClick={() => scroll('right')} className="bg-white border-2 border-black p-2 hover:bg-black hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
