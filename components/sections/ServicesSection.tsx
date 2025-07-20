import { ArrowRight, ChartColumnBig, Film, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { Service, servicesApi } from "@/lib/strapi";

// Types
interface ServicesSectionProps {
    badge?: string;
    description?: string;
    buttonText?: string;
    services?: Service[];
    className?: string;
}

// Server-side function to fetch services with revalidation
async function getServices(): Promise<Service[]> {
    try {
        const response = await servicesApi.getAll({
            populate: "*",
            pageSize: 10,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
}

// Get icon component based on string
const getIconComponent = (iconName?: string) => {
    switch (iconName) {
        case "chart":
            return <ChartColumnBig className="w-6 h-6 text-white" />;
        case "rocket":
            return <Rocket className="w-6 h-6 text-white" />;
        case "film":
            return <Film className="w-6 h-6 text-white" />;
        default:
            return <ChartColumnBig className="w-6 h-6 text-white" />;
    }
};

// Transform Strapi services to match ServiceCard props
const transformStrapiService = (service: Service) => ({
    title: service.title,
    description: service.description,
    // tags: service.tags?.map((tag) => tag.name) || [],
    tags: service.tags,
    gradientFrom: service.gradientFrom,
    gradientTo: service.gradientTo,
    icon: getIconComponent(service.icon),
});

// Main Services Section Component - Server-side with revalidation
export const ServicesSection = async ({
    badge = "What we offer",
    description = "At LAQTA, we deliver video content that performs. Whether you're launching a campaign, " +
        "telling your brand story, or creating cinematic visuals we've got you covered.",
    buttonText = "Go to services",
    className = "",
}: ServicesSectionProps) => {
    const strapiServices = await getServices();

    // Determine which services to render
    const servicesToRender = (() => {
        if (strapiServices.length > 0) {
            return strapiServices.map(transformStrapiService);
        }
    })();

    return (
        <section className={`relative overflow-hidden bg-primary ${className}`}>
            {/* Amber Gradient Layer - from bottom to mid */}
            <div
                className="absolute top-1/4 left-0 right-0 bottom-0 z-10"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(245, 158, 11, 0) 50%, transparent 100%)",
                }}
            />

            {/* Vector Curve SVG Layer */}
            <div className="absolute inset-0 z-10 flex justify-center ">
                <img
                    src="/images/vector_courbe.svg"
                    alt="Vector Curve Background"
                    className="w-full h-full object-fill "
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col">
                {/* Header - Fully Responsive */}
                <div className="text-center flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32">
                    <Badge variant="default">{badge}</Badge>

                    <h2 className="text-white text-center">Our Services</h2>

                    <p className="text-secondary-gray text-justify px-4 sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xlsm:px-6 md:px-8">
                        {description}
                    </p>
                </div>

                {/* Services Grid - Fully Responsive */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
                gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 justify-center items-stretch
                px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
                >
                    {servicesToRender?.map((service, index) => (
                        <div key={index} className="w-full">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                tags={service.tags}
                                gradientFrom={service.gradientFrom}
                                gradientTo={service.gradientTo}
                                icon={service.icon}
                                className="h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Button - Fully Responsive */}
                <div
                    className="text-center flex items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24
                2xl:mt-28 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32"
                >
                    <div className="h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 2xl:h-18">
                        <Button
                            variant="primary"
                            leftIcon={null}
                            rightIcon={
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            }
                            className=""
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Export with revalidation for Next.js
export const revalidate = 600; // Revalidate every 10 minutes

// Exact Screen Replica
export default function ExactServicesScreen() {
    return (
        <div
            className="min-h-screen"
            // style={{
            //     background:
            //         "linear-gradient(180deg, #F8F9FA 0%, #E9ECEF 30%, #6C757D 70%, #343A40 100%)",
            // }}
        >
            {/* @ts-expect-error Server Component */}
            <ServicesSection />
        </div>
    );
}
