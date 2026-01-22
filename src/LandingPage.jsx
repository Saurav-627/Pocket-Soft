import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    useEffect(() => {
        // Global Scroll Animations
        // We ensure this runs after render to catch all child elements
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

        // Refresh ScrollTrigger to ensure positions are correct after layout changes
        ScrollTrigger.refresh();

        // Clean up ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Work />
                <Team />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
