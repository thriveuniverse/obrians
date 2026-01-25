'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, Beer, Martini, Dices, ChevronDown } from "lucide-react";

// Mock Data for Cocktails
// In a real app this might come from a CMS or database
const COCKTAILS_DB = [
    { id: 'c1', name: "Espresso Martini", tags: ["Sweet", "Strong", "Long Drink"], desc: "Vodka, Kahlua, Espresso" },
    { id: 'c2', name: "Spicy Margarita", tags: ["Spicy", "Strong", "Refreshing"], desc: "Tequila, Lime, Jalapeño, Cointreau" },
    { id: 'c3', name: "Mojito", tags: ["Refreshing", "Sweet", "Long Drink"], desc: "Rum, Lime, Mint, Soda, Sugar" },
    { id: 'c4', name: "Old Fashioned", tags: ["Strong", "Sweet"], desc: "Bourbon, Angostura Bitters, Sugar Cube" },
    { id: 'c5', name: "B-52", tags: ["Sweet", "Shot"], desc: "Kahlua, Bailey's, Grand Marnier" },
    { id: 'c6', name: "Moscow Mule", tags: ["Refreshing", "Long Drink"], desc: "Vodka, Ginger Beer, Lime" },
    { id: 'c7', name: "Bloody Mary", tags: ["Spicy", "Long Drink"], desc: "Vodka, Tomato Juice, Spices, Celery" },
    { id: 'c8', name: "Irish Coffee", tags: ["Sweet", "Strong", "Hot"], desc: "Irish Whiskey, Coffee, Cream, Sugar" },
    { id: 'c9', name: "Tequila Sunrise", tags: ["Sweet", "Refreshing", "Long Drink"], desc: "Tequila, Orange Juice, Grenadine" },
    { id: 'c10', name: "Jägerbomb", tags: ["Strong", "Shot"], desc: "Jägermeister, Energy Drink" }
];

const BEERS = [
    "Guinness (Stout)", "Kilkenny (Red Ale)", "Hop House 13 (Lager)",
    "Grimbergen (Blonde)", "La Bête (Amber)", "Magners (Cider)", "Local Craft IPA"
];

const WINES = [
    "Picpoul de Pinet (White)", "Chardonnay (White)",
    "Corbières AOP (Red)", "Merlot (Red)",
    "Côtes de Provence (Rosé)", "Gris de Gris (Rosé)"
];

export default function DrinksPage() {
    const { t } = useLanguage();
    const [selectedMood, setSelectedMood] = useState("");
    const [gameResult, setGameResult] = useState<typeof COCKTAILS_DB[0] | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const moods = [
        "Sweet", "Spicy", "Refreshing", "Strong", "Shot", "Long Drink", "Surprise Me (Any)"
    ];

    const playGame = () => {
        if (!selectedMood) return;

        setIsSpinning(true);
        setGameResult(null);

        // Simulate thinking/spinning
        setTimeout(() => {
            let candidates = COCKTAILS_DB;
            if (selectedMood !== "Surprise Me (Any)") {
                candidates = COCKTAILS_DB.filter(c => c.tags.includes(selectedMood));
            }

            // Fallback if no match (shouldn't happen with good data, but good safety)
            if (candidates.length === 0) candidates = COCKTAILS_DB;

            const randomPick = candidates[Math.floor(Math.random() * candidates.length)];
            setGameResult(randomPick);
            setIsSpinning(false);
        }, 800);
    };

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            <Hero
                title={t('drinks.title')}
                video="/drinks.mp4" // Reusing welcome video for now
            />

            {/* Cocktail Game Section */}
            <section className="py-20 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--background)] p-8 md:p-12 rounded-[2rem] shadow-2xl border border-[var(--accent)]/30"
                        >
                            <Dices className="text-[var(--accent)] mx-auto mb-6" size={56} />
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--primary)] mb-4">
                                {t('drinks.game.title')}
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 italic">
                                {t('drinks.game.subtitle')}
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
                                <label className="text-xl font-medium text-[var(--accent)]">
                                    {t('drinks.game.label')}
                                </label>
                                <div className="relative w-64">
                                    <select
                                        value={selectedMood}
                                        onChange={(e) => setSelectedMood(e.target.value)}
                                        className="w-full appearance-none bg-[var(--surface-light)] border border-[var(--accent)] text-[var(--primary)] py-3 px-6 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-center cursor-pointer"
                                    >
                                        <option value="" disabled>Select a vibe...</option>
                                        {moods.map(mood => (
                                            <option key={mood} value={mood}>
                                                {t(`drinks.game.options.${mood}`) || mood}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--primary)] pointer-events-none" size={20} />
                                </div>
                            </div>

                            <button
                                onClick={playGame}
                                disabled={!selectedMood || isSpinning}
                                className="btn-primary w-full md:w-auto min-w-[200px] text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all"
                            >
                                {isSpinning ? "Consulting the Spirits..." : t('drinks.game.button')}
                            </button>

                            {/* Result Display */}
                            <AnimatePresence mode='wait'>
                                {gameResult && !isSpinning && (
                                    <motion.div
                                        key={gameResult.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="mt-12 pt-10 border-t border-[var(--accent)]/20"
                                    >
                                        <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-bold mb-4">
                                            {t('drinks.game.result')}
                                        </p>
                                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] mb-4">
                                            {gameResult.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                            {gameResult.desc}
                                        </p>
                                        <div className="flex gap-2 justify-center mt-6">
                                            {gameResult.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-[var(--surface-light)] text-[var(--primary)] text-xs rounded-full font-bold uppercase tracking-wide">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cocktail Menu Section */}
            <section className="py-24 bg-[var(--background-alt)]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Martini className="text-[var(--accent)] mx-auto mb-6" size={48} />
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--accent)] mb-4">
                            {t('drinks.cocktails.title')}
                        </h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COCKTAILS_DB.map((cocktail, idx) => (
                            <motion.div
                                key={cocktail.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/50 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                                        {cocktail.name}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{cocktail.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beer & Wine Section */}
            <section className="py-24" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                        {/* Beer Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-[var(--primary)] rounded-full text-white">
                                    <Beer size={32} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-[var(--primary)] !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                                    {t('drinks.beerWine.beerTitle')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {BEERS.map((beer, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 bg-[var(--surface)] rounded-xl border border-[var(--accent-dark)]/20 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                                        <span className="text-lg font-medium text-black">{beer}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Wine Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-[var(--accent-dark)] rounded-full text-white">
                                    <Wine size={32} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-[var(--primary)] !text-primary !text-shadow-none" style={{ color: 'var(--primary)', textShadow: 'none' }}>
                                    {t('drinks.beerWine.wineTitle')}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {WINES.map((wine, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 bg-[var(--surface)] rounded-xl border border-[var(--accent-dark)]/20 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-[var(--accent-dark)]"></div>
                                        <span className="text-lg font-medium text-black">{wine}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
