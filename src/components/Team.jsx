import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Team.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Description = ({ text }) => {
    const [expanded, setExpanded] = React.useState(false);
    const limit = 120;

    if (text.length <= limit) return <p>{text}</p>;

    return (
        <p>
            {expanded ? text : `${text.substring(0, limit)}...`}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setExpanded(!expanded);
                }}
                className="ml-1 text-primary font-bold hover:underline cursor-pointer lowercase"
            >
                {expanded ? ' (less)' : ' and more'}
            </button>
        </p>
    );
};

const SocialLinks = ({ social }) => {
    if (!social) return null;

    const icons = {
        github: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        email: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    };

    return (
        <div className="flex gap-2 border-t-2 border-deep-gray pt-3">
            {Object.keys(social).map((key) => {
                if (!social[key] || !icons[key]) return null;
                return (
                    <a
                        key={key}
                        href={social[key]}
                        target={key === 'email' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center border-2 border-deep-gray hover:bg-primary brutalist-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        aria-label={key}
                    >
                        {icons[key]}
                    </a>
                );
            })}
        </div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: "Lekhnath Rijal",
            role: "Lead Engineer",
            img: "/default-avatar.png",
            description: "Lead Engineer passionate about architecting scalable solutions with precision and innovation, leading the team with technical excellence and strategic vision.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:lekhnath@pocketsoft.com"
            }
        },
        {
            name: "Sijal Shrestha",
            role: "QA Engineer",
            img: "/default-avatar.png",
            description: "QA Engineer focused on ensuring software quality through rigorous testing and reliable automation frameworks.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:sijal@pocketsoft.com"
            }
        },
        {
            name: "Rabin Phaiju",
            role: "Fullstack Developer",
            img: "/default-avatar.png",
            description: "Fullstack Developer passionate about crafting seamless experiences from frontend to backend, mastering the full spectrum of modern web development and mobile app development.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:rabin@pocketsoft.com"
            }
        },
        {
            name: "Shesan Rijal",
            role: "Logic Builder",
            img: "/default-avatar.png",
            description: "Logic Builder passionate about designing complex algorithms and system architectures, transforming business requirements into elegant code.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:shesan@pocketsoft.com"
            }
        },
        {
            name: "Saurav Luitel",
            role: "Frontend Developer",
            img: "/default-avatar.png",
            description: "Frontend Developer passionate about creating visually stunning, pixel-perfect interfaces and turning design concepts into interactive experiences using modern frameworks.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:saurav@pocketsoft.com"
            }
        },
        {
            name: "Kavesh Dhungana",
            role: "Marketing Head",
            img: "/default-avatar.png",
            description: "Marketing Head at PocketSoft, shaping growth strategies through data-backed marketing decisions, global market outreach, strategic partnerships, and high-value project sourcing to strengthen international market presence and drive sustainable revenue growth.",
            social: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:kavesh@pocketsoft.com"
            }
        },
    ];

    return (
        <section className="py-8 px-6 md:px-12 bg-soft-gray overflow-hidden border-y-4 border-deep-gray relative" id="team">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-6 animate-on-scroll">
                    <span className="tag-oversized mx-auto">Core Unit</span>
                    <h2 className="text-3xl md:text-5xl font-black mt-4 uppercase">The Architects.</h2>
                    <p className="mt-3 text-base max-w-2xl mx-auto font-medium">Meet the brilliant minds behind PocketSoft's innovation</p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        nextEl: '.team-next',
                        prevEl: '.team-prev',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.team-pagination'
                    }}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    centeredSlides={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    className="team-swiper mt-3 pb-5"
                >
                    {teamMembers.map((member, i) => (
                        <SwiperSlide key={i}>
                            <div className="team-card group bg-white brutalist-border brutalist-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 h-full">
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="border-b-4 border-deep-gray w-full h-[300px]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h4 className="text-lg font-black mb-1.5 uppercase tracking-tight">{member.name}</h4>

                                    {/* Role Badge */}
                                    <div className="mb-3">
                                        <span className="bg-industrial-gray text-black border-2 border-deep-gray inline-block px-2 py-1 text-sm font-bold uppercase tracking-widest">
                                            {member.role}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-3">
                                        <div className="text-md leading-relaxed text-gray-700 font-medium border-l-2 border-primary pl-2">
                                            <Description text={member.description} />
                                        </div>
                                    </div>

                                    {/* Social Media Icons */}
                                    <SocialLinks social={member.social} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation and Pagination */}
                <div className="custom-navigation flex justify-center items-center mt-6">
                    <button className="team-prev bg-white border-4 border-deep-gray p-3 hover:bg-primary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none brutalist-shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                            <path d="M11 1L1 11L11 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="team-pagination flex justify-center items-center mx-6"></div>
                    <button className="team-next bg-white border-4 border-deep-gray p-3 hover:bg-primary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none brutalist-shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                            <path d="M1 21L11 11L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
