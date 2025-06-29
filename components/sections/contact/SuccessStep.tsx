"use client";

import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

const SuccessStep = () => {
    const handleGoHome = () => {
        // Navigate to main page in real implementation
        console.log("Navigating to main page...");
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="lg:w-2/3 flex items-center justify-center border border-blue-700/50 rounded-xl shadow-lg bg-slate-900/30 backdrop-blur-sm p-8">
                <div
                    className="text-center space-y-8 w-full flex flex-col items-center justify-center"
                    style={{ width: "100%" }}
                >
                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    {/* Success Title */}
                    <div className="space-y-4">
                        <h1
                            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
                            style={{
                                fontSize: "3.5rem",
                                lineHeight: "1.1",
                                fontWeight: "700",
                            }}
                        >
                            Submitted!
                        </h1>

                        <p
                            className="text-xl"
                            style={{
                                color: "#93d5de",
                                fontSize: "1.25rem",
                                lineHeight: "1.6",
                            }}
                        >
                            Form has been Submitted successfully
                        </p>
                    </div>

                    {/* Additional Success Details */}
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                        <div className="space-y-3 text-left">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-slate-300">
                                    Personal information received
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-slate-300">
                                    Project details recorded
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-slate-300">
                                    Payment information secured
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps */}
                    <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
                        <h3 className="text-lg font-semibold text-blue-200 mb-3">
                            What happens next?
                        </h3>
                        <div className="space-y-2 text-left text-sm text-blue-100">
                            <p>
                                • Our team will review your submission within 24
                                hours
                            </p>
                            <p>• You'll receive a confirmation email shortly</p>
                            <p>
                                • We'll contact you to schedule a discovery call
                            </p>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                        <Button
                            variant="primary"
                            rightIcon={<ArrowRight className="w-4 h-4" />}
                            onClick={handleGoHome}
                            className="w-full max-w-xs mx-auto"
                            style={{
                                background:
                                    "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                                border: "none",
                                boxShadow:
                                    "0 10px 30px rgba(59, 130, 246, 0.3)",
                                height: "56px",
                                fontSize: "16px",
                                fontWeight: "600",
                            }}
                        >
                            Go Back to Main Page
                        </Button>
                    </div>

                    {/* Reference ID */}
                    <div className="text-xs text-slate-500">
                        Reference ID: #LEQTA-
                        {Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStep;
