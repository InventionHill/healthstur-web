"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function RefundPage() {
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
                                HOME &gt; REFUND POLICY
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
                            Refund Policy
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            At HEALTHSTUR, we aim to provide high-quality fitness and diet programs with clear and fair service terms. This Refund Policy explains how refunds are handled for our plans, coaching services, and digital programs when you purchase through our website or platform.
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
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Healthstur Refund & Cancellation Policy</h2>
                                <p className="leading-relaxed">
                                    <span className="font-bold">Applies To:</span> All digital services, wellness programs, subscriptions, consultations, and packages offered by Healthstur.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">General Refund Principles</h2>
                                <p className="leading-relaxed mb-4" >
                                    At <span className="font-bold">Healthstur,</span> we are committed to transparent, fair, and ethical business practices across the <span className="font-bold">EU, US, and India.</span>
                                </p>
                                <p className="leading-relaxed" >
                                    Because our services include digital content, personalized wellness programs, consultations, and subscription-based guidance, refunds are governed by the nature of service delivery and activation
                                </p>

                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Digital Programs & Online Services</h2>
                                <p className="leading-relaxed mb-4">
                                    Once a digital wellness program, diet plan, workout plan, or expert consultation has been:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Delivered</li>
                                    <li>Accessed</li>
                                    <li>Downloaded</li>
                                    <li>Or Activated</li>
                                </ul>
                                <p className="leading-relaxed">
                                    It is considered consumed, and refunds may not be available.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">EU Compliance (14-Day Right of Withdrawal)</h2>
                                <p className="leading-relaxed mb-4">
                                    For customers residing in the European Union:
                                </p>
                                <p className="leading-relaxed mb-4">
                                    You have the right to withdraw within 14 days of purchase unless:
                                </p>

                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>The service has already been fully delivered, OR</li>
                                    <li>You have explicitly consented to immediate service activation and acknowledged that your right of withdrawal is waived.</li>
                                </ul>
                                <p className="leading-relaxed">
                                    By purchasing and starting a Healthstur digital program, you agree to immediate service access.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Consultation & Coaching Services</h2>
                                <p className="leading-relaxed mb-4">
                                    For 1-on-1 coaching, expert consultations, or live sessions :
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Cancellations made 24 hours before the scheduled session are eligible for rescheduling.</li>
                                    <li>Cancellations within 24 hours may not be refundable.</li>
                                    <li>Missed sessions without notice are non-refundable.</li>
                                </ul>

                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Refund Eligibility Conditions</h2>
                                <p className="leading-relaxed mb-4">Refunds may be approved under the following circumstances:</p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>Duplicate payment</li>
                                    <li>Technical failure preventing access (verified)</li>
                                    <li>Incorrect billing</li>
                                    <li>Non-delivery of service due to internal error</li>
                                </ul>
                                <p className="leading-relaxed mb-4">Refunds are processed within:</p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li><span className="font-bold">EU:</span> 14 business days</li>
                                    <li><span className="font-bold">US:</span> 7–14 business days</li>
                                    <li><span className="font-bold">India:</span> 7–10 business days</li>
                                </ul>
                                <p className="leading-relaxed">Refunds are issued via the original payment method.</p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Non-Refundable Services</h2>
                                <p className="leading-relaxed mb-4">The following are non-refundable:</p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium">
                                    <li>Customized diet plans after delivery</li>
                                    <li>Personalized workout programs after access</li>
                                    <li>Downloaded wellness guides</li>
                                    <li>Completed consultation sessions</li>
                                    <li>Used subscription periods</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Chargebacks & Disputes</h2>
                                <p className="leading-relaxed mb-4">
                                    We encourage customers to contact us directly before initiating chargebacks.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    Unauthorized chargebacks may result in:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium">
                                    <li>Account suspension</li>
                                    <li>Restriction of future purchases</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Consumer Rights Notice</h2>
                                <p className="leading-relaxed mb-4">
                                    This Refund Policy does not override mandatory consumer protection rights under applicable laws in:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-lg text-black font-medium mb-6">
                                    <li>European Union Member States</li>
                                    <li>United States Federal & State laws</li>
                                    <li>India Consumer Protection Act, 2019</li>
                                </ul>
                                <p className="leading-relaxed">
                                    Where local law provides greater protection, such law will prevail.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Contact for Refund Requests</h2>
                                <p className="leading-relaxed mb-4">
                                    <span className="font-bold">Email:</span> care.healthstur@gmail.com
                                </p>
                                <p className="leading-relaxed mb-4">
                                    <span className="font-bold">Subject Line:</span> Refund Request – Order ID
                                </p>
                                <p className="leading-relaxed">
                                    <span className="font-bold">Response Time:</span> Within 3 Business Days
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