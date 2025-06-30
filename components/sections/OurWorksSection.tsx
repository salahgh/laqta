import React from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";

const OurWorks = () => {
    const projects = [
        {
            imagePosition: "left",
            category: "AI & SaaS Industry",
            title: "Brand Positioning",
            description:
                "We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.",
            metrics: "Let's shape clarity from complexity.",
            ctaText: "Get a free audit",
        },
        {
            imagePosition: "right",
            category: "AI & SaaS Industry",
            title: "Brand Positioning",
            description:
                "We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.",
            metrics: "Let's shape clarity from complexity.",
            ctaText: "Get a free audit",
        },
        {
            imagePosition: "left",
            category: "AI & SaaS Industry",
            title: "Brand Positioning",
            description:
                "We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.",
            metrics: "Let's shape clarity from complexity.",
            ctaText: "Get a free audit",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className=" px-3 md:px-20">
                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center space-y-4">
                    <h1
                        className="px-4 py-2 bg-blue-50 text-blue-600 text-body-md md:text-display-sm
                        rounded-full border border-blue-100 flex items-center justify-center mb-4
                        md:h-[56px] h-[42px]
                        "
                        style={{
                            color: "#54B3F1",
                            borderColor: "#54B3F1",
                        }}
                    >
                        Our Works
                    </h1>

                    <h1 className="px-4 py-2 md:text-display-xl text-display-md flex items-center justify-center mb-4">
                        Our Works
                    </h1>

                    <p className="text-secondary-gray md:text-display-xs text-body-md leading-relaxed mx-auto md:px-32">
                        From powerful brand firms to bold social campaigns,
                        creativity with strategy to connect, perform, and
                        inspire. Here's a look at what we've created with our
                        amazing clients.
                    </p>
                </div>

                {/* Projects Section */}
                <div className="space-y-12 flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            imagePosition={project.imagePosition}
                            category={project.category}
                            title={project.title}
                            description={project.description}
                            metrics={project.metrics}
                            ctaText={project.ctaText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
