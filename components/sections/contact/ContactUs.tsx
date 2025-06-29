"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { Logo } from "@/components/ui/Logo";
import StepperComponent from "./StepperComponent";
import PersonalInfoForm from "./PersonalInfoForm";
import ProjectInfoStep from "@/components/sections/contact/ProjectInfoStep";
import { PaymentInfoForm } from "@/components/sections/contact/paymentInfoForm";
import SuccessStep from "@/components/sections/contact/SuccessStep";
import { ActionButtons } from "@/components/sections/contact/ActionButtons";

const ContactUs = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleGoBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handeGoNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleGoToMainPage = () => {
        // Handle navigation to main page
        console.log("Navigate to main page");
    };

    const renderCurrentStepForm = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfoForm />;
            case 2:
                return <ProjectInfoStep />;

            case 3:
                return <PaymentInfoForm />;
            default:
                return <SuccessStep />;
        }
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            {/* Header */}
            <div
                className="flex items-center justify-between p-6"
                style={{
                    height: 87,
                    backgroundColor: "rgb(20,23,51)",
                    paddingLeft: 120,
                    paddingRight: 120,
                }}
            >
                <Logo />
            </div>

            {/* Go Back Button */}
            <div
                className="px-6 mb-8"
                style={{ paddingTop: 50, paddingLeft: 120, paddingRight: 120 }}
            >
                <button
                    onClick={handleGoToMainPage}
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-600 rounded-full hover:bg-slate-700/30
                transition-colors text-body-xl"
                    style={{
                        height: 60,
                        paddingLeft: 20,
                        paddingRight: 20,
                        color: "#8e96b0",
                    }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Go Back</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex gap-8 px-32" style={{ paddingTop: 50 }}>
                {/* Left Sidebar - Stepper */}
                <StepperComponent currentStep={currentStep} />

                {/* Right Content - Dynamic Form */}

                <div
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50  w-full"
                    style={{ minHeight: "calc(100vh - 240px)" }}
                >
                    {renderCurrentStepForm()}
                    <div className={"pt-16"}>
                        <ActionButtons
                            currentStep={currentStep}
                            totalSteps={4}
                            handleGoBack={handleGoBack}
                            handeGoNext={handeGoNext}
                            isSubmitting={false}
                        />
                    </div>
                </div>
            </div>

            <div style={{ height: 240 }}></div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactUs;
