import AIHero from "./components/AIHero";
import AIPrecision from "./components/AIPrecision";
import AIServices from "./components/AIServices";
import BusinessSection from "./components/BusinessSection";
import CTASection from "./components/CtaSection";
import Footer from "./components/Footer";
import GenAIHeroSection from "./components/GenAIHeroSection";
import GenerativeAISection from "./components/GenerativeAISection";
import Hero from "./components/Hero";
import CalendarSection from "./components/CalendarSection";
import TechSlider from "./components/TechSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <TechSlider />
      <AIServices />
      <AIHero />
      <AIPrecision />
      <GenerativeAISection />
      <BusinessSection />
      <GenAIHeroSection />
      <CalendarSection />
      <CTASection />
      <Footer />
    </>
  );
}
