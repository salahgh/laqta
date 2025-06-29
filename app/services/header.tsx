// Header Component
import React from "react";

export const Header = () => (
    <div className="text-center mt-8 mb-8">
        <h1
            className="font-bold text-white"
            style={{ fontSize: 96, fontWeight: "500" }}
        >
            Basic Production
        </h1>
        <p
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 24, color: "#A0A1B3", maxWidth: 900 }}
        >
            Leqta offers flexible production options to match your content needs
            and brand ambitions. Choose between our efficient Basic Plan or a
            fully tailored Premium Plan designed around your objectives.
        </p>
    </div>
);
