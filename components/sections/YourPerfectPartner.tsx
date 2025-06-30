import React from "react";

export const YourPerfectPartner = () => {
    return (
        <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden md:px-24 pb-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 invisible md:visible"
                style={{
                    backgroundImage: "url('/images/steps.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "contain",
                    opacity: 1, // Adjust opacity as needed
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-3 md:py-32 py-16">
                {/* Header section */}

                <div className="md:mb-8">
                    <span
                        className="inline-block border md:px-6 md:py-4 px-4 py-2 rounded-full text-body-md md:text-display-xs"
                        style={{
                            color: "#54B3F1",
                            borderColor: "#54B3F1",
                        }}
                    >
                        Your perfect partner
                    </span>
                </div>

                <h1 className="font-medium text-white leading-tight text-display-md md:text-display-lg md:max-w-[700px] mt-8">
                    Consistent Growth in Just a Simple 3-Steps
                </h1>

                <p className=" font text-secondary-gray text-body-md md:text-display-sm mt-4">
                    We follow a structured, data-driven process to ensure your
                    marketing strategy delivers consistent growth and measurable
                    results.
                </p>
            </div>
            <div className="flex-shrink-0 md:invisible">
                <img src="/images/steps_vertical.svg" alt="Logo" />
            </div>
        </div>
    );
};

export default YourPerfectPartner;
