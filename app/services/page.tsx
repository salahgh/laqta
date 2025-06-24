export const metadata = {
  title: "Services | Laqta",
};

import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

// Navigation Component
const Navigation = () => {
    const navItems = [
        { name: 'Basic Production', active: true },
        { name: 'Advertising Content Production', active: false },
        { name: 'Content Marketing Strategy', active: false },
        { name: 'Integrated Content Marketing', active: false }
    ];

    return (
        <nav className="flex items-center gap-6 mb-8">
            <button className="p-2 rounded-full border border-gray-600 hover:bg-gray-700 transition-colors">
                <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-6">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`text-sm px-3 py-2 rounded transition-colors ${
                            item.active
                                ? 'text-white border-b-2 border-blue-400'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};

// Header Component
const Header = () => (
    <div className="text-center mb-12">
        <div className="text-gray-500 text-sm mb-4">Frame 170479146</div>
        <h1 className="text-5xl font-bold text-white mb-6">Basic Production</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Leqta offers flexible production options to match your content needs and
            brand ambitions. Choose between our efficient Basic Plan or a fully tailored
            Premium Plan designed around your objectives.
        </p>
    </div>
);

// Plan Card Component
const PlanCard = ({
                      title,
                      description,
                      price,
                      buttonText,
                      buttonColor,
                      features,
                      equipment,
                      gradient,
                      frameId
                  }) => (
    <div className={`relative rounded-2xl p-8 ${gradient} border border-gray-700 h-full`}>
        {frameId && (
            <div className="absolute top-4 left-4 text-gray-500 text-xs">
                {frameId}
            </div>
        )}

        <div className="mt-6">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                {description}
            </p>

            {features && (
                <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4">What's Included</h4>
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="text-gray-300 text-sm">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {equipment && (
                <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4">What's Included</h4>
                    <ul className="space-y-2">
                        {equipment.map((item, index) => (
                            <li key={index} className="flex items-center text-gray-300 text-sm">
                                <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex items-center justify-between mt-auto pt-8">
                {price && (
                    <div className="text-white text-2xl font-bold">
                        {price}
                    </div>
                )}
                <button className={`px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 ${buttonColor}`}>
                    {buttonText}
                </button>
            </div>
        </div>
    </div>
);

// Main Component
const BasicProductionPage = () => {
    const basicPlanFeatures = [
        'Filming of 5 content pieces',
        '1 full day of shooting',
        'Basic editing for all 5 videos (cutting, transitions, basic color correction, music/logo overlay)'
    ];

    const basicPlanEquipment = [
        'Professional Camera',
        'Stabilizer (Gimbal + Tripod)',
        'Softbox Light + RGB Tube Light',
        'Wireless Microphone Kit (2 transmitters)'
    ];

    const premiumPlanFeatures = [
        'More than 5 video content pieces',
        'Multi-day filming sessions',
        'Additional equipment (e.g., drone, sliders, multi-cam setup)',
        'Storyboard development and scripting',
        'Advanced editing (motion graphics, subtitling, brand animation)'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6">
            <div className="max-w-6xl mx-auto">
                <Navigation />
                <Header />

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Basic Plan */}
                    <PlanCard
                        frameId="Frame 170480111"
                        title="Basic Plan"
                        description="Ideal for brands needing a simple, fast production for a small batch of video content."
                        price="126,900 DZD"
                        buttonText="Get Started"
                        buttonColor="bg-blue-500 hover:bg-blue-600 text-white"
                        features={basicPlanFeatures}
                        equipment={basicPlanEquipment}
                        gradient="bg-gradient-to-br from-gray-800 to-gray-900"
                    />

                    {/* Premium Plan */}
                    <PlanCard
                        title="Premium Plan"
                        description="Brands with larger content needs, creative ambitions, or advanced technical requirements. This plan is 100% customized to your brand, objectives, and creative vision. We design the content, structure, and production workflow with your brand team."
                        buttonText="Contact Us"
                        buttonColor="bg-teal-500 hover:bg-teal-600 text-white"
                        features={premiumPlanFeatures}
                        gradient="bg-gradient-to-br from-purple-800 via-pink-700 to-purple-900"
                    />
                </div>

                {/* Custom Quote Section */}
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">Custom Quote</h3>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
                        Contact Us
                    </button>
                </div>

                {/* What's Possible Section */}
                <div className="mt-8 text-center">
                    <h4 className="text-white text-lg font-semibold mb-4">What's Possible</h4>
                    <div className="grid md:grid-cols-3 gap-6 text-gray-300 text-sm">
                        <div>More than 5 video content pieces</div>
                        <div>Multi-day filming sessions</div>
                        <div>Additional equipment (e.g., drone, sliders, multi-cam setup)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicProductionPage;