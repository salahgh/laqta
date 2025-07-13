import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Main About Section Component
const AboutSection = ({
    badge = "About Leqta",
    title = "We are LEQTA",
    description = "A content marketing & film production agency based in Algiers. We serve brands, businesses, and changemakers with purposeful video content that blends creativity and strategy.",
    primaryButtonText = "Get Started",
    primaryButtonIcon = <Rocket className="w-4 h-4 ml-2" />,
    secondaryButtonText = "Learn more",
    illustration,
    className = "",
}) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-2xl ${className} pt-8
            md:p-12 md:flex p-4 md:gap-8
            `}
        >
            {/* Content Section */}
            <div className="space-y-6 flex-1">
                {/* Badge */}
                <div className="items-center justify-center ">
                    <Badge>{badge}</Badge>
                </div>
                <h2 className="text-black md:text-[46px] text-[40px] leading-tight">
                    {title.split(" ").map((word, index) => (
                        <span
                            key={index}
                            style={{
                                fontWeight: word === "LEQTA" ? "700" : "500",
                            }}
                            className={
                                word === "LEQTA"
                                    ? "bg-gradient-to-b from-[#1370AD] to-[#ABDEFF] bg-clip-text text-transparent"
                                    : ""
                            }
                        >
                            {word}{" "}
                        </span>
                    ))}
                </h2>
                {/* Description */}
                <p className="text-secondary-gray leading-relaxed text-responsive-lg">
                    {description}
                </p>
                {/*Buttons*/}
                <div className="flex gap-4" style={{ height: 61 }}>
                    <div className={"h-12 md:h-16"}>
                        <Button
                            variant="primary"
                            className=""
                            rightIcon={<Rocket className="w-4 h-4 ml-2" />}
                            leftIcon={null}
                        >
                            {primaryButtonText}
                        </Button>
                    </div>
                    <div className={"h-12 md:h-16"}>
                        <Button
                            variant="secondary"
                            className="text-blue-300"
                            leftIcon={null}
                            rightIcon={null}
                        >
                            {secondaryButtonText}
                        </Button>
                    </div>
                </div>
            </div>
            {/* Illustration Section */}

            <div className="flex justify-center items-center md:max-w-80 lg:max-w-xl">
                {illustration || (
                    // Fallback illustration if none provided
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                        <div className="text-6xl text-blue-500">🎬</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutSection;
