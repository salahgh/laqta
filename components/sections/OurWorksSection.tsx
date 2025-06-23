import React from 'react';
import {ProjectCard} from "@/components/ui/ProjectCard";



const OurWorks = () => {
    const projects = [
        {
            imagePosition: 'left',
            category: 'AI & SaaS Industry',
            title: 'Brand Positioning',
            description: 'We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.',
            metrics: "Let's shape clarity from complexity.",
            ctaText: 'Get a free audit'
        },
        {
            imagePosition: 'right',
            category: 'AI & SaaS Industry',
            title: 'Brand Positioning',
            description: 'We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.',
            metrics: "Let's shape clarity from complexity.",
            ctaText: 'Get a free audit'
        },
        {
            imagePosition: 'left',
            category: 'AI & SaaS Industry',
            title: 'Brand Positioning',
            description: 'We helped Neuromind simplify their complex AI product through a clear brand voice, captivating explainer videos, and conversion-driven landing pages—leading to a 35% boost in trial signups within 2 months.',
            metrics: "Let's shape clarity from complexity.",
            ctaText: 'Get a free audit'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
            <span
                className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-100">
              Our Work
            </span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Works
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        From powerful brand firms to bold social campaigns, creativity with strategy to connect,
                        perform, and inspire. Here's a look at what we've created with our amazing clients.
                    </p>
                </div>

                {/* Projects Section */}
                <div className="space-y-0">
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