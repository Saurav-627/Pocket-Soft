import React, { useState } from 'react';
import ContactModal from './ContactModal';

const CallToAction = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <section className="py-6 md:py-8 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-50"></div>
                <div className="max-w-[1400px] mx-auto bg-industrial-gray text-black p-8 md:p-16 lg:p-32 brutalist-border-lime brutalist-shadow relative z-10 text-center animate-on-scroll">
                    <h2 className="text-3xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 lg:mb-10 leading-[0.8] uppercase">System Ready.<br />Initiate?</h2>
                    <p className="text-lg md:text-2xl lg:text-3xl font-medium mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto text-black uppercase tracking-tighter">Turn your vision into a global-scale digital product today.</p>
                    <button
                        onClick={openModal}
                        className="bg-primary text-black px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 brutalist-border brutalist-shadow font-black text-lg md:text-xl lg:text-2xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        Contact PocketSoft
                    </button>
                </div>
            </section>

            {/* Contact Modal */}
            <ContactModal isOpen={modalOpen} onClose={closeModal} />
        </>
    );
};

export default CallToAction;
