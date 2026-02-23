"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { SmoothReveal } from "../components/SmoothReveal";
import StartYourJourneySection from "../sucess/StartYourJourneySection";
import Hero from "./Hero";
import WellnessStepsSection from "./WellnessStepsSection";
import LifestyleShiftSection from "./LifestyleShiftSection";

export default function WellnessPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <WellnessStepsSection />
            <LifestyleShiftSection />
            <StartYourJourneySection />
            <SmoothReveal delay={0.1}>
                <Footer />
            </SmoothReveal>
        </main>
    );
}