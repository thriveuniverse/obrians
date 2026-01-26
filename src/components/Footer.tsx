'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="pt-16 pb-8" style={{ background: 'var(--background-deep)', color: 'var(--accent-bright)' }}>
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo and About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                                <img src="/logo.jpg" alt="O'Brians Pub Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-serif text-2xl font-bold" style={{ color: 'var(--accent)' }}>O'Brians Pub</span>
                        </div>
                        <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-light)' }}>
                            {t('home.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/obrians_pub_narbonne/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: 'var(--accent-dark)', color: 'var(--accent-bright)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--background)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-dark)'; e.currentTarget.style.color = 'var(--accent-bright)'; }}>
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/obrianspubnarbonne/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: 'var(--accent-dark)', color: 'var(--accent-bright)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--background)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-dark)'; e.currentTarget.style.color = 'var(--accent-bright)'; }}>
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6" style={{ color: 'var(--accent)' }}>{t('nav.home')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="transition-colors" style={{ color: 'var(--text-light)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>{t('nav.about')}</Link>
                            </li>
                            <li>
                                <Link href="/history" className="transition-colors" style={{ color: 'var(--text-light)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>{t('nav.history')}</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="transition-colors" style={{ color: 'var(--text-light)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>{t('nav.gallery')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3" style={{ color: 'var(--text-light)' }}>
                                <MapPin className="shrink-0 mt-1" size={20} />
                                <span>{t('footer.address')}</span>
                            </li>
                            <li>
                                <a href="tel:+33468916792" className="flex items-center gap-3 transition-colors" style={{ color: 'var(--text-light)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>
                                    <Phone size={20} />
                                    <span>04 68 75 96 57</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:obriansirishpub11@gmail.com" className="flex items-center gap-3 transition-colors" style={{ color: 'var(--text-light)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light)'}>
                                    <Mail size={20} />
                                    <span>obriansirishpub11@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm space-y-2" style={{ borderColor: 'var(--accent-dark)', color: 'var(--text-muted)' }}>
                    <p>
                        © {new Date().getFullYear()} O'Brians Pub. {t('footer.rights')}
                    </p>
                    <p className="text-xs">
                        Built by{' '}
                        <a
                            href="https://thethriveclan.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors underline underline-offset-4"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            The Thrive Clan
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
