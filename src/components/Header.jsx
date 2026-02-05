import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const menuItems = ['About', 'Services', 'Work', 'Team'];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
        closeMobileMenu();
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 lg:px-12 py-3 md:py-4">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                        <a href="#">
                            <img src="/logo.png" alt="PocketSoft Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-12">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                className="text-sm lg:text-md font-bold uppercase hover:bg-primary px-2 py-1 transition-colors"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <button
                        onClick={openModal}
                        className="hidden md:block bg-primary px-4 lg:px-8 py-2 lg:py-3 brutalist-border brutalist-shadow-sm font-bold uppercase text-sm lg:text-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        Start Project
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 top-[73px] bg-white border-t-4 border-black transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col p-6 gap-4">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                className="text-lg font-bold uppercase hover:bg-primary px-4 py-3 transition-colors brutalist-border brutalist-shadow-sm"
                                href={`#${item.toLowerCase()}`}
                                onClick={closeMobileMenu}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={openModal}
                            className="bg-primary px-6 py-4 brutalist-border brutalist-shadow font-bold uppercase text-md mt-4"
                        >
                            Start Project
                        </button>
                    </nav>
                </div>
            </header>

            {/* Contact Modal */}
            <ContactModal isOpen={modalOpen} onClose={closeModal} />
        </>
    );
};

export default Header;
