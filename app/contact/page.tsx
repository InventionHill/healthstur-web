"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { SmoothReveal } from "../components/SmoothReveal";
import Hero from "./Hero";
import ContactFormSection from "./ContactFormSection";
import MapSection from "./MapSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Header />
            <Hero />
            <ContactFormSection />
            <MapSection />

            <SmoothReveal delay={0.1}>
                <Footer />
            </SmoothReveal>
        </main>
    );
}