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

    return (
        <div className="lg:w-1/3 space-y-6">
            {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = step.active;
                const isCompleted = step.completed;
                const isInactive = !isActive && !isCompleted;

                return (
                    <div
                        key={step.id}
                        className={`flex items-start space-x-4 ${
                            isInactive ? "opacity-60" : ""
                        }`}
                    >
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                isActive
                                    ? "bg-blue-500"
                                    : isCompleted
                                      ? "bg-green-500"
                                      : "bg-slate-600"
                            }`}
                        >
                            <IconComponent
                                className={`w-5 h-5 ${
                                    isActive || isCompleted
                                        ? "text-white"
                                        : "text-slate-300"
                                }`}
                            />
                        </div>
                        <div>
                            <h3
                                className={`font-semibold flex items-center gap-2 ${
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
                                className={`text-sm ${
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
    );
};

export default StepperComponent;
