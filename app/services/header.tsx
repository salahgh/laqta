// Header Component
import React from "react";

export const Header = () => (
    <div className="text-center mt-8 mb-8">
        <h1 className="font-semibold text-white md:text-[96px] text-[48px]">
            Basic Production
        </h1>
        <p
            className=" max-w-2xl mx-auto leading-relaxed text-secondary-gray md:text-display-xs text-body-md px-4"
            style={{ maxWidth: 900 }}
        >
            Leqta offers flexible production options to match your content needs
            and brand ambitions. Choose between our efficient Basic Plan or a
            fully tailored Premium Plan designed around your objectives.
        </p>
    </div>
);
