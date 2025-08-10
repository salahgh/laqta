import React from "react";
import { User, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const StepperComponent = ({ currentStep = 1 }) => {
    const t = useTranslations('contactPage.stepper');
    
    const steps = [
        {
            id: 1,
            icon: User,
            title: t('personalInfos'),
            description: t('personalInfosDescription'),
            completed: currentStep > 1,
            active: currentStep === 1,
        },
        {
            id: 2,
            icon: MessageCircle,
            title: t('projectInfos'),
            description: t('projectInfosDescription'),
            completed: currentStep > 2,
            active: currentStep === 2,
        },
        {
            id: 3,
            icon: Send,
            title: t('paymentInfos'),
            description: t('paymentInfosDescription'),
            completed: currentStep > 3,
            active: currentStep === 3,
        },
    ];

    const activeStep = steps.find((step) => step.active);

    return (
        <>
            {/* Desktop Version - Improved Vertical Layout */}
            <div className="hidden lg:block relative">
                {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = step.active;
                    const isCompleted = step.completed;
                    const isInactive = !isActive && !isCompleted;

                    return (
                        <div key={step.id} className="relative">
                            {/* Connecting Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-6 top-12 w-0.5 h-16 transition-all duration-500">
                                    <div
                                        className={`w-full h-full rounded-full transition-all duration-500 ${
                                            step.completed
                                                ? "bg-gradient-to-b from-green-500 to-blue-500"
                                                : step.active
                                                  ? "bg-gradient-to-b from-blue-500 to-slate-600"
                                                  : "bg-slate-600"
                                        }`}
                                    >
                                        {/* Animated Progress Line */}
                                        {step.active && (
                                            <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step Content */}
                            <div
                                className={`flex items-start space-x-4 pb-8 transition-all duration-300 ${
                                    isInactive ? "opacity-50" : ""
                                }`}
                            >
                                {/* Step Circle */}
                                <div
                                    className={`relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 transform ${
                                        isActive
                                            ? "bg-blue-500 shadow-lg shadow-blue-500/40 scale-110"
                                            : isCompleted
                                              ? "bg-green-500 shadow-lg shadow-green-500/40"
                                              : "bg-slate-600"
                                    }`}
                                >
                                    <IconComponent
                                        className={`w-6 h-6 transition-all duration-300 ${
                                            isActive || isCompleted
                                                ? "text-white"
                                                : "text-slate-300"
                                        }`}
                                    />

                                    {/* Active Step Pulse Animation */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
                                    )}

                                    {/* Step Number Badge */}
                                    <div
                                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs 
                                        font-bold transition-all duration-300 ${
                                            isActive
                                                ? "bg-white text-blue-500 shadow-md"
                                                : isCompleted
                                                  ? "bg-green-600 text-white"
                                                  : "bg-slate-500 text-slate-200"
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle className="w-4 h-4" />
                                        ) : (
                                            step.id
                                        )}
                                    </div>
                                </div>

                                {/* Step Info */}
                                <div className="flex-1 min-w-0">
                                    <div
                                        className={`transition-all duration-300 ${
                                            isActive
                                                ? "bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-xl p-4"
                                                : "p-2"
                                        }`}
                                    >
                                        <h3
                                            className={`font-semibold flex items-center gap-2 transition-all duration-300 ${
                                                isActive
                                                    ? "text-white text-lg"
                                                    : isCompleted
                                                      ? "text-green-300 text-base"
                                                      : "text-slate-300 text-base"
                                            }`}
                                        >
                                            {step.title}
                                            {isCompleted && !isActive && (
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                            )}
                                        </h3>
                                        <p
                                            className={`text-sm mt-1 transition-colors duration-300 ${
                                                isActive
                                                    ? "text-slate-300"
                                                    : isCompleted
                                                      ? "text-green-400"
                                                      : "text-slate-500"
                                            }`}
                                            style={
                                                isActive
                                                    ? { color: "#93d5de" }
                                                    : {}
                                            }
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Version - Horizontal Layout */}
            <div className="lg:hidden w-full space-y-4">
                {/* Horizontal Steps */}
                <div className="flex items-center justify-center space-x-4">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        const isActive = step.active;
                        const isCompleted = step.completed;
                        const isInactive = !isActive && !isCompleted;

                        return (
                            <React.Fragment key={step.id}>
                                {/* Step Circle */}
                                <div
                                    className={`relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 transform ${
                                        isActive
                                            ? "bg-blue-500 shadow-lg shadow-blue-500/40 scale-110"
                                            : isCompleted
                                              ? "bg-green-500 shadow-lg shadow-green-500/40"
                                              : "bg-slate-600"
                                    } ${isInactive ? "opacity-50" : ""}`}
                                >
                                    <IconComponent
                                        className={`w-6 h-6 transition-all duration-300 ${
                                            isActive || isCompleted
                                                ? "text-white"
                                                : "text-slate-300"
                                        }`}
                                    />

                                    {/* Active Step Pulse Animation */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
                                    )}

                                    {/* Step Number Badge */}
                                    <div
                                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs 
                                        font-bold transition-all duration-300 ${
                                            isActive
                                                ? "bg-white text-blue-500 shadow-md"
                                                : isCompleted
                                                  ? "bg-green-600 text-white"
                                                  : "bg-slate-500 text-slate-200"
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            step.id
                                        )}
                                    </div>
                                </div>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="flex-1 mx-2">
                                        <div
                                            className={`h-1 rounded-full transition-all duration-500 ${
                                                step.completed
                                                    ? "bg-gradient-to-r from-green-500 to-blue-500"
                                                    : step.active
                                                      ? "bg-gradient-to-r from-blue-500 to-slate-300"
                                                      : "bg-slate-600"
                                            }`}
                                        >
                                            {/* Animated Progress Bar */}
                                            {step.active && (
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Active Step Info - Centered */}
                {activeStep && (
                    <div className="text-center px-2 animate-fade-in bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl space-y-2 py-2">
                        <h3 className="font-semibold text-white transition-all duration-300">
                            {activeStep.title}
                        </h3>
                        <p
                            className="text-sm transition-colors duration-300"
                            style={{ color: "#93d5de" }}
                        >
                            {activeStep.description}
                        </p>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </>
    );
};
