'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle?: string;
    image?: string;
    video?: string;
    videoFit?: 'cover' | 'contain';
    bgColor?: string;
    textColor?: string;
    showGradient?: boolean;
    ctaText?: string;
    ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    image,
    video,
    videoFit = 'cover',
    bgColor,
    textColor = 'text-white',
    showGradient = true,
    ctaText,
    ctaLink
}) => {
    return (
        <section
            className={`relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden`}
            style={{ backgroundColor: bgColor || 'transparent' }}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-full h-full ${videoFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                        poster={image}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                )}
                {/* Premium Overlay - only if cover */}
                {videoFit === 'cover' && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                )}
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className={`text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 ${textColor} ${videoFit === 'cover' ? 'drop-shadow-2xl' : ''}`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`text-xl md:text-3xl font-light mb-12 max-w-3xl mx-auto italic ${textColor} opacity-90 ${videoFit === 'cover' ? 'drop-shadow-lg' : ''}`}>
                            {subtitle}
                        </p>
                    )}
                    {ctaText && ctaLink && (
                        <Link
                            href={ctaLink}
                            className={`inline-block px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-light transition-all transform hover:scale-105 hover:shadow-2xl active:scale-95 border border-white/20`}
                        >
                            {ctaText}
                        </Link>
                    )}
                </motion.div>
            </div>

            {/* Bottom transition gradient - now optional */}
            {showGradient && (
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#faf9f6]/80 to-transparent"></div>
            )}
        </section>
    );
};

export default Hero;
