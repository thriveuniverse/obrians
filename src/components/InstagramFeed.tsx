'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
    const { t } = useLanguage();

    // TEMPORARILY COMMENTED OUT FOR LATER USE
    /*
    const BEHOLD_ID = ""; // Paste Behold ID here
    */

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <Instagram size={32} className="text-primary" />
                        </div>
                        <h2 className="section-title mb-4 !text-primary" style={{ color: 'var(--primary)' }}>{t('home.instaTitle')}</h2>
                        <p className="text-gray-600 mb-8 italic">
                            {t('home.instaText')}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://www.instagram.com/obrians_pub_narbonne/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <Instagram size={20} />
                            {t('home.instaFollow')}
                        </a>
                        <a
                            href="https://www.facebook.com/obrianspubnarbonne/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline inline-flex items-center gap-2"
                        >
                            {t('home.instaFacebook')}
                        </a>
                    </div>

                    {/* Placeholder for future feed */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-20 pointer-events-none">
                        <div className="aspect-square bg-gray-200 rounded-2xl"></div>
                        <div className="aspect-square bg-gray-200 rounded-2xl"></div>
                        <div className="aspect-square bg-gray-200 rounded-2xl hidden md:block"></div>
                        <div className="aspect-square bg-gray-200 rounded-2xl hidden md:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
