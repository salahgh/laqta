import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export const ActionButtons = ({
    handleGoBack,
    handeGoNext,
    currentStep,
    totalSteps,
    isSubmitting,
}) => {
    return (
        <div className={"pt-4 flex"}>
            <div className="flex-1"></div>
            <div className="flex justify-end items-center h-full gap-6">
                <Button
                    type="button"
                    variant="secondary"
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                    className="w-56"
                    onClick={handleGoBack}
                >
                    Go Back
                </Button>

                <Button
                    type="submit"
                    variant="primary"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-56"
                    disabled={isSubmitting}
                    onClick={handeGoNext}
                >
                    Next {currentStep}/{totalSteps}
                </Button>
            </div>
        </div>
    );
};
