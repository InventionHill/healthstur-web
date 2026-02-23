'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Jennifer Wu",
        role: "YOGA ENTHUSIAST",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        quote: "I've tried every app out there. FITNESSTUR is the only one that actually looks at my whole lifestyle, not just my calories.",
        stars: 5,
    },
    {
        name: "Michael Ross",
        role: "BUSY DAD",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        quote: "The 15-minute home workouts saved my dad bod. I can actually keep up with my kids now without getting winded.",
        stars: 5,
    },
    {
        name: "Amara Patel",
        role: "CORPORATE PROFESSIONAL",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        quote: "The stress management tools are a game changer. I use the breathing exercises before every big meeting.",
        stars: 5,
    },
    {
        name: "David Kim",
        role: "MARATHON RUNNER",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        quote: "The nutrition plans are spot on. I'm hitting PRs comfortably now. Who knew I wasn't eating enough?",
        stars: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "TRANSFORMATION WINNER",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        quote: "Lost 20lbs in 3 months safely. The coaches don't just give you a plan, they give you the mindset to stick to it.",
        stars: 5,
    },
    {
        name: "James Wilson",
        role: "POWERLIFTER",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
        quote: "Finally, a platform that respects strength training. The progressive overload tracking is elite.",
        stars: 5,
    },
    {
        name: "Emily Chen",
        role: "POST-NATAL MOM",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
        quote: "Gentle, safe, and effective. Helped me reconnect with my core after pregnancy without fear.",
        stars: 5,
    },
    {
        name: "Marcus Johnson",
        role: "CROSSFIT ATHLETE",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        quote: "The community challenges push me harder. Seeing others crush their goals makes me want to crush mine.",
        stars: 5,
    }
];

// Duplicate for marquee effect
const marqueeTestimonials = [...testimonials, ...testimonials];

import { motion } from 'framer-motion';

// ... (imports remain)

export default function CommunityStories() {
    return (
        <section className="pb-12 md:pb-24 pt-12 md:pt-18 bg-[#023051] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase opacity-80">COMMUNITY STORIES</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Don't Just Take Our Word For It.
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Wrapper */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative w-full flex flex-col gap-8 marquee-container"
            >
                {/* Gradient Masks for fading edges */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#023051] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#023051] to-transparent z-10 pointer-events-none" />

                {/* Top Row - Scroll Left */}
                <div className="flex overflow-hidden">
                    <div
                        className="flex gap-6 md:gap-8 pl-4 animate-scroll"
                        style={{ width: "max-content" }}
                    >
                        {marqueeTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Scroll Right (using reverse animation for variety if needed, or just left with offset) */}
                {/* Rolling left again but with offset or different speed if desired. 
                    Let's continue scrolling LEFT as per previous code, just maybe offset/slower.
                    Actually, let's use the animate-scroll-reverse I added to globals for variety. 
                */}
                <div className="flex overflow-hidden">
                    <div
                        className="flex gap-6 md:gap-8 pl-4 animate-scroll-reverse"
                        style={{ width: "max-content" }}
                    >
                        {/* Reverse the list so it looks different */}
                        {[...marqueeTestimonials].reverse().map((testimonial, index) => (
                            <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#00284D]/60 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-3xl hover:bg-[#00284D] transition-colors duration-300 cursor-pointer">
            {/* Header: Avatar + Info + Stars */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full border border-white/10"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm md:text-base leading-tight">{testimonial.name}</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wider uppercase mt-1">
                            {testimonial.role}
                        </p>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                    ))}
                </div>
            </div>

            {/* Quote */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed italic opacity-90">
                "{testimonial.quote}"
            </p>
        </div>
    );
}
