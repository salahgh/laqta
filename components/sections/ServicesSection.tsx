import { ArrowRight, ChartColumnBig, Film, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Badge } from "@/components/ui/Badge";

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
            <div className="bg-primary flex flex-col p-4 md:pt-32">
                {/* Header - Centered */}
                <div className="text-center flex flex-col items-center mb-20 mt-8 ">
                    <Badge variant="default">{badge}</Badge>

                    <p className={"text-white md:text-[56px] text-display-md "}>
                        Our Services
                    </p>

                    <p className="text-body-sm md:text-display-xs text-secondary-gray mt-8 md:max-w-4xl">
                        {description}
                    </p>
                </div>

                {/*/!* Services Grid - Exact spacing *!/*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center  md:px-20">
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
                <div className="text-center flex items-center justify-center md:mt-20 mt-8 pb-16 md:pb-32">
                    <div className={"md:h-16 h-12"}>
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
