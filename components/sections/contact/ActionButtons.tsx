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
        <div className={"flex w-full justify-end items-center gap-4 h-12"}>
            <Button
                type="button"
                variant="secondary"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                rightIcon={null}
                onClick={handleGoBack}
            >
                Go Back
            </Button>

            <Button
                type="submit"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                leftIcon={null}
                disabled={isSubmitting}
                onClick={handeGoNext}
            >
                Next {currentStep}/{totalSteps}
            </Button>
        </div>
    );
};
