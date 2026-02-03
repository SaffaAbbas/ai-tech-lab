
import CTASection from "../components/CtaSection";
import Footer from "../components/Footer";
import ServiceHero from "../components/ServiceHero";
import ServiceHero2 from "../components/ServiceHero2";
import SuccessStories from "../components/SuccessStories";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
            <ServiceHero2
                badgeText="AI-Driven Product Discovery"
                title="Uncovering Opportunities, Streamlining Processes, and Staying Ahead"
                description="At GenAI Labs, we leverage AI to turn data into actionable insights, deeply analyzing your products, customer behaviors, and market trends. Our AI-driven discovery solutions reveal growth opportunities and process improvements, guiding you toward impactful innovations and strategic decisions."
                imageSrc="/product.png" />
            <WhatWeOffer
                services={[
                    {
                        title: "Comprehensive Data Analysis",
                        desc: "We start with a full audit of your data, examining customer behaviors, sales trends, and product metrics. Our AI-driven analysis identifies patterns and insights that reveal where you can make impactful changes, from feature enhancements to operational improvements.",
                        img: "/data.png",
                    },
                    {
                        title: "Market Trend Identification",
                        desc: "With AI-powered trend analysis, we help you stay ahead of market shifts. Our models analyze data from across your industry, highlighting emerging trends, competitive positioning, and new market segments ripe for exploration, so you can strategically expand or pivot your product lines.",
                        img: "/imarket.webp",
                    },
                    {
                        title: "Opportunity Mapping and Strategy Development",
                        desc: "Once we identify key insights, we map out new opportunities for growth and guide you through the strategic steps to capitalize on them. From refining existing offerings to creating innovative new products, we provide a clear roadmap that aligns with your business goals.",
                        img: "/maping.webp",
                    },
                    {
                        title: "Continuous Improvement & Process Optimization",
                        desc: "Our team focuses on maximizing your operational efficiency. We leverage AI to streamline processes, reduce bottlenecks, and optimize resources, ensuring that your products are delivered more efficiently and at higher quality.",
                        img: "/scaling.webp",
                    },
                ]} />
            <SuccessStories />
            <WhyChooseUs />
            <CTASection />
            <Footer />
        </>
    );
}
