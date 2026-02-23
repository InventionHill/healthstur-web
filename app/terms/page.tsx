"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
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
                            Terms & Condition
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            By using our website and fitness & diet services, you agree to the following terms and conditions. Please read them carefully before using our programs and content.
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
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Acceptance of Terms</h2>
                                <p className="leading-relaxed mb-4">
                                    By accessing, purchasing, or using services provided by Healthstur (“Company,” “we,” “us,” or “our”), you agree to these Terms & Conditions.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    If you do not agree, please discontinue use immediately.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    These Terms apply globally, including users located in the European Union, United States, and India.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    Healthstur provides:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-6">
                                    <li>Digital wellness programs</li>
                                    <li>Diet & nutrition plans</li>
                                    <li>Workout and fitness guidance</li>
                                    <li>Corporate wellness programs</li>
                                    <li>Women’s health programs</li>
                                    <li>Yoga, meditation & lifestyle coaching</li>
                                    <li>Health-specific wellness support (non-medical)</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Healthstur provides <span className="font-semibold">educational and lifestyle guidance only.</span>
                                </p>
                                <p className="leading-relaxed mb-4">
                                    We do NOT:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-6">
                                    <li>Provide medical diagnosis</li>
                                    <li>Prescribe medication</li>
                                    <li>Replace licensed medical treatment</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Always consult a qualified healthcare provider before beginning any program.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Eligibility</h2>
                                <p className="leading-relaxed mb-4">
                                    You must:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-6">
                                    <li>Be at least 18 years old</li>
                                    <li>Provide accurate information</li>
                                    <li>Have legal capacity to enter contracts</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    If under 18, parental/guardian consent is required.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">User Responsibilities</h2>
                                <p className="leading-relaxed mb-4">
                                    You agree to:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-6">
                                    <li>Provide accurate health information</li>
                                    <li>Follow programs responsibly</li>
                                    <li>Seek medical advice when needed</li>
                                    <li>Not misuse, copy, resell, or distribute our content</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Health outcomes vary based on individual effort, lifestyle, and compliance.
                                </p>

                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Payments & Billing</h2>
                                <p className="leading-relaxed mb-4">
                                    All prices are displayed clearly before purchase.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    By purchasing, you agree:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-6">
                                    <li>To pay all applicable fees</li>
                                    <li>To recurring billing if subscribing</li>
                                    <li>That taxes may apply based on your country</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Failure to pay may result in service suspension.
                                </p>

                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Refunds & Cancellation</h2>

                                <p className="leading-relaxed mb-4">
                                    Refunds are governed by our separate <span className="text-black font-bold">Refund Policy.</span>
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>All prices are listed clearly on the website</li>
                                    <li>Fees must be paid in advance for paid plans</li>
                                    <li>Prices may change without prior notice</li>
                                    <li>Taxes may apply where required</li>
                                </ul>
                                <h4 className="text-xl md:text-xl font-semibold  text-black mb-4">EU Users:</h4>
                                <p className="leading-relaxed mb-4">
                                    You may have a 14-day withdrawal right unless you consent to immediate digital service delivery.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    By activating digital services immediately, you acknowledge waiver of withdrawal rights where legally applicable.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Health Disclaimer</h2>
                                <p className="leading-relaxed mb-4">
                                    Healthstur programs:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Are not medical treatment</li>
                                    <li>Do not guarantee specific results</li>
                                    <li>Are not intended to diagnose, treat, cure, or prevent disease</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    You assume full responsibility for:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Your participation</li>
                                    <li>Your health decisions</li>
                                    <li>Any outcomes resulting from implementation</li>

                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Limitation of Liability</h2>
                                <p className="leading-relaxed mb-4">
                                    Healthstur shall not be liable for:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Indirect or consequential damages</li>
                                    <li>Loss of income or business</li>
                                    <li>Injuries arising from improper exercise execution</li>
                                    <li>Allergic reactions or health complications</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Nothing in these Terms limits liability where prohibited by law (including EU consumer protections).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Intellectual Property</h2>
                                <p className="leading-relaxed mb-4">
                                    All content including:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Programs</li>
                                    <li>PDFs</li>
                                    <li>Videos</li>
                                    <li>Branding</li>
                                    <li>Website content</li>
                                </ul>
                                <p className="leading-relaxed mb-4 font-semibold">
                                    Is the exclusive property of Healthstur.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    You may not:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Copy</li>
                                    <li>Resell</li>
                                    <li>Modify</li>
                                    <li>Redistribute</li>
                                    <li>Reverse engineer</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Unauthorized use may result in legal action.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Account Suspension</h2>
                                <p className="leading-relaxed mb-4">
                                    We may suspend or terminate accounts if:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Fraudulent activity occurs</li>
                                    <li>Terms are violated</li>
                                    <li>Payment disputes are abusive</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Privacy & Data Protection</h2>
                                <p className="leading-relaxed mb-4">
                                    Healthstur processes personal data in accordance with:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>GDPR (EU)</li>
                                    <li>CCPA/US privacy standards</li>
                                    <li>India IT Act & DPDP Act</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Please refer to our Privacy Policy for full details.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Force Majeure</h2>
                                <p className="leading-relaxed mb-4">
                                    We are not liable for delays or failures due to:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>Pandemic events</li>
                                </ul>
                                <p className="leading-relaxed mb-4">
                                    Unless otherwise required by mandatory consumer protection law:
                                </p>
                                <p className="leading-relaxed mb-4">
                                    These Terms are governed by the laws of India.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    For EU consumers, mandatory local consumer rights remain unaffected.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    For US consumers, applicable state and federal laws apply.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Dispute Resolution</h2>
                                <p className="leading-relaxed mb-4">
                                    We encourage amicable resolution first.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    If unresolved:
                                </p>
                                <ul className="list-disc pl-4 space-y-3 marker:text-black marker:text-xl text-black font-medium mb-4">
                                    <li>India: Arbitration under Indian Arbitration & Conciliation Act</li>
                                    <li>US: Arbitration or small claims court (where applicable)</li>
                                    <li>EU: Access to EU Online Dispute Resolution platform</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Modifications to Terms</h2>
                                <p className="leading-relaxed mb-4">
                                    We may update these Terms at any time.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    Updated versions will be posted on our website with revised effective dates.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    Continued use constitutes acceptance.
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