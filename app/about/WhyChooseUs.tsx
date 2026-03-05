'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FileText, RefreshCw, Headset, Leaf, Users } from 'lucide-react';

const features = [
    {
        icon: FileText,
        text: "Personalized & Practical Plans"
    },
    {
        icon: RefreshCw,
        text: "Sustainable Lifestyle Changes"
    },
    {
        icon: Headset,
        text: "Expert Guidance & Support"
    },
    {
        icon: Leaf,
        text: "Focus on Natural Wellness"
    },
    {
        icon: Users,
        text: "For Busy Professionals & Families"
    }
];

const sliderImages = [
    "/About_img2.png",
    "/About_img3.png",
    "/About_img4.png",
    "/About_img5.png",
    "/About_img6.png",
    "/About_img7.png",
    "/About_img8.png",
];

export default function WhyChooseUs() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white pb-16 lg:pb-24 pt-6 lg:pt-8">
            <div className="container mx-auto ox-2 max-w-5xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

                    {/* Left Column - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex flex-col gap-8 h-auto lg:h-auto"
                    >
                        {/* Top Large Image Slider */}
                        <div className="w-full h-[300px] lg:h-auto lg:flex-[1.5] relative rounded-[20px] overflow-hidden">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={sliderImages[currentImageIndex]}
                                        alt="Healthy Lifestyle"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Bottom Two Images */}
                        <div className="flex gap-8 w-full h-[150px] lg:h-auto lg:flex-1">
                            <div className="flex-1 h-full relative rounded-[20px] overflow-hidden">
                                <Image
                                    src="/About_mini1.png"
                                    alt="Workout"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 h-full relative rounded-[20px] overflow-hidden">
                                <Image
                                    src="/About_mini2.png"
                                    alt="Healthy Ingredients"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="font-bold text-xl text-[#023051] mb-2 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#023051] leading-tight mb-8 lg:mb-10">
                            Building Stronger Bodies
                        </h2>

                        <div className="flex flex-col gap-5">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                                    className="flex items-center gap-4 p-4 border border-[#023051]/20 rounded-2xl hover:bg-slate-50 transition-colors bg-white shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#023051] flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-[#023051] font-bold text-lg sm:text-xl">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
