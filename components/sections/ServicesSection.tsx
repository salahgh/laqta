import { ArrowRight } from 'lucide-react';
import {Button} from "@/components/ui/Button";
import {ServiceCard} from "@/components/ui/ServiceCard";


// Main Services Section Component - Exact replica
export const ServicesSection = ({
                             badge = "What we offer",
                             description = "At LAQTA, we deliver video content that performs. Whether you're launching a campaign, telling your brand story, or creating cinematic visuals we've got you covered.",
                             buttonText = "Go to services",
                             services = [],
                             className = ""
                         }) => {
    const defaultServices = [
        {
            title: "Strategic Content Plan",
            description: "A 3-month roadmap for your brand. LEQTA designs a complete content strategy with clear guidelines tailored to your brand and goals.",
            tags: ["Lift", "Messaging", "Content roadmap", "Growth"],
            gradientFrom: "#B8860B",
            gradientTo: "#DAA520"
        },
        {
            title: "ready to publish.",
            description: "We create high-quality video content with multiple marketing angles, each with its own script.",
            tags: ["Strategy", "Publishing", "Production", "Reporting"],
            gradientFrom: "#2E86AB",
            gradientTo: "#A23B72"
        },
        {
            title: "End-to-End Content Marketing",
            description: "From idea to performance, Leqta handles your 6+ month content marketing strategy, creation, publishing, and optimization, all under one roof.",
            tags: ["Shooting", "Editing", "Motion graphics", "Delivery"],
            gradientFrom: "#D63384",
            gradientTo: "#6F42C1"
        }
    ];

    const servicesToRender = services.length > 0 ? services : defaultServices;

    return (
        <section className={`py-24 ${className}`} style={{
            background: 'linear-gradient(180deg, #F8F9FA 0%, #E9ECEF 50%, #495057 100%)'
        }}>
            <div className="max-w-7xl mx-auto px-8">
                {/* Header - Centered */}
                <div className="text-center mb-20">
                    <div className="mb-12">
                        <Button variant="badge" className="mb-8">
                            {badge}
                        </Button>
                    </div>

                    <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto font-light">
                        {description}
                    </p>
                </div>

                {/* Services Grid - Exact spacing */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {servicesToRender.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            tags={service.tags}
                            gradientFrom={service.gradientFrom}
                            gradientTo={service.gradientTo}
                        />
                    ))}
                </div>

                {/* CTA Button - Centered */}
                <div className="text-center">
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
        </section>
    );
};

// Exact Screen Replica
export default function ExactServicesScreen() {
    return (
        <div className="min-h-screen" style={{
            background: 'linear-gradient(180deg, #F8F9FA 0%, #E9ECEF 30%, #6C757D 70%, #343A40 100%)'
        }}>
            <ServicesSection />
        </div>
    );
}