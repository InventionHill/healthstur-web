"use client";

import CommunityStories from "../../components/CommunityStories";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PricingSection from "../../components/PricingSection";
import { SmoothReveal } from "../../components/SmoothReveal";
import DietSolutions from "./DietSolutions";

import Hero from "./Hero";

export default function ProgramsPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <DietSolutions />
            <SmoothReveal delay={0.1}>
                <PricingSection />
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
                <CommunityStories />
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
                <FAQSection />
            </SmoothReveal>
            <SmoothReveal delay={0.1}>
                <Footer />
            </SmoothReveal>
        </main>
    );
}