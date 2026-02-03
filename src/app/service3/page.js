
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStory3 from "../components/SuccessStory3";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="AI-Powered App and Web Development"
                title="Future-Proofing Your Digital Presence"
                description="At GenAI Labs, we specialize in making LLMs work for your business. Whether it’s designing an advanced chatbot system, automating routine workflows, or enhancing the way you engage with customers, our team of experts tailors every solution to your specific needs, ensuring that your AI investments drive real results."
                imageSrc="/Webai.png" />
            <WhatWeOffer
                services={[
                    {
                        title: "Strategy and Planning",
                        desc: "We start by working closely with you to understand your digital goals and requirements. From user experience to backend efficiency, our strategic planning sessions outline the best approach to bring your vision to life, translating your business objectives into a structured development roadmap.",
                        img: "/consult.webp",
                    },
                    {
                        title: "Custom AI Design and Prototyping",
                        desc: "With cutting-edge tools and methods, we build prototypes that illustrate how LLMs can enhance your operations. We craft user-friendly, responsive designs and construct model architectures tailored to your business, including pipeline setups for seamless data integration.",
                        img: "/design.jfif",
                    },
                    {
                        title: "End-to-End Development",
                        desc: "Our team handles the end-to-end development of your LLM solution, from training custom models to integrating APIs for smooth functionality within your platform. We rigorously test and fine-tune to ensure optimal accuracy, relevance, and scalability, delivering an AI that works seamlessly in real-world conditions.",
                        img: "development.webp",
                    },
                    {
                        title: "Deployment and Adaptations",
                        desc: "When your product is ready, we manage the deployment process, integrating it directly into your workflows. Our experience with cloud solutions ensures easy scalability to meet growing demands, while our adaptable architectures allow for easy expansion and enhancement.",
                        img: "/scaling.webp",
                    },
                    {
                        title: "Ongoing Support and Evolution",
                        desc: "We understand that LLMs thrive with ongoing improvements. Our support services include monitoring, regular updates, and optimizations to ensure that your AI remains reliable and up-to-date. We’re committed to a long-term partnership, keeping your AI solution effective as your business evolves.",
                        img: "support.webp",
                    },
                ]} />
            <SuccessStory3 />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
