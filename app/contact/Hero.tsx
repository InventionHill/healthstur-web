'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full min-w-full h-[70vh] min-h-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Contact_bg.jpg"
                    alt="About Background"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#02142d]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Breadcrumbs */}
                    <div className="mb-10">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
                            HOME &gt; CONTACT US
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                        Get in Touch With Our Experts
                    </h1>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-gray-200 text-base md:text-lg leading-relaxed font-light">
                        Have questions about workout plans or diet programs? Our expert team is ready to guide you with the right advice and personalized support for your fitness journey.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
