import CaseHero from "../components/CaseHero";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import SliderContact from "../components/SliderContact";



export default function Process() {
    return (
        <>
            <CaseHero
                badge="Contact Us"
                heading="Let's build this thing Together."
                description={null}
            />
            <ContactSection />
            <SliderContact />
            {/* <CalendarSection /> */}
            <CTASection
                title="Get Started Today"
                description="Ready to turn your AI vision into a tangible, impactful product? Reach out to us today, and let’s start building your custom machine learning solution."
                buttonText="Read Case Studies"
                buttonHref="/caseStudies"
            />
            <Footer />
        </>
    );
}
