'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Instagram, Facebook, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t('nav.drinks'), href: '/drinks' },
        { name: t('nav.history'), href: '/sports' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.gallery'), href: '/gallery' },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 shadow-md py-3" style={{ background: 'var(--background)' }}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 bg-white border border-white/20">
                        <img src="/logo.jpg" alt="O'Brians Pub Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-serif text-2xl font-bold" style={{ color: 'var(--accent)' }}>O'Brians Pub</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-medium transition-colors"
                            style={{ color: 'var(--accent-bright)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-bright)'}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            className="flex items-center gap-1 text-sm font-bold transition-colors"
                            style={{ color: 'var(--accent-bright)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-bright)'}
                        >
                            <Languages size={18} />
                            {language.toUpperCase()}
                        </button>
                        <div className="flex items-center gap-3 border-l pl-4" style={{ borderColor: 'var(--accent-dark)' }}>
                            <a href="https://www.instagram.com/obrians_pub_narbonne/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--accent-bright)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-bright)'}>
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/obrianspubnarbonne/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--accent-bright)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-bright)'}>
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                        className="font-bold"
                        style={{ color: 'var(--accent-bright)' }}
                    >
                        {language.toUpperCase()}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--accent-bright)' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t overflow-hidden"
                        style={{ background: 'var(--background-alt)', borderColor: 'var(--accent-dark)' }}
                    >
                        <div className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium p-2 transition-colors"
                                    style={{ color: 'var(--accent-bright)' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent-bright)'}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-6 p-2 pt-4 border-t" style={{ borderColor: 'var(--accent-dark)' }}>
                                <a href="https://www.instagram.com/ obrians_pub_narbonne/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)' }}>
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.facebook.com/obrianspubnarbonne/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)' }}>
                                    <Facebook size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
