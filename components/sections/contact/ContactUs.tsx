"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { useTranslations } from "next-intl";

import PersonalInfoForm from "./PersonalInfoForm";
import ProjectInfoStep from "@/components/sections/contact/ProjectInfoStep";
import { PaymentInfoForm } from "@/components/sections/contact/paymentInfoForm";
import SuccessStep from "@/components/sections/contact/SuccessStep";
import { ActionButtons } from "@/components/sections/contact/ActionButtons";
import { Navigation } from "@/components/layout/Navigation";
import { StepperComponent } from "@/components/sections/contact/StepperComponent";

const ContactUs = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const t = useTranslations('contactPage');

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
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white space-y-2 py-4">
            {/* Header */}
            <div className="">
                <Navigation></Navigation>
            </div>

            {/* Go Back Button */}
            <div className="px-6">
                <button
                    onClick={handleGoToMainPage}
                    className="flex items-center space-x-2 px-4 py-2 border border-slate-600 rounded-full hover:bg-slate-700/30
                transition-colors text-responsive-lg text-secondary-gray"
                    style={{}}
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t('goBack')}</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex lg:flex-row flex-col gap-4 md:px-12 px-4">
                {/* Left Sidebar - Stepper */}
                <div className={"pt-4 w-full md:px-6"}>
                    <StepperComponent currentStep={currentStep} />
                </div>

                {/* Right Content - Dynamic Form */}

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50  w-full">
                    {renderCurrentStepForm()}

                    <ActionButtons
                        currentStep={currentStep}
                        totalSteps={4}
                        handleGoBack={handleGoBack}
                        handeGoNext={handeGoNext}
                        isSubmitting={false}
                    />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactUs;
