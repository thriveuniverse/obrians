'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Instagram, Trophy, Tv, Beer } from "lucide-react";

export default function Sports() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            <Hero
                title={t('sports.title')}
                video="/rc-narbonne.mp4"
            />

            {/* Intro Section */}
            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-serif font-normal text-primary mb-8 leading-tight !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                            {t('sports.intro')}
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Rugby Section */}
            <section className="py-24" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl font-serif font-bold text-primary mb-6 !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                                {t('sports.rugby.title')}
                            </h3>
                            <p className="text-lg text-black leading-relaxed !text-black" style={{ color: 'black' }}>
                                {t('sports.rugby.text')}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                                <img
                                    src="/rc-narbonne.jpeg"
                                    alt="RC Narbonne"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -translate-y-8">
                                <img
                                    src="/french-irish-6-nations.jpg"
                                    alt="Six Nations"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Football Section */}
            <section className="py-24" style={{ background: 'var(--surface-muted)' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1 grid grid-cols-2 gap-4"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                                <img
                                    src="/ligue-1.jpg"
                                    alt="Football Ligue 1"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transform -translate-y-8">
                                <img
                                    src="/uefa.png"
                                    alt="UEFA"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h3 className="text-4xl font-serif font-bold text-primary mb-6 !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                                {t('sports.football.title')}
                            </h3>
                            <p className="text-lg text-black leading-relaxed !text-black" style={{ color: 'black' }}>
                                {t('sports.football.text')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Other Sports & Booking */}
            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Tv className="text-accent mx-auto mb-6" size={48} />
                            <p className="text-xl text-black leading-relaxed mb-12 !text-black" style={{ color: 'black' }}>
                                {t('sports.otherSports.text')}
                            </p>

                            <div className="p-8 rounded-3xl border border-accent/30 bg-primary/5">
                                <h4 className="text-2xl font-serif font-bold text-primary mb-4 !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                                    Want to reserve a spot?
                                </h4>
                                <p className="text-lg text-black mb-0 !text-black" style={{ color: 'black' }}>
                                    {t('sports.otherSports.bookText')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="mailto:obriansirishpub11@gmail.com"
                            className="inline-flex items-center gap-3 bg-[var(--accent)] text-[var(--background)] px-8 py-4 rounded-full font-bold text-xl hover:bg-[var(--accent-bright)] transition-colors shadow-lg shadow-black/20"
                        >
                            <Mail size={24} />
                            {t('sports.cta.emailButton')}
                        </a>

                        <a
                            href="https://instagram.com/obrians_pub_narbonne"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex items-center justify-center gap-2 text-[var(--accent)] hover:text-white transition-colors"
                        >
                            <Instagram size={20} />
                            <span className="font-medium">{t('sports.cta.instaText')}</span>
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
