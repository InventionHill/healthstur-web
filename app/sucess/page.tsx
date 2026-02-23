"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { SmoothReveal } from "../components/SmoothReveal";
import Hero from "./Hero";
import SuccessStoriesSection from "./SuccessStoriesSection";
import FounderQuoteSection from "./FounderQuoteSection";
import StartYourJourneySection from "./StartYourJourneySection";

export default function HelpPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <SuccessStoriesSection />
            <FounderQuoteSection />
            <StartYourJourneySection />
            <SmoothReveal delay={0.1}>
                <Footer />
            </SmoothReveal>
        </main>
    );
}