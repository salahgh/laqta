// Competitive Edge Component
import { Clock, Edit, Eye, RefreshCw } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/Badge";

export const CompetitiveEdge = () => {
    const advantages = [
        {
            icon: <Edit className="w-6 h-6" />,
            title: "Creativity with Professionalism",
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Resilience & Perseverance",
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Attention to Detail",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Commitment & Time Management",
        },
    ];

    return (
        <section className="py-16  max-w-4xl mx-auto bg-gray-300">
            <div className="bg-gradient-to-br from-gray-100/10 to-blue-100/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/20">
                <div className="text-center mb-12">
                    <Badge>The Leqta Difference</Badge>

                    <h2 className="text-white mb-4" style={{ fontSize: 48 }}>
                        Our Competitive Edge
                    </h2>
                    <p
                        className="text-gray-300 max-w-2xl mx-auto"
                        style={{ fontSize: 20, color: "#A0A1B3" }}
                    >
                        At Leqta, we blend bold creativity with strategic
                        marketing know-how. This balance ensures high-performing
                        content with visual impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 flex items-center"
                        >
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-blue-400">
                                {advantage.icon}
                            </div>
                            <h3 className="text-white font-semibold">
                                {advantage.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
