import React from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 w-full">
            <div
                className={`flex items-center gap-8 ${isLeftImage ? "flex-row" : "flex-row-reverse"}`}
            >
                {/* Project Image */}

                <img src="/images/workImage.jpg" alt="Logo" />

                {/* Project Content */}
                <div className="flex-1">
                    <div className="mb-3">
                        <span
                            className="inline-block border px-6 py-1 rounded-full"
                            style={{
                                color: "#54B3F1",
                                borderColor: "#54B3F1",
                                fontSize: 20,
                            }}
                        >
                            {category}
                        </span>
                    </div>

                    <h3 className="font-semibold mb-3 text-display-sm">
                        {title}
                    </h3>

                    <p
                        className="text-gray-600 text-base leading-relaxed mb-4"
                        style={{
                            color: "#38383A",
                            fontSize: 24,
                        }}
                    >
                        {description}
                    </p>

                    <p
                        className=" mb-6"
                        style={{
                            color: "#949499",
                            fontSize: 24,
                        }}
                    >
                        {metrics}
                    </p>

                    <div className={"flex"} style={{ height: 50 }}>
                        <div className={"h-16"}>
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
