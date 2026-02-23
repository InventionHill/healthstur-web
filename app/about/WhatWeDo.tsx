'use client';

import { motion } from 'framer-motion';

const services = [
    "Personalized Diet & Nutrition Plans",
    "Weight Loss & Fat Loss Programs",
    "Muscle Gain Nutrition",
    "3-Meal Vegetarian Diet Plans",
    "PCOS/PCOD Natural Management",
    "Menopause Wellness Support",
    "Postnatal Fitness & Nutrition",
    "Lifestyle Coaching & Habit Building"
];

export default function WhatWeDo() {
    return (
        <section className="w-full bg-white py-18 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#023051] tracking-tight">
                        What We Do
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1D364F] rounded-full py-4 px-6 sm:px-8 flex items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow cursor-default"
                        >
                            <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                                {service}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
