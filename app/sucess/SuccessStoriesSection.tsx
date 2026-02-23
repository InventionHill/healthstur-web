'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const categories = ["All", "Weight Loss", "PCOS", "Muscle & Strength", "Weight Gain", "Busy Professionals", "Thyroid"];

const stories = [
    {
        id: 1,
        image: "/Sucess1.svg",
        name: "Rohan Mehra",
        category: "Weight Loss",
        quote: "Lost 12 kg without starving myself.",
        achievements: [
            "-12kg in 4 Months",
            "Better Sleep",
            "High Energy"
        ],
        shift: "Replaced late-night snacking with protein-rich dinners."
    },
    {
        id: 2,
        image: "/Sucess2.svg",
        name: "Vikram Singh",
        category: "Muscle & Strength",
        quote: "I feel strong again.",
        achievements: [
            "Lean Muscle Growth",
            "Posture Corrected",
            "Confidence Shift"
        ],
        shift: "Switched from cardio focus to 4-day strength split."
    },
    {
        id: 3,
        image: "/Sucess3.svg",
        name: "Anjali Sharma",
        category: "PCOS/Hormone", // Matches PCOS filter essentially
        quote: "I finally understand my body. No more crash dieting.",
        achievements: [
            "Cycle Regulated",
            "Lost 8kg",
            "Clear Skin"
        ],
        shift: "Switched from cardio focus to 4-day strength split."
    },
    {
        id: 4,
        image: "/Sucess4.svg",
        name: "Sara Jensen",
        category: "Busy Professionals",
        quote: "A busy CEO reclaiming energy in 90 days.",
        achievements: [
            "Productivity Up 30%",
            "Improved Blood Work",
            "Stress Control"
        ],
        shift: "Implemented the 20-20-20 corporate wellness rule."
    }
];

export default function SuccessStoriesSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredStories = selectedCategory === "All"
        ? stories
        : stories.filter(story => {
            if (selectedCategory === "PCOS" && story.category === "PCOS/Hormone") return true;
            return story.category === selectedCategory;
        });

    return (
        <section className="pb-16 md:pb-24 pt-10 md:pt-18 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header and Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#023051] leading-tight mb-4">
                            Choose Your <br /> Path
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 justify-start lg:justify-end max-w-3xl"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${selectedCategory === category
                                    ? "bg-[#023051] text-white border-[#023051]"
                                    : "bg-white text-[#023051] border-[#023051] hover:bg-[#023051]/5"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredStories.map((story) => (
                            <motion.div
                                key={story.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 md:h-72 w-full">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-4 left-4 text-white">
                                        <span className="bg-[#023051]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                                            {story.category}
                                        </span>
                                        <h3 className="text-xl font-bold">{story.name}</h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <h4 className="text-lg md:text-xl font-bold text-[#023051] mb-6 leading-snug">
                                        "{story.quote}"
                                    </h4>

                                    <div className="space-y-3 mb-8 flex-1">
                                        {story.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 min-w-[20px]">
                                                    <CheckCircle2 className="w-5 h-5 text-[#023051]" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm md:text-base">
                                                    {achievement}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                            The Healthstur Shift
                                        </p>
                                        <p className="text-sm text-black leading-relaxed">
                                            "{story.shift}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
