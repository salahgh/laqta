// Service Card Component - Exact replica
export const ServiceCard = ({
                         title,
                         description,
                         tags = [],
                         gradientFrom = '#B8860B',
                         gradientTo = '#DAA520',
                         iconBg = 'rgba(255,255,255,0.2)',
                         className = ''
                     }) => {
    return (
        <div
            className={`relative rounded-3xl p-8 h-96 overflow-hidden group hover:scale-[1.02] transition-all duration-300 ${className}`}
            style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Icon in top right */}
                <div className="flex justify-end mb-6">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{background: iconBg}}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-white text-base opacity-95 mb-8 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-white bg-opacity-20 text-white text-sm rounded-full backdrop-blur-sm"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
