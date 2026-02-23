"use client";

import AboutSection from "./AboutSection";
import MissionVision from "./MissionVision";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChooseUs";

import FAQSection from "../components/FAQSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SmoothReveal } from "../components/SmoothReveal";
import WellnessJourney from "../components/WellnessJourney";
import Hero from "./Hero";

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <SmoothReveal delay={0.1}>
                <AboutSection />
            </SmoothReveal>
            <MissionVision />
            <WhatWeDo />
            <WhyChooseUs />
            <SmoothReveal delay={0.1}>
                <WellnessJourney />
            </SmoothReveal>
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