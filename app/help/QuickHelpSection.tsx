'use client';

import { motion } from 'framer-motion';
import { Dumbbell, UtensilsCrossed, BookOpen, User, Key, Headset } from 'lucide-react';

const helpTopics = [
    {
        icon: Dumbbell,
        title: "Workout Plans Help",
        description: "Learn how to follow your workout plan correctly with safety tips and guidance. Get clarity on sets, reps, rest time, and exercise form."
    },
    {
        icon: UtensilsCrossed,
        title: "Diet Plan Support",
        description: "Understand your diet chart, meal timing, substitutions, and portion sizes. Get help adapting your diet to your lifestyle and food preferences."
    },
    {
        icon: BookOpen,
        title: "Weight Loss Guidance",
        description: "Find answers related to fat loss, plateaus, calorie control, and safe progress. Learn how to stay consistent and get better results."
    },
    {
        icon: User, // Using User as generic muscle/person icon if Biceps is missing, or trying Biceps if available
        title: "Muscle Gain Support",
        description: "Get guidance on protein intake, strength training, recovery, and meal planning. Optimize your routine for lean muscle growth.",
        customIcon: true // Flag to maybe use SVG or different icon if needed
    },
    {
        icon: Key,
        title: "Program & Plan Access",
        description: "Help with accessing your plans, downloads, updates, and account features. Fix common login or plan visibility issues."
    },
    {
        icon: Headset,
        title: "Coach & Support Help",
        description: "Learn how to contact your coach and get personalized guidance. Understand support timelines and communication options."
    }
];

export default function QuickHelpSection() {
    return (
        <section className="py-10 md:py-18 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#023051] text-xl font-bold uppercase tracking-wider"
                    >
                        Help Center
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-[#023051]"
                    >
                        Quick Help
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {helpTopics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white hover:bg-[#023051] border border-[#023051]/20 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-[#023051] group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-[#023051] mb-6 group-hover:scale-110 transition-all duration-300">
                                <topic.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#023051] group-hover:text-white mb-4 transition-colors duration-300">
                                {topic.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-sm md:text-base font-medium transition-colors duration-300">
                                {topic.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
