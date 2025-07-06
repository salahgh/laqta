import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { worksApi, Work, utils } from "@/lib/strapi";
import { defaultWorks } from "@/components/sections/DefaultWorks";

interface OurWorksSectionProps {
    badge?: string;
    title?: string;
    description?: string;
    works?: Work[];
    className?: string;
    fetchFromStrapi?: boolean;
}

// Server-side component with revalidation
export async function OurWorksSection({
    badge = "Our Works",
    title = "Our Works",
    description = "From powerful brand firms to bold social campaigns," +
        " creativity with strategy to connect, perform, and inspire. Here's a look at what we've created with our amazing clients.",
    works: providedWorks,
    className = "",
    fetchFromStrapi = true,
}: OurWorksSectionProps) {
    let works: Work[] = [];

    // Determine which works to use
    if (providedWorks && providedWorks.length > 0) {
        works = providedWorks;
    } else if (fetchFromStrapi) {
        try {
            const response = await worksApi.getAll({
                populate: "*",
                sort: "createdAt:desc",
                pageSize: 10,
            });

            works = response.data;
        } catch (error) {
            console.error("Failed to fetch works from Strapi:", error);
            // works = defaultWorks;
        }
    } else {
        // works = defaultWorks;
    }

    return (
        <div
            className={`min-h-screen bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 ${className}`}
        >
            <div className="px-3 sm:px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-32">
                {/* Header Section */}
                <div
                    className="text-center flex flex-col
                items-center gap-2 md:gap-6 lg:gap-5 xl:gap-6 md:pb-8"
                >
                    <Badge variant="default" className="">
                        {badge}
                    </Badge>

                    <h2 className="text-gray-900">{title}</h2>

                    <p
                        className="text-secondary-gray text-responsive-lg text-justify px-4 md:px-10 md:text-center
                    lg:px-24 xl:px-32 2xl:px-40 max-w-4xl"
                    >
                        {description}
                    </p>
                </div>

                {/* Projects Section */}
                <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-12 xl:space-y-16 flex flex-col">
                    {works.map((work, index) => {
                        const workData = work;
                        const imageUrl = workData?.image?.data?.attributes?.url
                            ? utils.getFileUrl(
                                  workData?.image?.data.attributes.url,
                              )
                            : "/images/workImage.jpg";
                        const imageAlt =
                            workData?.image?.data?.attributes
                                ?.alternativeText || workData?.title;

                        return (
                            <ProjectCard
                                key={work.id || index}
                                imagePosition={
                                    workData?.image_position || "left"
                                }
                                category={workData?.category}
                                title={workData?.title}
                                description={workData?.description}
                                metrics={workData?.metrics || ""}
                                ctaText={workData?.cta_text || "Learn more"}
                                imageUrl={imageUrl}
                                imageAlt={imageAlt}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// Add revalidation for server-side rendering
export const revalidate = 600; // 10 minutes

// Client-side version for compatibility
export default function OurWorksWrapper(props: OurWorksSectionProps) {
    return <OurWorksSection {...props} />;
}

// Export for server-side usage
export { OurWorksSection as OurWorksSection_SSR };
