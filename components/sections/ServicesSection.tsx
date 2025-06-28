import { ArrowRight, ChartColumnBig, Film, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";

// Main Services Section Component - Exact replica
export const ServicesSection = ({
    badge = "What we offer",
    description = "At LAQTA, we deliver video content that performs. Whether you're launching a campaign, telling your brand story, or creating cinematic visuals we've got you covered.",
    buttonText = "Go to services",
    services = [],
    className = "",
}) => {
    const defaultServices = [
        {
            title: "Strategic Content Plan",
            description:
                "A 3-month roadmap for your brand. LEQTA designs a complete content strategy with clear guidelines tailored to your brand and goals.",
            tags: ["Lift", "Messaging", "Content roadmap", "Growth"],
            gradientFrom: "#10111e",
            gradientTo: "#DAA520",
            icon: <ChartColumnBig style={{ color: "white" }} />,
        },
        {
            title: "ready to publish.",
            description:
                "We create high-quality video content with multiple marketing angles, each with its own script.",
            tags: ["Strategy", "Publishing", "Production", "Reporting"],
            gradientFrom: "#10111e",
            gradientTo: "#43708b",
            icon: <Rocket style={{ color: "white" }} />,
        },
        {
            title: "End-to-End Content Marketing",
            description:
                "From idea to performance, Leqta handles your 6+ month content marketing strategy, creation, publishing, and optimization, all under one roof.",
            tags: ["Shooting", "Editing", "Motion graphics", "Delivery"],
            gradientFrom: "#080e19",
            gradientTo: "#d63a8a",
            icon: <Film style={{ color: "white" }} />,
        },
    ];

    const servicesToRender = services.length > 0 ? services : defaultServices;

    return (
        <section>
            <div
                className="bg-primary flex flex-col gap-10"
                style={{
                    height: 1226,
                    paddingTop: 188,
                    paddingBottom: 188,
                    paddingLeft: 140,
                    paddingRight: 140,
                }}
            >
                {/* Header - Centered */}
                <div className="text-center flex items-center flex-col mb-20">
                    <div
                        className="mb-8 border rounded-full px-6 py-2 font-semibold text-body-xl flex items-center justify-center"
                        style={{
                            color: "#54B3F1",
                            borderColor: "#54B3F1",
                            height: 56,
                        }}
                    >
                        {badge}
                    </div>

                    <p className={"text-white"} style={{ fontSize: 56 }}>
                        Our Services
                    </p>

                    <p className="" style={{ color: "#C6BBBB", fontSize: 24 }}>
                        {description}
                    </p>
                </div>

                {/*/!* Services Grid - Exact spacing *!/*/}
                <div
                    className="grid lg:grid-cols-3 gap-14 mb-20 justify-center items-center"
                    style={{ width: 1296, height: 447 }}
                >
                    {servicesToRender.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            tags={service.tags}
                            gradientFrom={service.gradientFrom}
                            gradientTo={service.gradientTo}
                            icon={service.icon}
                        />
                    ))}
                </div>

                {/*/!* CTA Button - Centered *!/*/}
                <div className="text-center flex items-center justify-center">
                    <div className={"h-16"}>
                        <Button
                            variant="primary"
                            size="lg"
                            rightIcon={<ArrowRight className="w-5 h-5" />}
                            className="shadow-lg"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Exact Screen Replica
export default function ExactServicesScreen() {
    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "linear-gradient(180deg, #F8F9FA 0%, #E9ECEF 30%, #6C757D 70%, #343A40 100%)",
            }}
        >
            <ServicesSection />
        </div>
    );
}
