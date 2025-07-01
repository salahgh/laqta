// StepperComponent.jsx
import React from "react";
import { User, MessageCircle, Send, CheckCircle } from "lucide-react";

const StepperComponent = ({ currentStep = 1 }) => {
    const steps = [
        {
            id: 1,
            icon: User,
            title: "Personal infos",
            description: "So we can know you better",
            completed: currentStep > 1,
            active: currentStep === 1,
        },
        {
            id: 2,
            icon: MessageCircle,
            title: "Project infos",
            description: "Let us understand your project",
            completed: currentStep > 2,
            active: currentStep === 2,
        },
        {
            id: 3,
            icon: Send,
            title: "Payment infos",
            description: "Please fill your payment infos to get started",
            completed: currentStep > 3,
            active: currentStep === 3,
        },
    ];

    const activeStep = steps.find((step) => step.active);

    return (
        <>
            {/* Desktop Version - Vertical Layout */}
            <div className="hidden lg:block lg:w-1/3 space-y-6">
                {steps.map((step) => {
                    const IconComponent = step.icon;
                    const isActive = step.active;
                    const isCompleted = step.completed;
                    const isInactive = !isActive && !isCompleted;

                    return (
                        <div
                            key={step.id}
                            className={`flex items-start space-x-4 transition-all duration-300 ${
                                isInactive ? "opacity-60" : ""
                            }`}
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                    isActive
                                        ? "bg-blue-500 shadow-lg shadow-blue-500/25"
                                        : isCompleted
                                          ? "bg-green-500 shadow-lg shadow-green-500/25"
                                          : "bg-slate-600"
                                }`}
                            >
                                <IconComponent
                                    className={`w-5 h-5 transition-colors duration-300 ${
                                        isActive || isCompleted
                                            ? "text-white"
                                            : "text-slate-300"
                                    }`}
                                />
                            </div>
                            <div>
                                <h3
                                    className={`font-semibold flex items-center gap-2 transition-all duration-300 ${
                                        isActive
                                            ? "text-white"
                                            : isCompleted
                                              ? "text-green-300"
                                              : "text-slate-300"
                                    }`}
                                    style={
                                        isActive
                                            ? { fontSize: 23, color: "#dae8f7" }
                                            : { fontSize: 18 }
                                    }
                                >
                                    {step.title}
                                    {isCompleted && (
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                    )}
                                </h3>
                                <p
                                    className={`text-sm transition-colors duration-300 ${
                                        isActive
                                            ? "text-slate-400"
                                            : isCompleted
                                              ? "text-green-400"
                                              : "text-slate-500"
                                    }`}
                                    style={isActive ? { color: "#93d5de" } : {}}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Version - Horizontal Layout */}
            <div className="lg:hidden w-full">
                {/* Horizontal Steps */}
                <div className="flex items-center justify-center space-x-4 mb-6">
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
                                        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                            isActive
                                                ? "bg-white text-blue-500 shadow-md"
                                                : isCompleted
                                                  ? "bg-green-600 text-white"
                                                  : "bg-slate-500 text-slate-200"
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle className="w-3 h-3" />
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
                    <div className="text-center px-4 animate-fade-in">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
                            <h3
                                className="font-semibold text-white mb-2 transition-all duration-300"
                                style={{ fontSize: 23, color: "#dae8f7" }}
                            >
                                {activeStep.title}
                            </h3>
                            <p
                                className="text-sm transition-colors duration-300"
                                style={{ color: "#93d5de" }}
                            >
                                {activeStep.description}
                            </p>

                            {/* Progress Indicator */}
                            <div className="mt-4 flex items-center justify-center space-x-2">
                                <span className="text-xs text-slate-400">
                                    Step {currentStep} of {steps.length}
                                </span>
                                <div className="flex space-x-1">
                                    {steps.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index + 1 === currentStep
                                                    ? "bg-blue-400 scale-125"
                                                    : index + 1 < currentStep
                                                      ? "bg-green-400"
                                                      : "bg-slate-600"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
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

export default StepperComponent;
