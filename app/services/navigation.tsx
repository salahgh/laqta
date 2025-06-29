// Navigation Component
import { ArrowLeft } from "lucide-react";
import React from "react";

export const Navigation = () => {
    const navItems = [
        { name: "Basic Production", active: true },
        { name: "Advertising Content Production", active: false },
        { name: "Content Marketing Strategy", active: false },
        { name: "Integrated Content Marketing", active: false },
    ];

    return (
        <nav
            className="flex justify-center gap-4 mt-8 rounded-full w-full h-10"
            style={{ height: 63 }}
        >
            <button
                className="rounded-full border border-gray-600 hover:bg-gray-700 transition-colors h-full flex items-center justify-center"
                style={{ height: 63, width: 63 }}
            >
                <ArrowLeft className="w-8 h-8 text-white" />
            </button>
            <div className="flex gap-6 rounded-full border border-gray-500 px-8 h-full">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`text-sm px-3 py-2 rounded transition-colors ${
                            item.active
                                ? "text-white "
                                : "text-gray-400 hover:text-white"
                        }`}
                        style={{ fontSize: 20 }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};
