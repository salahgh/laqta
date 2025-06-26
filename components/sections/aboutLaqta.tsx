import {Rocket} from 'lucide-react';
import {Button} from "@/components/ui/Button";

// Main About Section Component
const AboutSection = ({
                          badge = "About Leqta",
                          title = "We are LEQTA",
                          description = "A content marketing & film production agency based in Algiers. We serve brands, businesses, and changemakers with purposeful video content that blends creativity and strategy.",
                          primaryButtonText = "Get Started",
                          primaryButtonIcon = <Rocket className="w-4 h-4 ml-2"/>,
                          secondaryButtonText = "Learn more",
                          illustration,
                          className = ""
                      }) => {
    // @ts-ignore
    return (
        <div className={`bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-2xl ${className}`}
             style={{height: 671, paddingTop: 128, paddingBottom: 128, paddingLeft: 82, paddingRight: 82}}
        >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Section */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center">
            <span className="text-blue-500 text-sm font-medium  rounded-full w-[165px] h-[40px] flex items-center justify-center">
              {badge}
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {title.split(' ').map((word, index) => (
                            <span key={index} className={word === 'LEQTA' ? 'text-blue-500' : ''}>
                {word}{' '}
              </span>
                        ))}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button variant="primary" className="flex items-center justify-center"
                                rightIcon={<Rocket className="w-4 h-4 ml-2"/>}>
                            {primaryButtonText}
                        </Button>
                        <Button variant="secondary">
                            {secondaryButtonText}
                        </Button>
                    </div>
                </div>

                {/* Illustration Section */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Decorative background elements */}
                        {/*<div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>*/}
                        {/*<div*/}
                        {/*    className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-100 rounded-full opacity-40"></div>*/}
                        {/*<div*/}
                        {/*    className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-100 rounded-full opacity-30"></div>*/}

                        {/* Main illustration container */}
                        <div className="relative z-10 max-w-md w-full">
                            {illustration || (
                                // Fallback illustration if none provided
                                <div
                                    className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                    <div className="text-6xl text-blue-500">🎬</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
