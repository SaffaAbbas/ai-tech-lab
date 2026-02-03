
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero from "../components/ServiceHero";
import SuccessStories from "../components/SuccessStories";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero />
            <WhatWeOffer />
            <SuccessStories />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
