"use client";

import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SmoothReveal } from "../components/SmoothReveal";
import Hero from "./Home";
import QuickHelpSection from "./QuickHelpSection";
import ContactStrip from "./ContactStrip";
import FeedbackSection from "../components/FeedbackSection";

export default function HelpPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <QuickHelpSection />
            <ContactStrip />
            <SmoothReveal delay={0.1}>
                <FAQSection />
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
                <FeedbackSection />
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
                <Footer />
            </SmoothReveal>
        </main>
    );
}