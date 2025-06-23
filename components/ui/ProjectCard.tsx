import React from "react";

export const ProjectCard = ({imagePosition = 'left', title, category, description, metrics, ctaText}) => {
    const isLeftImage = imagePosition === 'left';

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <div className={`flex items-center gap-8 ${isLeftImage ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Project Image */}
                <div className="flex-shrink-0">
                    <div
                        className="w-48 h-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-xl relative overflow-hidden">
                        {/* Background geometric shapes */}
                        <div className="absolute inset-0">
                            <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded"></div>
                            <div
                                className="absolute bottom-6 left-6 w-12 h-12 border border-white/20 rounded-full"></div>
                            <div className="absolute top-8 left-8 w-6 h-6 bg-white/10 rounded"></div>
                        </div>

                        {/* Quixotic logo and text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <div className="w-8 h-8 bg-white rounded-full mb-2 flex items-center justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                            <span className="text-lg font-semibold">Quixotic</span>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-2 right-2 text-white/40">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                    <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
              {category}
            </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                        {description}
                    </p>

                    <p className="text-gray-500 text-sm mb-6 italic">
                        {metrics}
                    </p>

                    <button
                        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                        {ctaText}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};