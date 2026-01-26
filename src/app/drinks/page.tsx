'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Wine, Beer, Martini, Dices, ChevronDown, Flame } from "lucide-react"; // Added Flame icon for shooters

// Helper function to format names into consistent keys
const formatKey = (text: string) => {
    return text
        .toLowerCase()
        .normalize("NFD") // Normalize to decompose combined characters (e.g., é to e + ´)
        .replace(/[̀-ͯ]/g, "") // Remove diacritics
        .replace(/[^a-z0-9\s-]/g, "") // Remove all non-alphanumeric chars except spaces and hyphens
        .replace(/\s+/g, "_") // Replace spaces with underscores
        .replace(/-+/g, "_"); // Replace multiple hyphens with single underscore
};

// Mock Data for Cocktails
// In a real app this might come from a CMS or database
const COCKTAILS_DB = [
    // Créations
    { id: 'c1', name: "Mandorla Al Sole", tags: ["Sweet", "Fruity", "Strong"] },
    { id: 'c2', name: "Vegetal Idea", tags: ["Refreshing", "Fruity"] },
    { id: 'c3', name: "Back To Basil", tags: ["Refreshing", "Herbal"] },
    { id: 'c4', name: "Sweet Havana", tags: ["Sweet", "Fruity", "Exotic"] },
    { id: 'c5', name: "Pinky Pleasure", tags: ["Sweet", "Fruity", "Refreshing"] },
    { id: 'c6', name: "Agrumes Au Carré", tags: ["Fruity", "Spicy", "Refreshing"] },
    { id: 'c7', name: "Kumo Yuzu", tags: ["Floral", "Fruity", "Refreshing"] },
    { id: 'c8', name: "South Flavor", tags: ["Savory", "Spicy", "Strong"] },

    // Classiques
    { id: 'c9', name: "Mojito", tags: ["Refreshing", "Sweet", "Long Drink"] },
    { id: 'c10', name: "Caipirinha", tags: ["Strong", "Refreshing", "Fruity"] },
    { id: 'c11', name: "Maï Taï", tags: ["Strong", "Fruity", "Exotic"] },
    { id: 'c12', name: "Sex On The Beach", tags: ["Sweet", "Fruity", "Long Drink"] },
    { id: 'c13', name: "Margarita", tags: ["Strong", "Refreshing", "Sour"] },
    { id: 'c14', name: "Moscow Mule", tags: ["Refreshing", "Spicy", "Long Drink"] },
    { id: 'c15', name: "Long Island", tags: ["Very Strong", "Long Drink", "Complex"] },
    { id: 'c16', name: "Piña Colada", tags: ["Sweet", "Fruity", "Exotic"] },
    { id: 'c17', name: "Cosmopolitan", tags: ["Refreshing", "Fruity", "Sweet"] },
    { id: 'c18', name: "Spritz", tags: ["Refreshing", "Bitter", "Sparkling"] },
    { id: 'c19', name: "Pornstar Martini", tags: ["Sweet", "Fruity", "Sparkling"] },
    { id: 'c20', name: "Spritz St Germain", tags: ["Floral", "Refreshing", "Sparkling"] }
];

const BEERS = [
    { name: "Lager Blonde", price: "Demi (4) / Pinte (7,50)" },
    { name: "Alaryk Blonde", price: "Demi (4,50) / Pinte (8)" },
    { name: "Alaryk Blanche", price: "Demi (4,50) / Pinte (8)" },
    { name: "Alaryk IPA", price: "Demi (5) / Pinte (8,50)" },
    { name: "Guinness", price: "Demi (5) / Pinte (8,50)" }
];

const WINES = [
    { name: "Picpoul de Pinet (White)", desc: "Picpoul de Pinet (White)" },
    { name: "Chardonnay (White)", desc: "Chardonnay (White)" },
    { name: "Corbières AOP (Red)", desc: "Corbières AOP (Red)" },
    { name: "Merlot (Red)", desc: "Merlot (Red)" },
    { name: "Côtes de Provence (Rosé)", desc: "Côtes de Provence (Rosé)" },
    { name: "Gris de Gris (Rosé)", desc: "Gris de Gris (Rosé)" }
];

const SHOOTERS = [
    { id: 's1', name: "Le Fetch" },
    { id: 's2', name: "Baby Guinness" },
    { id: 's3', name: "Orgasme" },
    { id: 's4', name: "Kiss Cool" },
    { id: 's5', name: "Black Poet" },
    { id: 's6', name: "Madeleine (VENDU PAR 5 MINIMUM)" }
];

export default function DrinksPage() {
    const { t } = useLanguage();
    const [selectedMood, setSelectedMood] = useState("");
    const [gameResult, setGameResult] = useState<typeof COCKTAILS_DB[0] | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const moods = [
        "Sweet", "Spicy", "Refreshing", "Strong", "Shot", "Long Drink", "Fruity", "Herbal", "Exotic", "Floral", "Savory", "Sour", "Bitter", "Sparkling", "Very Strong", "Complex", "Surprise Me (Any)"
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
                                            {t(`drinks.cocktails.${formatKey(gameResult.name)}.name`)}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                            {t(`drinks.cocktails.${formatKey(gameResult.name)}.desc`)}
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
                                        {t(`drinks.cocktails.${formatKey(cocktail.name)}.name`)}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{t(`drinks.cocktails.${formatKey(cocktail.name)}.desc`)}</p>
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
                                        <span className="text-lg font-medium text-black">{t(`drinks.beerWine.${formatKey(beer.name)}.name`)}</span>
                                        {beer.price && <span className="text-sm text-gray-500 ml-2">{t(`drinks.beerWine.${formatKey(beer.name)}.price`)}</span>}
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
                                        <span className="text-lg font-medium text-black">{t(`drinks.beerWine.${formatKey(wine.name)}.name`)}</span>
                                        {wine.desc && <span className="text-sm text-gray-500 ml-2">{t(`drinks.beerWine.${formatKey(wine.name)}.desc`)}</span>}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Shooters Section - NEW */}
            <section className="py-24 bg-[var(--background-alt)]">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Flame className="text-[var(--accent)] mx-auto mb-6" size={48} />
                        <h2 className="text-4xl md:text-5xl font-serif text-[var(--accent)] mb-4">
                            {t('drinks.shooters.title')} {/* New translation key for shooters title */}
                        </h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SHOOTERS.map((shooter, idx) => (
                            <motion.div
                                key={shooter.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--accent)]/10 hover:border-[var(--accent)]/50 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-serif font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                                        {t(`drinks.shooters.${formatKey(shooter.name)}.name`)}
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{t(`drinks.shooters.${formatKey(shooter.name)}.desc`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
