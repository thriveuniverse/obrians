'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Beer, Leaf, Users, Sparkles } from "lucide-react";

export default function About() {
    const { t } = useLanguage();

    const teamMembers = [1, 2, 3, 4, 5, 6, 7];

    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero
                title={t('about.title')}
                video="/join-us.mp4"
            />

            {/* Meet the Team Grid */}
            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 !text-primary" style={{ color: 'var(--primary)' }}>
                            {t('about.subtitle')}
                        </h2>
                        <p className="text-xl text-gray-600 italic leading-relaxed">
                            {t('about.quote')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                className="rounded-3xl shadow-xl overflow-hidden flex flex-col"
                                style={{ background: 'var(--surface-light)', border: '1px solid var(--accent-dark)' }}
                            >
                                {/* Video Placeholder */}
                                <div className="aspect-[3/4] bg-black relative group cursor-pointer">
                                    <video
                                        className="w-full h-full object-cover"
                                        preload="metadata"
                                        loop
                                        playsInline
                                        controls
                                        poster={`/team/member-${member}-poster.jpg`} // Assuming posters might exist, else first frame
                                        onClick={(e) => {
                                            // Optional: toggle play/pause on click outside controls
                                            const video = e.currentTarget;
                                            if (video.paused) {
                                                video.play();
                                            } else {
                                                video.pause();
                                            }
                                        }}
                                    >
                                        <source src={`/team/member-${member}.mp4`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                        {t('about.memberLabel')} {member}
                                    </h3>
                                    <p className="text-gray-700 italic">
                                        {t('about.memberDesc')}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
