import React from "react";

export const Card = ({
    icon: IconComponent,
    iconSrc,
    title,
    description,
    className = "",
}) => {
    return (
        <div
            className={`h-full relative bg-gradient-to-br from-blue-200/80 via-cyan-100/60
             to-blue-50/40 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 p-4
              flex flex-col items-center text-center z-10  ${className}`}
        >
            <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center">
                        {iconSrc ? (
                            <img
                                src={iconSrc}
                                alt={title}
                                className="w-8 h-8 filter brightness-0 invert"
                            />
                        ) : (
                            <IconComponent className="w-8 h-8 text-white" />
                        )}
                    </div>
                </div>
            </div>
            {/* Title */}
            <h2 className="text-gray-800">{title}</h2>
            {/* Description */}
            <p className="leading-relaxed text-responsive-lg">{description}</p>
        </div>
    );
};
