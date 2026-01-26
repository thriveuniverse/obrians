'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const featureCards = [
    {
      title: t('drinks.title'),
      desc: t('home.cards.about.desc'), // You might want to update this description key later
      link: "/drinks",
      img: "/pumps.jpg"
    },
    {
      title: t('sports.title'),
      desc: t('home.cards.history.desc'), // Update desc key later
      link: "/sports",
      img: "/sports-at-obrians.jpg"
    },
    {
      title: t('gallery.title'),
      desc: t('home.cards.gallery.desc'),
      link: "/gallery",
      img: "/logo.jpg"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero
        title="" // Removed O'Brians Pub from Hero
        ctaText={t('home.cta')}
        ctaLink="/drinks"
        textColor="text-accent"
        image="https://images.unsplash.com/photo-1541546339599-ecdbf3773bc5?auto=format&fit=crop&q=80"
        video="/obrians-pub.mp4"
      />

      {/* New Heading for O'Brians Pub */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-serif font-bold text-[var(--primary)]">O'Brians Pub</h1>
      </section>

      {/* Welcome Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title text-center text-primary mb-8 !text-primary text-2xl" style={{ color: 'var(--primary)' }}>{t('home.introTitle')}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12 !text-primary" style={{ color: 'var(--primary)' }}>
                {t('home.introText')}
              </p>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24" style={{ background: 'var(--surface-light)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link
                  href={card.link}
                  className="group block relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border"
                  style={{ background: 'var(--surface)', borderColor: 'var(--accent-dark)' }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3 !text-primary" style={{ color: 'var(--primary)' }}>{card.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {card.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                      {t('home.discoverMore')} <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('home.galleryTeaser.title')}</h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                {t('home.galleryTeaser.text')}
              </p>
              <Link href="/gallery" className="btn-primary inline-flex items-center gap-3" style={{ background: 'var(--surface)', color: 'var(--primary)' }}>
                {t('home.galleryTeaser.cta')}
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl mt-12"
              >
                <img src="/gallery-Alex1.jpg" alt="Gallery" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="/gallery-food1.jpg" alt="Gallery" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <InstagramFeed />

      <Footer />
    </main>
  );
}
