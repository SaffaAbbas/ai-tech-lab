
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStory2 from "../components/SuccessStory2";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="Large-Language-Model & GPT Integration"
                title="Transforming Conversations and Automating Workflows"
                description="At GenAI Labs, we specialize in making LLMs work for your business. Whether it’s designing an advanced chatbot system, automating routine workflows, or enhancing the way you engage with customers, our team of experts tailors every solution to your specific needs, ensuring that your AI investments drive real results."
                imageSrc="/openai.jfif"
            />
            <WhatWeOffer
                services={[
                    {
                        title: "Discovery and Strategy",
                        desc: "We begin by understanding your business goals, challenges, and user needs. Through strategic discovery sessions, we identify the most effective applications of LLMs for your industry. We’ll work with you to set achievable goals, map key performance metrics, and create a project roadmap that aligns with your objectives.",
                        img: "/consult.webp",
                    },
                    {
                        title: "Custom AI Design and Prototyping",
                        desc: "With cutting-edge tools and methods, we build prototypes that illustrate how LLMs can enhance your operations. We craft user-friendly, responsive designs and construct model architectures tailored to your business, including pipeline setups for seamless data integration.",
                        img: "/design.jfif",
                    },
                    {
                        title: "Development and Optimization",
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
            <SuccessStory2 />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
