"use client";

import React, { useEffect, useState } from "react";

export function LayoutInfo() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [breakpoint, setBreakpoint] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);

            // Determine Tailwind breakpoint
            if (width < 640) {
                setBreakpoint("xs");
            } else if (width >= 640 && width < 768) {
                setBreakpoint("sm");
            } else if (width >= 768 && width < 1024) {
                setBreakpoint("md");
            } else if (width >= 1024 && width < 1280) {
                setBreakpoint("lg");
            } else if (width >= 1280 && width < 1536) {
                setBreakpoint("xl");
            } else if (width >= 1536) {
                setBreakpoint("2xl"); // Assuming a custom 3xl breakpoint for 1536px+
            }
        };

        // Set initial width and breakpoint
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md mt-4">
            <h2 className="text-lg font-semibold mb-2">Layout Information</h2>
            <p>
                Current Window Width:{" "}
                <span className="font-bold">{windowWidth}px</span>
            </p>
            <p>
                Active Tailwind Breakpoint:{" "}
                <span className="font-bold">{breakpoint}</span>
            </p>
            <p className="mt-2 text-sm text-gray-400">
                Note: This component is for development purposes to visualize
                responsive behavior.
            </p>
        </div>
    );
}
