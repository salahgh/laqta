import React from 'react';
import {ProfileAvatar} from "@/components/ui/ProfileAvatar";
import {StepCard} from "@/components/ui/StepCard";




export const YourPerfectPartner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Diagonal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-purple-900/30"></div>

                {/* Abstract shapes */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-lg"></div>
            </div>

            {/* Profile avatars */}
            <ProfileAvatar position="top-8 right-8" />
            <ProfileAvatar position="bottom-8 left-8" />

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
                {/* Header section */}
                <div className="mb-20">
                    <div className="mb-6">
            <span className="inline-block px-4 py-2 border border-blue-400 text-blue-400 text-sm font-medium rounded-full">
              Your perfect partner
            </span>
                    </div>

                    <h1 className="text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
                        Consistent Growth in Just a Simple 3-Steps
                    </h1>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                        We follow a structured, data-driven process to ensure your marketing strategy delivers consistent
                        growth and measurable results.
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