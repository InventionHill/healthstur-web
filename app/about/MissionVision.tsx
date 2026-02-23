'use client';

import { motion } from 'framer-motion';

export default function MissionVision() {
    return (
        <section className="w-full bg-[#0B2136] py-18 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
                        Our Mission & Vision
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1D364F] rounded-[24px] p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center hover:bg-[#1D364F]/90 transition-colors"
                    >
                        <h3 className="text-2xl sm:text-[28px] font-bold text-white mb-6">
                            Our Mission
                        </h3>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light">
                            To make healthy living simple, achievable, and sustainable for everyone no matter how busy life gets.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#1D364F] rounded-[24px] p-8 sm:p-10 lg:p-12 text-center flex flex-col items-center justify-center hover:bg-[#1D364F]/90 transition-colors"
                    >
                        <h3 className="text-2xl sm:text-[28px] font-bold text-white mb-6">
                            Our Vision
                        </h3>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light">
                            To become a trusted wellness partner for individuals seeking natural, structured, and long-lasting health transformations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
