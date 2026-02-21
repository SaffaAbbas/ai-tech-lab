import AIHero from "./components/AIHero";
import AIPrecision from "./components/AIPrecision";
import AIServices from "./components/AIServices";
import BusinessSection from "./components/BusinessSection";
import CTASection from "./components/CtaSection";
import Footer from "./components/Footer";
import GenAIHeroSection from "./components/GenAIHeroSection";
import GenerativeAISection from "./components/GenerativeAISection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import TechSlider from "./components/TechSlider";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Slider /> */}
      <TechSlider />
      <AIServices />
      <AIHero />
      <AIPrecision />
      <GenerativeAISection />
      <BusinessSection />
      <GenAIHeroSection />
      <CTASection />
      <Footer />
    </>
  );
}
