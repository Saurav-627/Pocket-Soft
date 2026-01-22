import React from 'react';

const Header = () => {
    const menuItems = ['About', 'Services', 'Work', 'Team'];

    return (
        <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-12 py-4">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <a href="#">
                        <img src="/logo.png" alt="PocketSoft Logo" className="h-14 w-auto object-contain" />
                    </a>
                </div>
                <nav className="hidden md:flex items-center gap-12">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            className="text-md font-bold uppercase hover:bg-primary px-2 py-1 transition-colors"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <button className="bg-primary px-8 py-3 brutalist-border brutalist-shadow-sm font-bold uppercase text-md hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    Start Project
                </button>
            </div>
        </header>
    );
};

export default Header;
