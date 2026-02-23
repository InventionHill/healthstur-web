'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FounderQuoteSection() {
    return (
        <section className="py-8 md:py-18 bg-[#023051]"> {/* Dark blue background */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#023051]">
                        <Quote className="w-8 h-8 fill-current" />
                    </div>
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug mb-8"
                >
                    "Every transformation reinforces why Healthstur exists to make healthy living practical, sustainable, and empowering."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-white/20">
                        {/* Placeholder image, should be Atit Mehta */}
                        <Image
                            src="/Sucess2.svg"
                            alt="Atit Mehta"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <cite className="not-italic">
                        <div className="text-xl font-bold text-white mb-1">
                            Atit Mehta
                        </div>
                        <div className="text-gray-300 font-medium text-sm tracking-wide">
                            Founder & Chief Healthstur
                        </div>
                    </cite>
                </motion.div>
            </div>
        </section>
    );
}
