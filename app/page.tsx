import Header from "./components/Header";
import Hero from "./components/Hero";
import CuratedTracks from "./components/CuratedTracks";
import WellnessJourney from "./components/WellnessJourney";
import PricingSection from "./components/PricingSection";
import CommunityStories from "./components/CommunityStories";
import FAQSection from "./components/FAQSection";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";
import { SmoothReveal } from "./components/SmoothReveal";


export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Header />
      <Hero />
      <div className="mt-0">
        <SmoothReveal delay={0.2}>
          <CuratedTracks />
        </SmoothReveal>
      </div>
      <SmoothReveal delay={0.1}>
        <WellnessJourney />
      </SmoothReveal>
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
        <FeedbackSection />
      </SmoothReveal>
      <Footer />
    </main>
  );
}
