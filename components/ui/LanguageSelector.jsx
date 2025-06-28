"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Algerian Flag Component
const AlgerianFlag = ({ className = "w-5 h-5" }) => (
    <img src="/images/algerie%20(1).png" alt="Logo" className="w-8 h-8" />
);

// UK Flag Component
const UKFlag = ({ className = "w-5 h-5" }) => (
    <img src="/images/royaume-uni.png" alt="Logo" className="w-8 h-8" />
);

export const LanguageSelector = ({ className = "" }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("english");
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        {
            code: "english",
            name: "English",
            flag: UKFlag,
            dir: "ltr",
        },
        {
            code: "arabic",
            name: "العربية",
            flag: AlgerianFlag,
            dir: "rtl",
        },
    ];

    const selectedLang = languages.find(
        (lang) => lang.code === selectedLanguage,
    );

    const handleLanguageSelect = (langCode) => {
        setSelectedLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className={`relative inline-block text-left ${className}`}>
            {/* Selected Language Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1 border border-gray-50 rounded-full transition-colors"
                dir={selectedLang.dir}
                style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
                <selectedLang.flag className="w-5 h-5 rounded-sm" />

                <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-max">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageSelect(language.code)}
                            className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors ${
                                selectedLanguage === language.code
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-gray-700"
                            }`}
                            dir={language.dir}
                        >
                            <language.flag className="w-5 h-5 rounded-sm" />
                            <span className="text-sm font-medium">
                                {language.name}
                            </span>
                            {selectedLanguage === language.code && (
                                <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Overlay to close dropdown when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};
