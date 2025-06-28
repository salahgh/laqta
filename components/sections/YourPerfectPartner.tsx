import React from "react";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { StepCard } from "@/components/ui/StepCard";

export const YourPerfectPartner = () => {
    // todo complte the illustration
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
            style={{
                height: 1205,
                paddingTop: 188,
                paddingBottom: 188,
                paddingLeft: 134,
                paddingRight: 134,
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
                {/* Header section */}
                <div className="mb-20">
                    <div className="mb-8">
                        <span
                            className="inline-block border px-6 py-4 rounded-full"
                            style={{
                                color: "#54B3F1",
                                borderColor: "#54B3F1",
                                fontSize: 20,
                            }}
                        >
                            Your perfect partner
                        </span>
                    </div>

                    <h1
                        className="font-medium text-white leading-tight"
                        style={{
                            fontSize: 56,
                            maxWidth: 800,
                            marginBottom: 16,
                        }}
                    >
                        Consistent Growth in Just a Simple 3-Steps
                    </h1>

                    <p
                        className="text-display-xs font"
                        style={{ color: "#C6BBBB" }}
                    >
                        We follow a structured, data-driven process to ensure
                        your marketing strategy delivers consistent growth and
                        measurable results.
                    </p>
                </div>

                {/* Steps visualization */}
                <div className="relative h-96 mt-32">
                    {/* Connecting line */}
                    <div className="absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-teal-400 via-yellow-400 to-pink-500 opacity-30 transform rotate-12"></div>

                    {/* Step 1 */}
                    <StepCard
                        number="1"
                        title="Onboarding Strategy"
                        description="We start with an in-depth consultation to understand your goals, target audience."
                        color="teal"
                        position="top-0 left-0"
                    />

                    {/* Step 2 */}
                    <StepCard
                        number="2"
                        title="Optimization Tracking"
                        description="In-depth consultation to understand your goals, target audience, business needs."
                        color="yellow"
                        position="top-24 left-1/2 transform -translate-x-1/2"
                    />

                    {/* Step 3 */}
                    <StepCard
                        number="3"
                        title="Strategy Adjustments"
                        description="Consultation to understand your goals, target audience, and business needs."
                        color="pink"
                        position="top-0 right-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default YourPerfectPartner;
