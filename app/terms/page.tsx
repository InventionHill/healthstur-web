"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
    const [content, setContent] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPolicy = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
                const res = await fetch(`${API_URL}/terms-policy`);
                if (res.ok) {
                    const data = await res.json();
                    if (data) {
                        if (data.content) setContent(data.content);
                        if (data.title) setTitle(data.title);
                        if (data.description) setDescription(data.description);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch terms policy:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicy();
    }, []);

    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#023051] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 ">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
                                HOME &gt; TERMS & CONDITION
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
                            {title || "Terms & Condition"}
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            {description || "By using our website and fitness & diet services, you agree to the following terms and conditions. Please read them carefully before using our programs and content."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section Placeholder */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#023051]"></div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="prose prose-lg max-w-none text-black"
                        >
                            {content ? (
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                <p className="text-center text-gray-500">Terms and condition policy applies to all services. (Default policy content)</p>
                            )}
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}