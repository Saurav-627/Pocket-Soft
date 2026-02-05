import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Set app element for accessibility
if (typeof window !== 'undefined') {
    Modal.setAppElement('#root');
}

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        customProjectType: '',
        budget: '',
        customBudget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you soon.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            customProjectType: '',
            budget: '',
            customBudget: '',
            timeline: '',
            message: ''
        });

        setIsSubmitting(false);
        onClose();
    };

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        },
        content: {
            position: 'relative',
            inset: 'auto',
            border: '4px solid #666666',
            background: '#FFFFFF',
            overflow: 'auto',
            borderRadius: '0',
            outline: 'none',
            padding: '0',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            boxShadow: '8px 8px 0px 0px #666666'
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Contact Form"
            closeTimeoutMS={200}
        >
            <div className="bg-white">
                {/* Header */}
                <div className="bg-primary border-b-4 border-black p-4 md:p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase">Initiate Project</h2>
                        <p className="text-sm md:text-base font-bold mt-1">Let's build something extraordinary together</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="size-10 md:size-12 flex items-center justify-center bg-black text-white hover:bg-deep-gray transition-colors border-2 border-black"
                        aria-label="Close modal"
                    >
                        <span className="text-2xl font-bold">×</span>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Name */}
                        <div className="md:col-span-2">
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="Full Name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="Your Email Address"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="+977 9800000000"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                placeholder="Your Company"
                            />
                        </div>

                        {/* Project Type */}
                        <div className={formData.projectType === 'custom' ? 'md:col-span-1' : ''}>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Project Type *
                            </label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium bg-white"
                            >
                                <option value="">Select Type</option>
                                <option value="web-app">Web Application</option>
                                <option value="mobile-app">Mobile Application</option>
                                <option value="ai-integration">AI Integration</option>
                                <option value="cloud-infrastructure">Cloud Infrastructure</option>
                                <option value="consulting">Technical Consulting</option>
                                <option value="custom">Custom / Other</option>
                            </select>
                        </div>

                        {formData.projectType === 'custom' && (
                            <div>
                                <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                    Specify Project Type *
                                </label>
                                <input
                                    type="text"
                                    name="customProjectType"
                                    value={formData.customProjectType || ''}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                    placeholder="Software System..."
                                />
                            </div>
                        )}

                        {/* Budget */}
                        <div className={formData.budget === 'custom' ? 'md:col-span-1' : ''}>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Budget Range
                            </label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium bg-white"
                            >
                                <option value="">Select Budget</option>
                                <option value="5k-10k">$5,000 - $10,000</option>
                                <option value="10k-25k">$10,000 - $25,000</option>
                                <option value="25k-50k">$25,000 - $50,000</option>
                                <option value="50k+">$50,000+</option>
                                <option value="custom">Custom Range</option>
                            </select>
                        </div>

                        {formData.budget === 'custom' && (
                            <div>
                                <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                    Specify Budget *
                                </label>
                                <input
                                    type="text"
                                    name="customBudget"
                                    value={formData.customBudget || ''}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium"
                                    placeholder="e.g. $15,000 - $20,000"
                                />
                            </div>
                        )}

                        {/* Timeline */}
                        <div>
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Timeline
                            </label>
                            <select
                                name="timeline"
                                value={formData.timeline}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium bg-white"
                            >
                                <option value="">Select Timeline</option>
                                <option value="urgent">Urgent (1-2 months)</option>
                                <option value="normal">Normal (3-6 months)</option>
                                <option value="flexible">Flexible (6+ months)</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block font-bold uppercase text-xs md:text-sm mb-2 tracking-wider">
                                Project Details *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:border-primary transition-colors font-medium resize-none"
                                placeholder="Tell us about your project, goals, and requirements..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-primary text-black px-8 py-4 border-4 border-black brutalist-shadow font-black uppercase text-base md:text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="sm:w-auto bg-white text-black px-8 py-4 border-4 border-black brutalist-shadow font-black uppercase text-base md:text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Info */}
                    <div className="mt-6 p-4 bg-soft-gray border-l-4 border-primary">
                        <p className="text-xs md:text-sm font-bold uppercase mb-2">What Happens Next?</p>
                        <ul className="text-xs md:text-sm space-y-1 font-medium">
                            <li>• We'll review your project details within 24 hours</li>
                            <li>• Our team will schedule a discovery call with you</li>
                            <li>• You'll receive a detailed proposal and timeline</li>
                        </ul>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ContactModal;
