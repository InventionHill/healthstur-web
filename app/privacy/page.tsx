"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                                HOME &gt; PRIVACY POLICY
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            At HEALTHSTUR we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and fitness & diet services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section Placeholder */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg max-w-none text-black"
                    >
                        <div className="space-y-10">
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Introduction</h2>
                                <p className="leading-relaxed mb-4">
                                    Healthstur respects your privacy and is committed to protecting your personal data in accordance with:
                                </p>
                                <ul className="list-disc pl-4 space-y-4 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li><span className="flex items-center"><img src="https://flagcdn.com/w40/eu.png" alt="EU Flag" className="w-6 h-4 inline-block mr-2 rounded-sm align-middle" /> General Data Protection Regulation (GDPR)</span></li>
                                    <li><span className="flex items-center"><img src="https://flagcdn.com/w40/us.png" alt="US Flag" className="w-6 h-4 inline-block mr-2 rounded-sm align-middle" /> California Consumer Privacy Act (CCPA/CPRA)</span></li>
                                    <li><span className="flex items-center"><img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-4 inline-block mr-2 rounded-sm align-middle" /> Digital Personal Data Protection Act (DPDP), 2023</span></li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    By using our services, you consent to this Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Data We Collect</h2>
                                <p className="leading-relaxed mb-4" >
                                    We may collect:
                                </p>
                                <p className="leading-relaxed mb-4 font-bold" >
                                    Personal Information
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Phone number</li>
                                    <li>Billing information</li>
                                </ul>
                                <p className="leading-relaxed mb-4 font-bold" >
                                    Health & Lifestyle Data
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Age, weight, height</li>
                                    <li>Medical history (voluntarily provided)</li>
                                    <li>Fitness goals</li>
                                    <li>Dietary preferences</li>
                                </ul>
                                <p className="leading-relaxed mb-4 font-bold" >
                                    Technical Data
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>IP address</li>
                                    <li>Device information</li>
                                    <li>Cookies & analytics data</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Lawful Basis for Processing (GDPR)</h2>
                                <p className="leading-relaxed mb-4">
                                    We process data based on:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Consent</li>
                                    <li>Contractual necessity</li>
                                    <li>Legal obligation</li>
                                    <li>Legitimate interests</li>
                                </ul>
                                <p className="leading-relaxed">
                                    For health-related data, we rely on <span className="font-bold">explicit consent.</span>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">How We Use Your Data</h2>
                                <p className="leading-relaxed mb-4">
                                    We use data to:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Deliver wellness programs</li>
                                    <li>Personalize diet/workout plans</li>
                                    <li>Process payments</li>
                                    <li>Improve platform performance</li>
                                    <li>Send service communications</li>
                                </ul>
                                <p className="leading-relaxed">
                                    We do NOT sell personal data.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">CCPA Rights (California Residents)</h2>
                                <p className="leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Know what personal data we collect</li>
                                    <li>Request deletion</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Opt-out of data sharing</li>
                                    <li>Non-discrimination for exercising rights</li>
                                </ul>
                                <p className="leading-relaxed">
                                    Submit requests to: <span className="font-bold">care.healthstur@gmail.com</span>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">GDPR Rights (EU Residents)</h2>
                                <p className="leading-relaxed mb-4" >You have the right to:</p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Access</li>
                                    <li>Rectification</li>
                                    <li>Erasure (“Right to be Forgotten”)</li>
                                    <li>Restrict processing</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent</li>
                                </ul>
                                <p className="leading-relaxed">Complaints may be lodged with your local Data Protection Authority.</p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">India DPDP Rights</h2>
                                <p className="leading-relaxed mb-4">You have the right to:</p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium">
                                    <li>Access your data</li>
                                    <li>Correct inaccuracies</li>
                                    <li>Withdraw consent</li>
                                    <li>Request grievance redressal</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Data Retention</h2>
                                <p className="leading-relaxed mb-4">
                                    We retain data only as long as necessary for:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium">
                                    <li>Service delivery</li>
                                    <li>Legal compliance</li>
                                    <li>Dispute resolution</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Security Measures</h2>
                                <p className="leading-relaxed mb-4">
                                    We implement:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Encrypted payment processing</li>
                                    <li>Access controls</li>
                                    <li>Secure hosting environments</li>
                                </ul>
                                <p className="leading-relaxed">
                                    However, no system is 100% secure.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">International Data Transfers</h2>
                                <p className="leading-relaxed">
                                    If you access Healthstur from outside India, your data may be transferred internationally in compliance with GDPR safeguards.
                                </p>

                            </section>
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Cookies Policy</h2>
                                <p className="leading-relaxed mb-4">
                                    We use cookies for:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Website functionality</li>
                                    <li>Analytics</li>
                                    <li>Performance tracking</li>
                                </ul>
                                <p className="leading-relaxed">
                                    Users can manage cookies via browser settings.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Updates to This Policy</h2>
                                <p className="leading-relaxed">
                                    We may update this Privacy Policy periodically. Continued use constitutes acceptance.
                                </p>

                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}