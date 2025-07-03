import React from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const ProjectCard = ({
    imagePosition = "left",
    title,
    category,
    description,
    metrics,
    ctaText,
}) => {
    const isLeftImage = imagePosition === "left";

    return (
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 ">
            <div
                className={`flex items-center gap-8 ${isLeftImage ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
            >
                {/* Project Image */}
                <img src="/images/workImage.jpg" alt="Logo" />

                {/* Project Content */}
                <div className="flex-1">
                    <div className="mb-3">
                        <Badge variant="compact">{category}</Badge>
                    </div>

                    <h3 className="font-semibold mb-3 text-display-sm md:text-display-md">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-4 text-body-md md:text-display-xs">
                        {description}
                    </p>

                    <p className="mb-6 text-body-md md:text-display-xs text-secondary-gray">
                        {metrics}
                    </p>

                    <div className={"flex"} style={{ height: 50 }}>
                        <div className={"md:h-16 h-12"}>
                            <Button
                                size="md"
                                rightIcon={<Rocket className="w-4 h-4 ml-2" />}
                                // className="min-w-[140px]"
                            >
                                Get a free audit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
