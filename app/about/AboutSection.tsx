'use client';

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

                {/* 1. Top Left: Heading */}
                <div className="flex flex-col justify-center h-full order-1">
                    <span className="text-xl font-bold text-[#023051] mb-2 uppercase tracking-wide">
                        About Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black leading-tight text-[#023051]">
                        Building Stronger <br />
                        Bodies, Transforming
                        Lives Daily
                    </h2>
                </div>

                {/* 2. Top Right: Image (Vegetables & Dumbbells) */}
                <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[300px] rounded-[32px] overflow-hidden order-2">
                    <Image
                        src="/About_2.png"
                        alt="Healthy food and fitness equipment"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* 3. Bottom Left: Image (Flat lay) */}
                <div className="relative w-[90%] h-[300px] sm:h-[350px] lg:h-[400px] rounded-[32px] overflow-hidden order-3 lg:order-3">
                    <Image
                        src="/About_1.png"
                        alt="Fitness accessories and healthy snacks"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* 4. Bottom Right: Description */}
                <div className="flex flex-col justify-center h-full space-y-6 text-gray-700 text-lg leading-relaxed order-4 lg:order-4">
                    <p>
                        Healthstur is a modern health and wellness platform designed to help individuals build sustainable, healthy lifestyles in today’s fast-paced world. We believe health is not just about dieting or exercising it’s about creating balance between mind, body, and daily routine.
                    </p>
                    <p>
                        Founded with a vision to simplify wellness, Healthstur combines personalized nutrition, structured fitness, and lifestyle management to help people achieve long-term transformation naturally and practically.
                    </p>
                </div>
            </div>
        </section>
    );
}
