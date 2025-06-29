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
            className={`relative bg-gradient-to-br from-blue-200/80 via-cyan-100/60
             to-blue-50/40 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 p-8
              flex flex-col items-center text-center ${className}`}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col">
                <div className="mb-8 flex items-center justify-center">
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
                <h3
                    className="text-2xl text-gray-800 mb-4 "
                    style={{ fontSize: 32 }}
                >
                    {title}
                </h3>
                {/* Description */}
                <p
                    className="leading-relaxed "
                    style={{ fontSize: 20, lineHeight: 1.2 }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};
